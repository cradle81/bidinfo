package kr.or.tta.jungwon.vo;


public  class BMTUser {
	

	public String email;
	public String name;
	public String id;
	public String password;
	public String position;
	public String role;
	public String detailfield;
	public String addtionaltask;
	public String remark;
	public String phone1;
	public String phone2;
	public String state; 
	
	private String getId() {
		return id;
	}


	private void setId(String id) {
		this.id = id;
	}


	private String getPassword() {
		return password;
	}


	private void setPassword(String password) {
		this.password = password;
	}


	private String getPosition() {
		return position;
	}


	private void setPosition(String position) {
		this.position = position;
	}


	private String getRole() {
		return role;
	}


	private void setRole(String role) {
		this.role = role;
	}


	private String getDetailfield() {
		return detailfield;
	}


	private void setDetailfield(String detailfield) {
		this.detailfield = detailfield;
	}


	private String getAddtionaltask() {
		return addtionaltask;
	}


	private void setAddtionaltask(String addtionaltask) {
		this.addtionaltask = addtionaltask;
	}


	private String getRemark() {
		return remark;
	}


	private void setRemark(String remark) {
		this.remark = remark;
	}


	private String getPhone1() {
		return phone1;
	}


	private void setPhone1(String phone1) {
		this.phone1 = phone1;
	}


	private String getPhone2() {
		return phone2;
	}


	private void setPhone2(String phone2) {
		this.phone2 = phone2;
	}


	private String getState() {
		return state;
	}


	private void setState(String state) {
		this.state = state;
	}


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
