package com.hungrybear.clasificados2D.restservices;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Marker {
    private int id;
    private float lat;
    private float lng;
}
