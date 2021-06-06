package com.family.myhome.services;

import com.family.myhome.exceptions.GenericException;
import com.family.myhome.entities.Family;
import com.family.myhome.repositories.FamilyRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
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
        log.info("Fetch the family with family name '{}'", familyName);
        final Optional<Family> family = familyRepository.findByName(familyName);
        if(!family.isPresent()) {
            log.error("Family '{}' does not exist", familyName);
            throw new GenericException(String.format("Family '%s' does not exist", familyName));
        }
        return family.get();
    }
}
