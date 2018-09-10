package kr.or.tta.jungwon.dao;

import java.util.List;
import java.util.Map;
import kr.or.tta.jungwon.vo.EmpVO;

public interface EmpDAO {
	
	public List<EmpVO> selectAllEmployees();
	public List<EmpVO> selectAllEmployees2();
	public EmpVO selectOneEmployee(int empno);
	

}
