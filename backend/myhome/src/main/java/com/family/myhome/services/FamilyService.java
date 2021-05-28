package com.family.myhome.services;

import com.family.myhome.entities.Family;
import com.family.myhome.repositories.FamilyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamilyService {
    @Autowired
    FamilyRepository familyRepository;

    public Family addNewFamily(Family newFamily) {
        return familyRepository.save(newFamily);
    }

    public List<Family> getFamilies() {
        return familyRepository.findAll();
    }

    public Family getFamily(Long familyId) {
        return familyRepository.findById(familyId).orElse(null);
    }

    public Family getFamily(String familyName) {
        return familyRepository.findByName(familyName).orElse(null);
    }
}
