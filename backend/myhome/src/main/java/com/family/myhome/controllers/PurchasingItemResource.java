package com.family.myhome.controllers;

import com.family.myhome.entities.PurchasingItem;
import com.family.myhome.repositories.PurchasingItemRepository;
import com.family.myhome.services.PurchasingItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PurchasingItemResource {

    @Autowired
    PurchasingItemService service;

    @GetMapping("/families/{familyname}/purchasing")
    public List<PurchasingItem> getItems(@PathVariable String familyname) {
        return service.getItems(familyname);
    }
}
