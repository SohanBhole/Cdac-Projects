package com.cdac.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.LoginDetails;
import com.cdac.dto.LoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.entity.Customer;
import com.cdac.exception.CustomerServiceException;
import com.cdac.service.CustomerService;

@RestController
@CrossOrigin
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/register")
	public RegistrationStatus register(@RequestBody Customer customer) {
		try {
			customer.setRole("user");
			int id=customerService.register(customer);
			RegistrationStatus status=new RegistrationStatus();
			status.setStatus(true);
			status.setMessage("Registration is successfull !");
			status.setRegisteredCustomerId(id);
			return status;
		}
		catch(CustomerServiceException e) {
			RegistrationStatus status=new RegistrationStatus();
			status.setStatus(false);
			status.setMessage(e.getMessage());
			return status;
		}
		
	}
	
	@PostMapping("/login")
	public LoginStatus login(@RequestBody LoginDetails loginDetails) {
		try {
			Customer customer=customerService.login(loginDetails);
			
			LoginStatus status=new LoginStatus();
			status.setStatus(true);
			status.setMessage("Login Successful !");
			status.setCustomer(customer);
			return status;
		}
		catch(CustomerServiceException e) {
			LoginStatus status=new LoginStatus();
			status.setStatus(false);
			status.setMessage(e.getMessage());
			return status;
		}
	}
	
	@GetMapping("/getCustomer")
	public Customer fetchCustomer(@RequestParam("customerId") int id) {
		Customer customer = customerService.fetch(id);
		return customer;
	}
	
	@GetMapping("/getAllCustomers")
	public List<Customer> fetchAllCustomers() {
		List<Customer> list = customerService.fetchAll();
		return list;
	}
	
	@PostMapping("/updateCustomer")
	public Customer updateCustomer(@RequestBody Customer customer) {
		return customerService.update(customer);
	}
	
	@GetMapping("/deleteCustomer")
	public void deleteCustomer(@RequestParam("customerId") int id) {
		customerService.removePermanently(id);
	}
	
	
}
