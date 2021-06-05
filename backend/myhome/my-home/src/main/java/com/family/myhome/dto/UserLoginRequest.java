package com.family.myhome.dto;

import lombok.Data;

@Data
public class UserLoginRequest {
    private String userId;
    private String password;
    private String familyName;
}
