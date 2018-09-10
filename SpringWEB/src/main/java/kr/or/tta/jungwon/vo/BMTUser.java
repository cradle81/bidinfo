package kr.or.tta.jungwon.vo;


public  class BMTUser {
	

	public String email;
	public String name;
	public BMTUser()
	{
	
	}		
	
 
	public BMTUser(String email, String name)
	{
		this.email=email;
		this.name=name; 
	}		
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
