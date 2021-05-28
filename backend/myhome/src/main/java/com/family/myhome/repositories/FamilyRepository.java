package com.family.myhome.repositories;

import com.family.myhome.entities.Family;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FamilyRepository extends JpaRepository<Family, Long> {

    Optional<Family> findByName(String name);

}
