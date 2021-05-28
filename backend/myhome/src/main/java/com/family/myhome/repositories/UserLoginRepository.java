package com.family.myhome.repositories;

import com.family.myhome.entities.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLoginRepository extends JpaRepository<UserLogin, String> {
    void deleteByUserId(String userID);
}
