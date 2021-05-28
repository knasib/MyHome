package com.family.myhome.services;

import com.family.myhome.dto.ChartData;
import com.family.myhome.entities.PurchasedItem;
import com.family.myhome.repositories.PurchasedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ChartDataService {
    @Autowired
    PurchasedItemRepository repository;

    public ChartData getDoughnut(String familyName) {
        Date end = new Date();
        Date start = new Date(end.getYear(), end.getMonth(), 1);
        final List<PurchasedItem> list = repository.findAllByFamilyNameAndPurchaseDateBetweenOrderByCategory(
                familyName, start, end);

        Map<String, Double> tempMap = new HashMap<>();

        list.forEach((item) -> {

            if(tempMap.containsKey(item.getCategory())) {
                tempMap.put(item.getCategory(), tempMap.get(item.getCategory()) + item.getPrice());
            } else {
                tempMap.put(item.getCategory(), item.getPrice());
            }
        });

        return ChartData.builder()
                .labels(tempMap.keySet())
                .data(tempMap.values())
                .build();
    }

}
