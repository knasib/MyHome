package com.family.myhome.controllers;

import com.family.myhome.entities.Family;
import com.family.myhome.services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/families")
public class FamilyResource {
    @Autowired
    FamilyService familyService;

    @PostMapping(consumes = "application/json",
            produces = "application/json")
    public Family addNewFamily(@RequestBody Family newFamily) {
        return familyService.addNewFamily(newFamily);
    }

    @GetMapping()
    public List<Family> getFamilies() {
        return familyService.getFamilies();
    }

    @GetMapping("/{familyid}")
    public Family getFamilies(@PathVariable(name="familyid") Long familyId) {
        return familyService.getFamily(familyId);
    }
}
