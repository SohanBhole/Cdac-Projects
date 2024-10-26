package com.cdac.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cdac.entity.Booking;
import com.cdac.entity.Customer;

@Repository
public class CustomerRepository extends GenericRepository {

	public boolean isValidUser(String email, String password) {
		return (Long) entityManager.createQuery("select count(c) from Customer c where c.email=:em and c.password=:pw")
				.setParameter("em", email).setParameter("pw", password).getSingleResult() == 1 ? true : false;
	}

	public boolean isCustomerPresent(String email) {
		return (Long) entityManager.createQuery("select count(c) from Customer c where c.email=:em")
				.setParameter("em", email).getSingleResult() == 1 ? true : false;
	}
	
	public Customer findCustomerByMail(String email) {
		return (Customer) entityManager.createQuery("select c from Customer c where c.email=:em")
				.setParameter("em", email).getSingleResult();
	}

	public Customer findByEmailPassword(String email, String password) {
		return (Customer) entityManager.createQuery("select c from Customer c where c.email=:em and c.password=:pw")
				.setParameter("em", email).setParameter("pw", password).getSingleResult();
	}

	public long getTotalCustomers() {
		return (long) entityManager.createQuery("select count(c) from Customer c").getSingleResult();
	}

	public long getTotalDrones() {
		return (long) entityManager.createQuery("select count(d) from Drone d").getSingleResult();
	}

	public long getTotalOrders() {
		return (long) entityManager.createQuery("select count(b) from Booking b").getSingleResult();
	}

	public double getTotalOrdersAmount() {
		return (double) entityManager.createQuery("select sum(b.amount) from Booking b").getSingleResult();
	}

	public List<Booking> getOrdersByCustomerId(int id) {
		return entityManager.createQuery("select b from Booking b where b.customer.cusId=:cusid")
				.setParameter("cusid", id).getResultList();
	}

	public long getTotalDronesNew() {
		return (long) entityManager.createQuery("select count(d) from Drone d where d.type=:newdrone")
				.setParameter("newdrone", "new").getSingleResult();
	}

	public long getTotalDronesOld() {
		return (long) entityManager.createQuery("select count(d) from Drone d where d.type=:olddrone")
				.setParameter("olddrone", "old").getSingleResult();
	}

}
