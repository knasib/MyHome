package com.family.myhome.repositories;

import com.family.myhome.entities.PurchasedItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchasedItemRepository extends JpaRepository<PurchasedItem, Long> {

    List<PurchasedItem> findAllByFamilyName(String familyName);

}
