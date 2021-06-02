package com.family.myhome.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String gender;
    private String photoUri;
    private String adharNumber;
    private String panNumber;
    private String mobileNumber;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dob;
    private String emailId;
    @Transient
    private long age;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "MEMBER_FAMILY",
            joinColumns = @JoinColumn(name = "MEMBER_ID"),
            inverseJoinColumns = @JoinColumn(name = "FAMILY_ID"))
    @JsonIgnore
    private Family family;

    public Member setAge(Date dob) {
        long yearDiff = Math.abs(new Date().getTime() - this.dob.getTime());
        this.age = yearDiff / (1000 * 3600 * 24)/365;
        return this;
    }
}
