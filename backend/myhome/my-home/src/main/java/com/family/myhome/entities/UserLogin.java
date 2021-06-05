package com.family.myhome.entities;

import com.family.myhome.dto.UserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "LOGIN")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String userId;
    @JsonIgnore
    private String password;
    private String familyName;
    private boolean active;
    private UserStatus status;
    private Date loginAt;
    @Transient
    private Date expiryAt;
}

