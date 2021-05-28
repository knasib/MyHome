package com.family.myhome.repositories;

import com.family.myhome.entities.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    public List<Member> getByFamilyName(String familyName);
    public Member getByFamilyNameAndId(String familyName, Long memberid);
}
