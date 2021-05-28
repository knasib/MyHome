package com.family.myhome.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroceryItem {
    private Long id;
    private double price;
    private Long quantity;
    private String quantityUnit;
    private Date purchaseDate;
}
