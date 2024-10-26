package com.cdac.dto;

public class SummaryDetails {
	
	private long totalCustomers;
	private long totalDrones;
	private long totalDronesNew;
	private long totalDronesOld;
	private long totalOrders;
	private double totalOrdersAmount;
	
	public long getTotalCustomers() {
		return totalCustomers;
	}
	public void setTotalCustomers(long totalCustomers) {
		this.totalCustomers = totalCustomers;
	}
	public long getTotalDrones() {
		return totalDrones;
	}
	public void setTotalDrones(long totalDrones) {
		this.totalDrones = totalDrones;
	}
	public long getTotalDronesNew() {
		return totalDronesNew;
	}
	public void setTotalDronesNew(long totalDronesNew) {
		this.totalDronesNew = totalDronesNew;
	}
	public long getTotalDronesOld() {
		return totalDronesOld;
	}
	public void setTotalDronesOld(long totalDronesOld) {
		this.totalDronesOld = totalDronesOld;
	}
	public long getTotalOrders() {
		return totalOrders;
	}
	public void setTotalOrders(long totalOrders) {
		this.totalOrders = totalOrders;
	}
	public double getTotalOrdersAmount() {
		return totalOrdersAmount;
	}
	public void setTotalOrdersAmount(double totalOrdersAmount) {
		this.totalOrdersAmount = totalOrdersAmount;
	}
	
}
