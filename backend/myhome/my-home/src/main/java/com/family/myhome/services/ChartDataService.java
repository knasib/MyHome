package com.family.myhome.services;

import com.family.myhome.dto.ChartData;
import com.family.myhome.entities.PurchasedItem;
import com.family.myhome.repositories.PurchasedItemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
@Slf4j
public class ChartDataService {
    private static final String YYYY_MM_DD = "yyyy-MM-dd";
    @Autowired
    PurchasedItemRepository repository;

    public ChartData getDoughnutDataASpecificMonth(String familyName, String yearMonth) {
        log.info("Fetch Doughnut Chart Data for '{}' month for family '{}'", yearMonth, familyName);
        Date end, start;
        if(yearMonth == null || yearMonth.isEmpty()) {
            end = new Date();
            start = new Date(end.getYear(), end.getMonth(), 1);
        } else {
            String date = "" + yearMonth + "-" + "01";
            try {
                start = new SimpleDateFormat(YYYY_MM_DD).parse(date);
            } catch (ParseException e) {
                log.error("Invalid Request", e);
                throw new RuntimeException("Invalid Request");
            }
            end = new Date(start.getYear(), start.getMonth()+1, 01);
        }
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

    public ChartData getBarChartDataForCurrentYear(String familyName) {
        log.info("Fetch BarChart Data for family '{}' for Current Year", familyName);
        Date end = new Date();
        Date start = new Date(end.getYear(), Calendar.JANUARY, 1);
        final List<PurchasedItem> list = repository.findAllByFamilyNameAndPurchaseDateBetweenOrderByPurchaseDateAsc(
                familyName, start, end);
        Map<String, Double> tempMap = new LinkedHashMap<>();
        list.forEach((item) -> {
            String key = this.createKey(item);

            if(tempMap.containsKey(key)) {
                tempMap.put(key, tempMap.get(key) + item.getPrice());
            } else {
                tempMap.put(key, item.getPrice());
            }
        });

        return ChartData.builder()
                .labels(tempMap.keySet())
                .data(tempMap.values())
                .build();
    }

    private String createKey(PurchasedItem item) {
        return "" + (1900 + item.getPurchaseDate().getYear()) + "-"
                + String.format("%02d",item.getPurchaseDate().getMonth() + 1);
    }

}
