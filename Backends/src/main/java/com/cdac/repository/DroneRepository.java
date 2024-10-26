package com.cdac.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class DroneRepository {

	@PersistenceContext
	protected EntityManager entityManager;

	public <E> List<E> findAllPending(Class<E> clazz) {
		//System.out.println("Entered till Drone Repo");
		return entityManager.createQuery("select obj from " + clazz.getName() + " obj where obj.approved=:yesorno")
				.setParameter("yesorno", false).getResultList();
	}
	
	public <E> List<E> findAllApproved(Class<E> clazz) {
		//System.out.println("Entered till Drone Repo");
		return entityManager.createQuery("select obj from " + clazz.getName() + " obj where obj.approved=:yesorno")
				.setParameter("yesorno", true).getResultList();
	}
}
