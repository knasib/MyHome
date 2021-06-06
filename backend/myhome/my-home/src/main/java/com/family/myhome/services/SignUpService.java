package com.family.myhome.services;

import com.family.myhome.exceptions.GenericException;
import com.family.myhome.entities.SignUp;
import com.family.myhome.repositories.FamilyRepository;
import com.family.myhome.repositories.SignUpRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Slf4j
public class SignUpService {
    @Autowired
    SignUpRepository signUpRepository;

    @Autowired
    FamilyRepository familyRepository;

    @Transactional
    public SignUp registerUser(SignUp newUser) {
        log.info("Register user '{}'", newUser.getUserId());
        if(!familyRepository.findByName(newUser.getFamilyName()).isPresent()) {
            log.error("There is no family with name '{}'", newUser.getFamilyName());
            throw new GenericException("There is no family with name " + newUser.getFamilyName());
        }

        if(newUser.getPassword() != null && !newUser.getPassword().equals(newUser.getConfirmPassword())) {
            log.error("Password & Confirm Password are different for user '{}'", newUser.getUserId());
            throw new GenericException("Password & Confirm Password are different");
        }

        if(signUpRepository.validateUser(newUser.getUserId(),
                newUser.getPassword(),
                newUser.getFamilyName()).isPresent()) {
            log.error("User '{}' is already registered for family '{}'", newUser.getUserId(), newUser.getFamilyName());
            throw new GenericException(String.format("User %s is already registered for family %s",
                    newUser.getUserId(), newUser.getFamilyName()));

        }

        signUpRepository.save(newUser);
        return SignUp.builder()
                .userId(newUser.getUserId())
                .familyName(newUser.getFamilyName())
                .password("******")
                .confirmPassword("*****").build();
    }
}
