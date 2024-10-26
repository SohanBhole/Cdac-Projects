package com.cdac.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.cdac.dto.LoginDetails;
import com.cdac.entity.Customer;
import com.cdac.exception.CustomerServiceException;
import com.cdac.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private EmailService emailService;
	
	@Transactional
	public int register(Customer customer) {
		if(customerRepository.isCustomerPresent(customer.getEmail()))
			throw new CustomerServiceException("Customer already registered !");
		else {
			Customer updatedCustomer=(Customer) customerRepository.save(customer);
			emailService.sendEmailForNewRegistration(customer.getEmail());
			return updatedCustomer.getCusId();			
		}			
	}
	
	public Customer login(LoginDetails loginDetails) {
		try {
			Customer customer=customerRepository.findByEmailPassword(loginDetails.getEmail(), loginDetails.getPassword());
			return customer;
		}
		catch(EmptyResultDataAccessException e) {
			System.out.println(e.getMessage());
			
			throw new CustomerServiceException("Invalid username/password !");
		}
	}	
		
	public Customer fetch(int id) {
		return customerRepository.findByPK(Customer.class, id);
	}
	
	public List<Customer> fetchAll() {
		return customerRepository.findAll(Customer.class);
	}
	
	@Transactional
	public Customer update(Customer customer) {
		return (Customer) customerRepository.save(customer);
	}

	@Transactional
	public void removePermanently(int id) {
		customerRepository.remove(Customer.class, id);	
	}
	
	@Transactional
	public Customer changePassword(Customer customer) {
		return (Customer) customerRepository.save(customer);	
	}
	

}
