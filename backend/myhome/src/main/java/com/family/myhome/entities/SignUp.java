package com.family.myhome.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignUp {
    @Id
    private String userId;
    private String password;
    private String confirmPassword;
    private String familyName;

    /*@OneToOne
    @JoinColumn(name = "familyName", insertable = false,updatable = false, referencedColumnName = "name")
    @Transient
    @JsonIgnore
    private Family family;*/
}
