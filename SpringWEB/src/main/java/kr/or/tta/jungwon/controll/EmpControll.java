package kr.or.tta.jungwon.controll;

import java.util.List;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import kr.or.tta.jungwon.service.EmpSerivce;
import kr.or.tta.jungwon.vo.EmpVO;


@RestController 
public class EmpControll {

	private static final Logger logger = LoggerFactory.getLogger(EmpControll.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	
	@Autowired
    EmpSerivce empService;

	
	@RequestMapping(value = "/emp/select.do", method = RequestMethod.GET)
	
	public JSONObject emp2(Locale locale, Model model) {
		List<EmpVO> empList = empService.selectAllEmployees2();
		JSONObject resObj = new JSONObject();			
		JSONArray jsonArrayRows = new JSONArray();		
				
		for (EmpVO emp : empList)
		{			
	    	JSONObject item = new JSONObject();
	    	
	    	item.put("empno", emp.getEmpno());  
	    	item.put("ename", emp.getEname());
	    	item.put("job", emp.getJob());
	    	item.put("sal", emp.getSal());
	    	/*
	    	item.put("Comm", emp.getComm());
	    	item.put("Detno", emp.getDetno());
	    	
	    	item.put("Hiredate", emp.getHiredate());
	    	
	    	item.put("Sal", emp.getSal());
	    	*/
	    	 
	    	jsonArrayRows.add(item);
		}
		
		resObj.put("data", jsonArrayRows);
		System.out.println(resObj);
		
		
		
		return resObj;
	}
	
	@RequestMapping(value = "/emp/emp.do", method = RequestMethod.GET)
	
	public JSONObject emp(Locale locale, Model model) {
		logger.info("Welcome emp! The client locale is {}.", locale);
		
		List<EmpVO> empList = empService.selectAllEmployees();
		JSONObject resObj = new JSONObject();			
		JSONArray jsonArrayRows = new JSONArray();		
				
		for (EmpVO emp : empList)
		{			
	    	JSONObject item = new JSONObject();
	    	
	    	item.put("empno", emp.getEmpno());  
	    	item.put("ename", emp.getEname());
	    	item.put("job", emp.getJob());
	    	item.put("mgr", emp.getMgr());
	    	/*
	    	item.put("Comm", emp.getComm());
	    	item.put("Detno", emp.getDetno());
	    	
	    	item.put("Hiredate", emp.getHiredate());
	    	
	    	item.put("Sal", emp.getSal());
	    	*/
	    	 
	    	jsonArrayRows.add(item);
		}
		
		resObj.put("data", jsonArrayRows);
		System.out.println(resObj);
		
		
		
		return resObj;
	}
}
