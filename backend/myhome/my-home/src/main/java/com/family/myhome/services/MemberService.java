package com.family.myhome.services;

import com.family.myhome.Exceptions.GenericException;
import com.family.myhome.entities.Family;
import com.family.myhome.entities.Member;
import com.family.myhome.repositories.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class MemberService {
    @Autowired
    private FamilyService familyService;
    @Autowired
    private MemberRepository memberRepository;

    public Member addMember(String familyName, Member newMember) {
        log.info("Add new Family member '{}'", newMember.getName());
        final Family family = getFamily(familyName);
        newMember.setAge(newMember.getDob());
        newMember.setFamily(family);
        return memberRepository.save(newMember);
    }

    public Member updateMember(String familyName, Long memberId, Member updatedMember) {
        log.info("Update Family member details for '{}'", updatedMember.getName());
        final Family family = getFamily(familyName);
        updatedMember.setAge(updatedMember.getDob());
        updatedMember.setFamily(family);
        updatedMember.setId(memberId);
        return memberRepository.save(updatedMember);
    }

    public boolean deleteMember(long memberId) {
        log.info("Delete member '{}' from family", memberId);
        try {
            memberRepository.deleteById(memberId);
        } catch (Exception ex) {
            log.error("Error Occured :", ex);
            throw new GenericException(ex.getMessage());
        }
        return true;
    }

    public List<Member> getMembers(String familyName) {
        log.info("Get all family member of family '{}'", familyName);
        return memberRepository.getByFamilyName(familyName)
                .stream()
                .map(member -> member.setAge(member.getDob()))
                .collect(Collectors.toList());
    }

    public Member getMember(String familyName, Long memberId) {
        log.info("Get member details  for member id '{}'", memberId);
        Member member = memberRepository.getByFamilyNameAndId(familyName, memberId);
        return member.setAge(member.getDob());
    }

    private Family getFamily(String familyName) {
        final Family family = familyService.getFamily(familyName);
        if (family == null) {
            log.error("Family '{}' not found", familyName);
            throw new GenericException(String.format("Family %s not found", familyName));
        }
        return family;
    }
}
