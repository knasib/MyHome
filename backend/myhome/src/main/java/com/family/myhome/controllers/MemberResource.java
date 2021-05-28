package com.family.myhome.controllers;

import com.family.myhome.entities.Member;
import com.family.myhome.services.FamilyService;
import com.family.myhome.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MemberResource {

    @Autowired
    FamilyService familyService;

    @Autowired
    MemberService memberService;

    @GetMapping("/families/{familyName}/members/{memberid}")
    public Member getMember(@PathVariable String familyName,
                            @PathVariable Long memberid) {
        return memberService.getMember(familyName, memberid);
    }

    @PostMapping(path = "/families/{familyName}/members",
            consumes = "application/json",
            produces = "application/json")
    public Member addMember(@PathVariable String familyName, @RequestBody Member newMember) {
        return memberService.addMember(familyName, newMember);
    }

    @PutMapping(path = "/families/{familyName}/members/{memberid}",
            consumes = "application/json",
            produces = "application/json")
    public Member updateMember(@PathVariable String familyName,
                               @PathVariable Long memberid,
                               @RequestBody Member newMember) {
        return memberService.updateMember(familyName, memberid, newMember);
    }

    @DeleteMapping(path="/families/{familyName}/members/{memberid}")
    public ResponseEntity<Member> deleteMember(@PathVariable Long memberid) {
        final boolean status = memberService.deleteMember(memberid);
        if(!status) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

    @GetMapping("/families/{familyName}/members")
    public List<Member> getMembers(@PathVariable String familyName) {
        return memberService.getMembers(familyName);
    }

}
