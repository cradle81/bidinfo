package kr.or.tta.bidinfo.mail;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Properties;
import java.util.Vector;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import kr.or.tta.jungwon.vo.BMTUser;
import kr.or.tta.jungwon.vo.MonInfo; 

public class SendMail {
	   public JSONObject res ; 
	   public String instName;
	   public String keyword ; 
	   public String to;
	   
	   private final String username = "jungwon";
	   private final String password = "jungwon";
	   
	   String from ="jungwon@localhost";
	   String host = "localhost";
	   
	   
	   private static final Logger logger = LoggerFactory.getLogger(SendMail.class);
	   
	   public SendMail(JSONObject res, MonInfo monInfo) 	   
	   {
		   this.res = res;
		   instName = monInfo.getInstName();
		   keyword = monInfo.getKeyword();
		   to = monInfo.getEmailList();
		   
	   }
	   

	   
		
	   public void sendMail() throws Exception{
		   		    
		   Properties props = new Properties();
		      props.put("mail.smtp.host", host);
		      props.put("mail.smtp.socketFactory.port", "25");
		      props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
		      
		      //true localhost 
		      //mail전송 시 오류 발생 java.lang.Exception: javax.mail.AuthenticationFailedException: 535 5.7.0 authentication failed
		      props.put("mail.smtp.auth", "false");
		      props.put("mail.smtp.port", "25");
		      
		      String subject="[입찰공고모니터링시스템]["+instName+"]"+"["+keyword+"]알림메일"; //[공고명][발주기관][키워드] 
		      StringBuilder  contents =  new StringBuilder();
		      contents.append("안녕하세요? 입찰정보 모니터링 시스템에서 보내는 메일입니다.");
		      contents.append(System.lineSeparator());
		      contents.append("아래와 같이 게시되었으니, 참고하시기 바랍니다.");
		      contents.append(System.lineSeparator());
		      
		      //HTML 작성
		      contents.append("<br>");
		      contents.append("<table border=\"1\">");
		    
		      contents.append("<tr>");
		      contents.append("<th>일시</th>");
		      contents.append("<th>공고명</th>");
		      contents.append("<th>기관</th>");     
		      contents.append("</tr>");
		      //제목 가져오기
			  
			  
		      JSONArray items = (JSONArray) res.get("data");
		      Iterator it= items.iterator();
		  
			  while(it.hasNext())
			  {
				  JSONObject item = (JSONObject) it.next();
				  String time = (String) item.get("time");
				  String name = (String) item.get("name");
				  String instNm = (String) item.get("instNm");
				  String link = (String) item.get("link");
				  
		    	  contents.append("<tr>");
		    	  
		    	  contents.append("<td>"+time+"</td>");
		    	  contents.append("<td><a href=\""+link+"\">"+name+"</a"+"</td>");
		    	  contents.append("<td>"+instNm+"</td>");
		    	     	  
		    	  contents.append("</tr>");				  
				 
			  }
	      
	                  
	      // Get the Session object.
	      Session session = Session.getInstance(props,
	         new javax.mail.Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	               return new PasswordAuthentication(username, password);
		   }
	         });

	      //이메일 디버그
	      //session.setDebug(true);
	      
	      try {
		   // Create a default MimeMessage object.
		   Message message = new MimeMessage(session);		   
		   // 메세지 타입 설정 (HTML)		   	
		   // Set From: header field of the header.
		   message.setFrom(new InternetAddress(from));
		
		   // Set To: header field of the header.
		   		  
		   message.setRecipients(Message.RecipientType.TO,
	               InternetAddress.parse(to));
		
		   // Set Subject: header field
		   message.setSubject(subject);
		   
		
		   // Now set the actual message
		   
		   //HTML으로 메세지 보냄
		   
		   message.setContent(contents.toString(),"text/html; charset=utf-8");
		   
		   //message.setText(contents.toString());

		   // Send message
		   Transport.send(message);
		   System.out.println("Sent message successfully....");

	      } catch (MessagingException e) {
	    	 
	         throw new Exception(e);
	      }
	   }
}
