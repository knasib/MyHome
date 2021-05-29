package com.family.myhome.repositories;

import com.family.myhome.entities.PurchasedItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface PurchasedItemRepository extends JpaRepository<PurchasedItem, Long> {

    List<PurchasedItem> findAllByFamilyName(String familyName);

    List<PurchasedItem> findAllByFamilyNameAndPurchaseDateBetweenOrderByCategory(String familyName,
                                                                                 Date start,
                                                                                 Date end);

    List<PurchasedItem> findAllByFamilyNameAndPurchaseDateBetweenOrderByPurchaseDateAsc(String familyName,
                                                                                 Date start,
                                                                                 Date end);
}
