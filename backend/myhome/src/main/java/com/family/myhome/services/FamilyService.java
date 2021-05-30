package com.family.myhome.services;

import com.family.myhome.Exceptions.GenericException;
import com.family.myhome.entities.Family;
import com.family.myhome.repositories.FamilyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        final Optional<Family> family = familyRepository.findByName(familyName);
        if(!family.isPresent())
            throw new GenericException(String.format("Family '%s' does not exist", familyName) );
        return family.get();
    }
}
