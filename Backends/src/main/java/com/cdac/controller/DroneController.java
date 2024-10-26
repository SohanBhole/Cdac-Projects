package com.cdac.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cdac.dto.DronePicDetails;
import com.cdac.dto.DronePicUploadStatus;
import com.cdac.entity.Drone;
import com.cdac.service.DroneService;

@RestController
@CrossOrigin
public class DroneController {
	
	@Autowired
	private DroneService droneService;
	
	@PostMapping("/addDrone")
	public Drone addDrone(@RequestBody Drone drone) {
		return droneService.addDroneSer(drone);
	}
	
	@GetMapping("/getDrone")
	public Drone fetchDrone(@RequestParam("droneId") int id) {
		Drone drone = droneService.fetch(id);
		return drone;
	}
	
	@GetMapping("/getAllDrones")
	public List<Drone> getAllDrones() {		
		return droneService.getAllDrones();
	}	
	
	@PostMapping("/updateDrone")
	public Drone updateDrone(@RequestBody Drone drone) {
		return droneService.update(drone);
	}
	
	@GetMapping("/deleteDrone")
	public void deleteDrone(@RequestParam("droneId") int id) {
		droneService.removePermanently(id);
	}
	
	@RequestMapping("/approveDrone")
	public void approveDrone(@RequestParam("droneId") int id) {
		droneService.approveDroneRequest(id);
	}
	
	@PostMapping(path="/uploaddronepic" )
	//public DronePicUploadStatus uploadDronePic(@RequestParam("dronePic") MultipartFile file) {
	public DronePicUploadStatus uploadDronePic(@ModelAttribute DronePicDetails dronePicDetails) {
		//System.out.println("Entered the controller");
		//System.out.println(dronePicDetails.getDroneId());
		//System.out.println(dronePicDetails.getDronePic().getOriginalFilename());
		//System.out.println(2);
		
		//store the image in some folder
		//String uploadedPicname=dronePicDetails.getDronePic().getOriginalFilename();
		//String filename=dronePicDetails.getDroneId()+"-"+uploadedPicname;
		
		//String uploadedPicname=file.getOriginalFilename();
		//String filename=2+"-"+uploadedPicname;
		
		Drone drone=new Drone();
		drone.setModelName(dronePicDetails.getModelName());
		drone.setCompany(dronePicDetails.getCompany());
		drone.setPrice(dronePicDetails.getPrice());
		drone.setRating(dronePicDetails.getRating());
		drone.setType(dronePicDetails.getType());
		drone.setApproved(dronePicDetails.isApproved());
		drone.setDronePic(null);
		
		Drone dronetemp=droneService.addDroneSer(drone);
		dronePicDetails.setDroneId(dronetemp.getDroneId());
		
		String uploadedPicname=dronePicDetails.getDronePic().getOriginalFilename();
		String filename=dronePicDetails.getDroneId()+"-"+uploadedPicname;
		
		try {
			FileCopyUtils.copy(dronePicDetails.getDronePic()/*file*/.getInputStream(), new FileOutputStream("C:\\Users\\sohan\\Desktop\\Project\\dronebiz\\public\\images\\droneimages\\"+filename));
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//update the information in DB
		//Drone drone=droneService.fetch(dronePicDetails.getDroneId());
		//Drone drone=droneService.fetch(dronePicDetails.getDroneId());
		dronetemp.setDronePic(filename);
		droneService.update(dronetemp);
		
		DronePicUploadStatus status=new DronePicUploadStatus();
		status.setStatus(true);
		status.setMessage("Drone image uploaded successfully");
		return status;
	}
	
	/*
	@PostMapping("/addDroneTRY")
	public Drone addDroneTRY(@RequestParam("dronePic") MultipartFile file, @RequestParam("modelName") String modelName) {
		
		Drone drone=new Drone();
		//drone.setDroneId(dronePicDetails.getDroneId());
		drone.setModelName(dronePicDetails.getModelName());
		drone.setCompany(dronePicDetails.getCompany());
		drone.setPrice(dronePicDetails.getPrice());
		drone.setRating(dronePicDetails.getRating());
		drone.setDronePic(null);
		
		Drone dronetemp=droneService.addDroneSer(drone);
				
		String uploadedPicname=file.getOriginalFilename();
		String filename=dronetemp.getDroneId()+"-"+uploadedPicname;
					
		try {
			FileCopyUtils.copy(file.getInputStream(), new FileOutputStream("C:\\Users\\mohan\\Desktop\\Final Project CDAC\\Dronebiz\\dronebiz\\src\\images\\droneimages\\"+filename));
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		dronetemp.setDronePic(filename);
		return droneService.addDroneSer(dronetemp);
	}
*/
}
