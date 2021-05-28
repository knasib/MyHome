package com.family.myhome.repositories;

import com.family.myhome.entities.PurchasingItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchasingItemRepository extends JpaRepository<PurchasingItem, Long> {
    void deleteAllByFamilyName(String familyName);
}
