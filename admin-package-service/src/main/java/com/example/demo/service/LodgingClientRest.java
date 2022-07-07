package com.example.demo.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "lodging-service")
public interface LodgingClientRest {
    @GetMapping("{id}")
    public ResponseEntity<?> getLodgingById(@PathVariable(name = "id") Long id);
}
