package com.family.myhome.repositories;

import com.family.myhome.entities.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface SignUpRepository extends JpaRepository<SignUp, Long> {

    @Query("select u from SignUp u where u.userId=:userId and u.password=:password and u.familyName=:familyName")
    Optional<SignUp> validateUser(@Param("userId") String userId,
                                  @Param("password") String password,
                                  @Param("familyName") String familyName);
}
