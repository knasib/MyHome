package com.family.myhome.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity//(name="FAMILY")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Family {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique = true)
    private String name;

    @OneToMany(fetch = FetchType.LAZY,cascade = {CascadeType.ALL},mappedBy = "family")
    @JsonIgnore
    private Collection<Member> members;

    /*@OneToOne(mappedBy = "family")
    @Transient
    @JsonIgnore
    private SignUp signUp;*/
}
