package com.family.myhome.services;

import com.family.myhome.entities.PurchasingItem;
import com.family.myhome.repositories.PurchasingItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchasingItemService {
    @Autowired
    PurchasingItemRepository repository;
    public List<PurchasingItem> getItems(String familyName) {
        return repository.findAll();
    }
}
