package com.family.myhome.entities;

import com.family.myhome.dto.UserStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.Date;

@Entity(name = "LOGIN")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserLogin {
    @Id
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

