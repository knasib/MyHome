package com.family.myhome.controllers;

import com.family.myhome.dto.ChartData;
import com.family.myhome.services.ChartDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ChartDataResource {

    @Autowired
    ChartDataService service;

    @GetMapping("/families/{familyname}/charts/doughnut")
    public ChartData getDoughnut(@PathVariable String familyname) {
        return service.getDoughnut(familyname);
    }
}
