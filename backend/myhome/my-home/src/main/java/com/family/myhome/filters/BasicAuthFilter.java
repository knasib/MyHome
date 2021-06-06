package com.family.myhome.filters;


import com.family.myhome.exceptions.GenericException;
import com.family.myhome.repositories.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;


@Component
@Order(1)
public class BasicAuthFilter implements Filter {


    private static final String SIGNUP_URI = "/signup";
    private static final String LOGIN_URI = "/login";
    @Autowired
    SignUpRepository signUpRepository;

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;

        final String authorization = request.getHeader("Authorization");
        if (authorization != null && authorization.toLowerCase().startsWith("basic")) {
            // Authorization: Basic base64credentials
            String base64Credentials = authorization.substring("Basic".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded, StandardCharsets.UTF_8);
            // credentials = username:password
            String[] values = credentials.split(":", 3);

            if(!(request.getRequestURI().equalsIgnoreCase(SIGNUP_URI) ||
                    request.getRequestURI().equalsIgnoreCase(LOGIN_URI))) {
                if(!signUpRepository.validateUser(values[0], values[1], values[2]).isPresent()) {
                    throw new GenericException(values[0] + " user is not authorized");
                }
            }
        }


        filterChain.doFilter(servletRequest, servletResponse);
    }
}
