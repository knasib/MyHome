package com.family.myhome.controllers;

import com.family.myhome.entities.SignUp;
import com.family.myhome.services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class SignUpResource {
    @Autowired
    SignUpService signUpService;

    @PostMapping(path = "/signup")
    private SignUp registerUser(@RequestBody SignUp newUser) {
        final SignUp signUp = signUpService.registerUser(newUser);
        return signUp;
    }
}
