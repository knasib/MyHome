package com.family.myhome.repositories;

import com.family.myhome.entities.PurchasingItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchasingItemRepository extends JpaRepository<PurchasingItem, Long> {
    List<PurchasingItem> findAllByFamilyName(String familyName);
    void deleteAllByFamilyName(String familyName);
}
