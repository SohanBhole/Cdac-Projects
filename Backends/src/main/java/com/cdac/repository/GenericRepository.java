package com.cdac.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class GenericRepository {

	@PersistenceContext
	protected EntityManager entityManager;
	
	public Object save(Object obj) {
		return entityManager.merge(obj);
	}
	
	public <E> E findByPK(Class<E> clazz, Object pk) {
		return entityManager.find(clazz, pk);
	}
	
	public <E> List<E> findAll(Class<E> clazz) {
		return entityManager
				.createQuery("select obj from " + clazz.getName() +" obj")
				.getResultList();
	}
	
	public <E> void remove(Class<E> clazz, Object pk) {
		E e = entityManager.find(clazz, pk);
		entityManager.remove(e);
	}
}
