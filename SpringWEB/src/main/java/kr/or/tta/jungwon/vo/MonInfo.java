package kr.or.tta.jungwon.vo;

import java.util.Date;
import java.util.LinkedList;

import org.apache.ibatis.javassist.bytecode.Descriptor.Iterator;

import com.fasterxml.jackson.annotation.JsonProperty;


public class MonInfo {
	private String instName;
	private String keyword;
	private Date endDate;
	private Date fromDate;
	private String searchType;
	private LinkedList <BMTUser> users;
	
	
	public Date getFromDate() {
		return fromDate;
	}
	private void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	
	public String getSearchType() {
		return searchType;
	}
	private void setSearchType(String searchType) {
		this.searchType = searchType;
	}
	
	public String getInstName() {
		return instName;
	}
	private void setInstName(String instName) {
		this.instName = instName;
	}
	public String getKeyword() {
		return keyword; 
	}
	private void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public Date getEndDate() {
		return endDate;
	}
	private void setEndToDate(Date endDate) {
		this.endDate = endDate;
	}
	public LinkedList<BMTUser> getUsers() {
		return users;
	}
	private void setUsers(LinkedList<BMTUser> listbmtuser) {
		this.users = listbmtuser; 
	}
	public String getEmailList()
	{
		StringBuilder sb = new StringBuilder();
		
		for(BMTUser user : users) 
		{
			String email = user.getEmail(); 
			sb.append(email);
			
			if(user != users.getLast())
			{
				sb.append(", ");
			}
		}
		return sb.toString();
	}
	
	public String getNameList()
	{
		StringBuilder sb = new StringBuilder();
		
		for(BMTUser user : users) 
		{
			String email = user.getName(); 
			sb.append(email);
			
			if(user != users.getLast())
			{
				sb.append(", ");
			}
		}
		return sb.toString();
	}	
}
