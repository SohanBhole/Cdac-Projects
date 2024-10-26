package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.dto.SummaryDetails;
import com.cdac.repository.CustomerRepository;

@Service
public class SummaryService {

	@Autowired
	private CustomerRepository customerRepository;
	
	public SummaryDetails getSummaryDetails() {
		
		long i=customerRepository.getTotalCustomers();
		long j=customerRepository.getTotalDrones();
		long k=customerRepository.getTotalDronesNew();
		long l=customerRepository.getTotalDronesOld();
		long m=customerRepository.getTotalOrders();
		double n=customerRepository.getTotalOrdersAmount();
		
		SummaryDetails summary=new SummaryDetails();
		summary.setTotalCustomers(i-1);
		summary.setTotalDrones(j);
		summary.setTotalDronesNew(k);
		summary.setTotalDronesOld(l);
		summary.setTotalOrders(m);
		summary.setTotalOrdersAmount(n);
		
		return summary;
	}
}
