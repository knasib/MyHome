package com.family.myhome.services;

import com.family.myhome.dto.UserStatus;
import com.family.myhome.Exceptions.GenericException;
import com.family.myhome.dto.UserLoginRequest;
import com.family.myhome.entities.SignUp;
import com.family.myhome.entities.UserLogin;
import com.family.myhome.repositories.SignUpRepository;
import com.family.myhome.repositories.UserLoginRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.Optional;

@Service
@Slf4j
public class LoginService {
    @Autowired
    UserLoginRepository userLoginRepository;

    @Autowired
    SignUpRepository signUpRepository;

    @Transactional
    public UserLogin login(UserLoginRequest loginRequest) {
        log.info("Validation the user login for user '{}'", loginRequest.getUserId());
        final Optional<SignUp> signUp = signUpRepository.validateUser(loginRequest.getUserId(),
                loginRequest.getPassword(),
                loginRequest.getFamilyName());
        if(!signUp.isPresent()) {
            log.error("Login failed for '{}'", loginRequest.getUserId());
            throw new GenericException(String.format("Login failed for %s", loginRequest.getUserId()));
        }

        final UserLogin logginUser = UserLogin.builder()
                .userId(loginRequest.getUserId())
                .password("*****")
                .familyName(loginRequest.getFamilyName())
                .active(true)
                .status(UserStatus.ACTIVE)
                .loginAt(new Date())
                .expiryAt(new Date(new Date().getTime() + 1000 * 60 * 15)) //Auto logout after 15 mins
                .build();

        //TODO: Encript the password before saving to database. MD5
        userLoginRepository.save(logginUser);
        return logginUser;
    }

    public void logout(String userId) {
        log.info("Logout for user '{}'", userId);
        userLoginRepository.deleteByUserId(userId);
    }
}
