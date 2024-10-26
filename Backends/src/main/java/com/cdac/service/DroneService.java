package com.cdac.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Drone;
import com.cdac.repository.DroneRepository;
import com.cdac.repository.GenericRepository;

@Service
public class DroneService {
	
	@Autowired
	private GenericRepository genericRepository;
	
	@Autowired
	private DroneRepository droneRepository;
	
	@Transactional
	public Drone addDroneSer(Drone drone) {
		return (Drone) genericRepository.save(drone);
	}
			
	public Drone fetch(int id) {
		return genericRepository.findByPK(Drone.class, id);
	}
	
	public List<Drone> getAllDrones(){
		return droneRepository.findAllApproved(Drone.class);
	}
	
	@Transactional
	public Drone update(Drone drone) {
		return (Drone) genericRepository.save(drone);
	}
	
	@Transactional
	public void removePermanently(int id) {
		genericRepository.remove(Drone.class, id);	
	}

	public List<Drone> getDronesForApproval() {
		
		return droneRepository.findAllPending(Drone.class);
	}

	@Transactional
	public void approveDroneRequest(int id) {
		Drone approvedrone=genericRepository.findByPK(Drone.class, id);
		approvedrone.setApproved(true);
		genericRepository.save(approvedrone);
		
	}

}
