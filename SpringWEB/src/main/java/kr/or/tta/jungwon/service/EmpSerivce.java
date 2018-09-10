package kr.or.tta.jungwon.service;

import java.util.List;

import kr.or.tta.jungwon.vo.EmpVO;

public interface EmpSerivce {
	
	
	public List<EmpVO> selectAllEmployees();
	public List<EmpVO> selectAllEmployees2();
	public EmpVO selectOneEmployee(int empno);

}
