package com.family.myhome.services;

import com.family.myhome.repositories.PurchasedItemRepository;
import com.family.myhome.repositories.PurchasingItemRepository;
import com.family.myhome.exceptions.GenericException;
import com.family.myhome.entities.PurchasedItem;
import com.family.myhome.entities.PurchasingItem;
import com.family.myhome.repositories.FamilyRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class PurchasedItemService {
    @Autowired
    PurchasedItemRepository purchasedItemRepository;

    @Autowired
    PurchasingItemRepository purchasingItemRepository;

    @Autowired
    FamilyRepository familyRepository;

    @Transactional
    public void saveItems(String familyName, List<PurchasedItem> purchasedItems) {
        log.info("Save Purchased items for family '{}'. Items are {}", familyName, purchasedItems);
        if(!familyRepository.findByName(familyName).isPresent()) {
            log.error("There is no family with name '{}'", familyName);
            throw new GenericException("There is no family with name " + familyName);
        }
        purchasedItems.forEach(item -> item.setFamilyName(familyName));
        purchasedItemRepository.saveAll(purchasedItems);

        //Add to purchasing list which will be the last purchased items
        purchasingItemRepository.deleteAllByFamilyName(familyName);

        purchasingItemRepository.saveAll(
                purchasedItems.stream().map(purchasedItem -> {
                    return PurchasingItem.builder()
                                    .name(purchasedItem.getName())
                                    .price(purchasedItem.getPrice())
                                    .quantity(purchasedItem.getQuantity())
                                    .quantityUnit(purchasedItem.getQuantityUnit())
                                    .category(purchasedItem.getCategory())
                                    .familyName(purchasedItem.getFamilyName())
                            .build();
                }).collect(Collectors.toList())
        );
    }

    public List<PurchasedItem> getPurchasedItemList(String familyName) {
        log.info("Get All Purchased items for family '{}'", familyName);
        if(!familyRepository.findByName(familyName).isPresent()) {
            throw new GenericException("There is no family with name " + familyName);
        }
        return purchasedItemRepository.findAllByFamilyName(familyName);
    }
}
