package com.family.myhome.services;

import com.family.myhome.entities.PurchasingItem;
import com.family.myhome.repositories.PurchasingItemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PurchasingItemService {
    @Autowired
    PurchasingItemRepository repository;
    public List<PurchasingItem> getItems(String familyName) {
        log.info("Get Purchasing items for family '{}'", familyName);
        return repository.findAllByFamilyName(familyName);
    }
}
