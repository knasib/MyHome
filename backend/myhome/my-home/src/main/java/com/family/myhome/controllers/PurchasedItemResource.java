package com.family.myhome.controllers;

import com.family.myhome.entities.PurchasedItem;
import com.family.myhome.services.PurchasedItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/families/{familyname}/purchased")
public class PurchasedItemResource {

    @Autowired
    PurchasedItemService service;

    @GetMapping()
    public List<PurchasedItem> getItems(@PathVariable String familyname) {
        return service.getPurchasedItemList(familyname);
    }

    @PostMapping()
    public void addItems(@PathVariable String familyname,
                         @RequestBody List<PurchasedItem> items) {
        service.saveItems(familyname, items);
    }
}
