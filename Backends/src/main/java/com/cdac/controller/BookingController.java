package com.cdac.controller;

import java.io.FileNotFoundException;
import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Booking;
import com.cdac.service.BookingService;
import com.cdac.service.EmailService;
import com.cdac.service.PdfGenerate;


@RestController
@CrossOrigin
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private EmailService emailService;
	

	
	/*
	@PostMapping("/addOrder")
	public Booking addOrder(@RequestBody Booking booking) {
		booking.setBookDate(LocalDateTime.now());
		return bookingService.addOrderSer(booking);	
	}
	*/
	@PostMapping("/addOrder")
	public Booking addOrder(@RequestBody Booking booking, HttpServletResponse response) throws FileNotFoundException{
		booking.setBookDate(LocalDateTime.now());
		Booking book= bookingService.addOrderSer(booking);// order added to DB
		
		//generate invoice pdf
		response.setContentType("application/pdf");
		
		String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + ".pdf";
        response.setHeader(headerKey, headerValue);
		
        PdfGenerate exporter = new PdfGenerate(book);
        exporter.export(response);
        
        
        //send mail of confirmation of order
        emailService.orderMail(book.getCustomer().getEmail());
		
		return book;
	}
	
	@GetMapping("/getOrder")
	public Booking fetchOrder(@RequestParam("orderId") int id) {
		Booking booking = bookingService.fetchOrder(id);
		return booking;
	}
	
	@GetMapping("/getAllOrders")
	public List<Booking> getAllOrders() {		
		return bookingService.getAllOrders();
	}
	
	@GetMapping("/getAllOrdersByCusId")
	public List<Booking> getAllOrdersByCustomerId(@RequestParam("customerId") int id) {		
		return bookingService.getAllOrdersByCusId(id);
	}
}
