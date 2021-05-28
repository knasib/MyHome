package com.family.myhome.controllers;

import com.family.myhome.entities.Family;
import com.family.myhome.services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class FamilyResource {
    @Autowired
    FamilyService familyService;

    @PostMapping(path = "/families",
            consumes = "application/json",
            produces = "application/json")
    public Family addNewFamily(@RequestBody Family newFamily) {
        return familyService.addNewFamily(newFamily);
    }

    @GetMapping("/families")
    public List<Family> getFamilies() {
        return familyService.getFamilies();
    }

    @GetMapping("/families/{familyid}")
    public Family getFamilies(@PathVariable(name="familyid") Long familyId) {
        return familyService.getFamily(familyId);
    }
}
