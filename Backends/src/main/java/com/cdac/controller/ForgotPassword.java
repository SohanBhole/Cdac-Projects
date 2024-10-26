package com.cdac.controller;

import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.dto.Status;
import com.cdac.entity.Customer;
import com.cdac.repository.CustomerRepository;
import com.cdac.service.CustomerService;
import com.cdac.service.EmailService;

@RestController
@CrossOrigin
public class ForgotPassword {

	 int otp;
	 String mail;

	@Autowired
	private EmailService emailService;

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerService customerService;


	@GetMapping("/sendotp")
	public Status sendOTP(@RequestParam("forgotpsw") String email) {
		System.out.println("EMAIL: " + email);
		
		boolean iscustpresent=customerRepository.isCustomerPresent(email);
		Status status=new Status();
		
		if(iscustpresent) {
			mail = email;
			otp = (int) (Math.random() * 10000);
			System.out.println("OTP: " + otp);

			// write code for send otp to email..
			String subject = "OTP From Dronebiz to reset password";
			String message = "We recieved request for forget password your otp is " + otp;
			String to = email;
			emailService.sendEmail(subject, message, to);
			
			status.setStatus(true);
			status.setMessage("OTP is sent to registered email address.");
			return status;
		}
		else {
			status.setStatus(false);
			status.setMessage("Email is not registered with us.");
			return status;
		}
	
	}
	
	
	// verify otp

	@PostMapping("/verifyotp")
	public Status verifyOtp(@RequestBody int cusotp) {
		System.out.println("Generated password is " + otp);
		System.out.println("Received password is " + cusotp);

		Status status=new Status();
		if (cusotp == otp) {
			status.setStatus(true);
			status.setMessage("OTP verified successfully. Proceed to change your password.");
			return status; 
		} else {
			status.setStatus(false);
			status.setMessage("OTP did not match. Proceed to enter correct OTP.");
			return status;
		}

	}

	// change password

	  @PostMapping("/changepassword") 
	  public String changePassword(@RequestBody String newpassword) { 
	
		  System.out.println(newpassword);
	  Customer customer =customerRepository.findCustomerByMail(mail); 
	  customer.setPassword(newpassword);
	  customerService.changePassword(customer);
	  return "Password changed successfully. Login with your new password.";
	  
	  }
	 

}
