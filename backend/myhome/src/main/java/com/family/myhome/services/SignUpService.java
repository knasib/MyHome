package com.family.myhome.services;

import com.family.myhome.Exceptions.GenericException;
import com.family.myhome.entities.Family;
import com.family.myhome.entities.SignUp;
import com.family.myhome.repositories.FamilyRepository;
import com.family.myhome.repositories.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class SignUpService {
    @Autowired
    SignUpRepository signUpRepository;

    @Autowired
    FamilyRepository familyRepository;

    @Transactional
    public SignUp registerUser(SignUp newUser) {

        if(!familyRepository.findByName(newUser.getFamilyName()).isPresent()) {
            throw new GenericException("There is no family with name " + newUser.getFamilyName());
        }

        if(newUser.getPassword() != null && !newUser.getPassword().equals(newUser.getConfirmPassword())) {
            throw new GenericException("Password & Confirm Password are different");
        }

        if(signUpRepository.validateLogin(newUser.getUserId(),
                newUser.getPassword(),
                newUser.getFamilyName()) != null) {
            throw new GenericException(String.format("User %s is already registered", newUser.getFamilyName()));
        }

        signUpRepository.save(newUser);
        newUser.setPassword("*****");
        newUser.setConfirmPassword("*****");
        return newUser;
    }
}
