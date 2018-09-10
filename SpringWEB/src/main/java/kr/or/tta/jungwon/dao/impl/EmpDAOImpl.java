package kr.or.tta.jungwon.dao.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.tta.jungwon.dao.EmpDAO;
import kr.or.tta.jungwon.vo.EmpVO;

@Repository("empDAO")
public class EmpDAOImpl implements EmpDAO {
	
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	private String nameSpace = "kr.or.tta.jungwon.EmpMapper";

	@Override
	public List<EmpVO> selectAllEmployees() {
		// TODO Auto-generated method stub
		List result = sqlSession.selectList(nameSpace+".selectAllEmployees");
		return result;
	}
	@Override
	public List<EmpVO> selectAllEmployees2() {
		// TODO Auto-generated method stub
		List result = sqlSession.selectList(nameSpace+".selectAllEmployees2");
		return result;
	}	

	@Override
	public EmpVO selectOneEmployee(int empno) {
		// TODO Auto-generated method stub
		EmpVO result=sqlSession.selectOne(nameSpace+".selectOneEmployee", empno);
		return result;
	}

}
