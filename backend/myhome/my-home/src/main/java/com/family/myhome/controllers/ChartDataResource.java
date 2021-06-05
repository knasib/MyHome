package com.family.myhome.controllers;

import com.family.myhome.dto.ChartData;
import com.family.myhome.services.ChartDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/families/{familyname}/charts")
public class ChartDataResource {

    @Autowired
    ChartDataService service;

    @GetMapping("/doughnut")
    public ChartData getDoughnut(@PathVariable String familyname,
                                 @RequestParam(required = false) String yearmonth) {
        return service.getDoughnutDataASpecificMonth(familyname, yearmonth);
    }

    @GetMapping("/barchart")
    public ChartData getBarchart(@PathVariable String familyname) {
        return service.getBarChartDataForCurrentYear(familyname);
    }
}
