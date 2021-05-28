package com.family.myhome.services;

import com.family.myhome.Exceptions.GenericException;
import com.family.myhome.entities.Family;
import com.family.myhome.entities.Member;
import com.family.myhome.repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MemberService {
    @Autowired
    private FamilyService familyService;
    @Autowired
    private MemberRepository memberRepository;

    public Member addMember(String familyName, Member newMember) {
        System.out.println(newMember);
        final Family family = familyService.getFamily(familyName);
        if (family == null) {
            throw new GenericException(String.format("Family %d not found", familyName));
        }
        newMember.setAge(newMember.getDob());
        newMember.setFamily(family);
        return memberRepository.save(newMember);
    }

    public Member updateMember(String familyName, Long memberId, Member updatedMember) {
        final Family family = familyService.getFamily(familyName);
        if (family == null) {
            throw new GenericException(String.format("Family %d not found", familyName));
        }
        updatedMember.setId(memberId);
        updatedMember.setAge(updatedMember.getDob());
        updatedMember.setFamily(family);
        return memberRepository.save(updatedMember);
    }

    public boolean deleteMember(long memberId) {
        try {
            memberRepository.deleteById(memberId);
        } catch (Exception ex) {
            throw new GenericException(ex.getMessage());
        }
        return true;
    }

    public List<Member> getMembers(String familyName) {
        return memberRepository.getByFamilyName(familyName)
                .stream()
                .map(member -> member.setAge(member.getDob()))
                .collect(Collectors.toList());
    }

    public Member getMember(String familyName, Long memberId) {
        Member member = memberRepository.getByFamilyNameAndId(familyName, memberId);
        return member.setAge(member.getDob());
    }
}
