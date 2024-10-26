package com.cdac.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.OnDelete;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Drone {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int droneId;
	
	private String modelName;
	private String company;
	private double price;
	private int rating;
	private String dronePic;
	private String type;
	private boolean approved;

	@OneToMany(mappedBy = "drone")
	@JsonIgnore
	private List<Booking> bookinglist;

	public int getDroneId() {
		return droneId;
	}

	public void setDroneId(int droneId) {
		this.droneId = droneId;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public List<Booking> getBookinglist() {
		return bookinglist;
	}

	public void setBookinglist(List<Booking> bookinglist) {
		this.bookinglist = bookinglist;
	}

	public String getDronePic() { 
		return dronePic; 
	}
	 
	public void setDronePic(String dronePic) {
		this.dronePic = dronePic;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

}
