package com.family.myhome.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChartData {
    private Set<String> labels = new HashSet<>();
    private Collection<Double> data = new ArrayList<>();
}
