package com.cdac.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {
	
	

	@Autowired
    private JavaMailSender emailSender;
	
	public void sendEmailForNewRegistration(String email) {
		
		SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("noreply@baeldung.com");
        message.setTo(email); 
        message.setSubject("Registration mail for Dronebiz!"); 
        message.setText("Thanks for registering with us !");
        emailSender.send(message);
	}
	
	public void sendEmail(String subject,String message,String to) {
		SimpleMailMessage forgetEmail = new SimpleMailMessage(); 
		forgetEmail.setFrom("noreply@baeldung.com");
        forgetEmail.setTo(to); 
        forgetEmail.setSubject(subject); 
        forgetEmail.setText(message);
        emailSender.send(forgetEmail);
	}
	
	

	public void orderMail(String email) {
		SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("noreply@baeldung.com");
        message.setTo(email); 
        message.setSubject("DroneBiz Order Successful."); 
        message.setText("Congratulations ! You have successfully placed the order with us.");
        emailSender.send(message);
		
	}
	
}
