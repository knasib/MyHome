package com.family.myhome.repositories;

import com.family.myhome.entities.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SignUpRepository extends JpaRepository<SignUp, String> {

    @Query("select u from SignUp u where u.userId =:userId and u.password=:password and u.familyName =:familyName")
    SignUp validateLogin(@Param("userId") String userId,
                         @Param("password") String password,
                         @Param("familyName") String familyName);
}
