package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.SummaryDetails;
import com.cdac.entity.Drone;
import com.cdac.service.DroneService;
import com.cdac.service.SummaryService;

@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private SummaryService summaryService;
	
	@Autowired
	private DroneService droneService;
	
	@GetMapping("/getSummary")
	public SummaryDetails getSummary() {
		return summaryService.getSummaryDetails();
	}
	
	@GetMapping("/getDroneRequests")
	public List<Drone> getDroneRequests() {
		return droneService.getDronesForApproval();
	}

}
