package com.family.myhome.controllers;

import com.family.myhome.dto.UserLoginRequest;
import com.family.myhome.entities.UserLogin;
import com.family.myhome.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserLoginResource {

    @Autowired
    LoginService service;

    @PostMapping(path = "/login")
    private UserLogin login(@RequestBody UserLoginRequest loginRequest) {
        return service.login(loginRequest);
    }

    @DeleteMapping(path = "/logout")
    private void logout(@RequestBody UserLoginRequest loginRequest) {
        service.login(loginRequest);
    }
}
