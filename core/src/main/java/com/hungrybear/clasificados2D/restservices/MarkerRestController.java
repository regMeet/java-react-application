package com.hungrybear.clasificados2D.restservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MarkerRestController {

    private List<Marker> markers;

    public MarkerRestController() {
        markers = new ArrayList<>();
        markers.add(new Marker(1, -31.4229653f, -64.187141715f));
        markers.add(new Marker(2, -31.4270436f, -64.1825963f));
    }

    @RequestMapping(value = "/markers", method = RequestMethod.GET)
    public List<Marker> getMarkers() {
        return markers;
    }

    @RequestMapping(value = "/markers", method = RequestMethod.POST)
    public void addMarker(@RequestParam(value = "lat") float lat, @RequestParam(value = "lng") float lng) {
        markers.add(new Marker(markers.size(), lat, lng));
    }

}
