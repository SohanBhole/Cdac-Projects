package com.cdac.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Booking;
import com.cdac.repository.CustomerRepository;
import com.cdac.repository.GenericRepository;

@Service
public class BookingService {
	
	@Autowired
	private GenericRepository genericRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Transactional
	public Booking addOrderSer(Booking booking) {
		return (Booking) genericRepository.save(booking);
	}
			
	public Booking fetchOrder(int id) {
		return genericRepository.findByPK(Booking.class, id);
	}
	
	public List<Booking> getAllOrders(){
		return genericRepository.findAll(Booking.class);
	}

	public List<Booking> getAllOrdersByCusId(int id) {

		return customerRepository.getOrdersByCustomerId(id);
	}

}
