package kr.or.tta.jungwon.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.or.tta.jungwon.dao.EmpDAO;
import kr.or.tta.jungwon.service.EmpSerivce;
import kr.or.tta.jungwon.vo.EmpVO;


@Service("empService")
public class EmpServiceImpl implements EmpSerivce {

	@Resource(name="empDAO")
    private EmpDAO empDAO;

	
	@Override
	public List<EmpVO> selectAllEmployees() {
		// TODO Auto-generated method stub
		return empDAO.selectAllEmployees();
	}
	@Override
	public List<EmpVO> selectAllEmployees2() {
		// TODO Auto-generated method stub
		return empDAO.selectAllEmployees2();
	}	

	@Override
	public EmpVO selectOneEmployee(int empno) {
		// TODO Auto-generated method stub
		return empDAO.selectOneEmployee(empno);
	}

}
