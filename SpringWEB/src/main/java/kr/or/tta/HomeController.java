package kr.or.tta;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.ibatis.javassist.bytecode.Descriptor.Iterator;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.or.tta.bidinfo.URLConnection;
import kr.or.tta.bidinfo.mail.MailMonManager;
import kr.or.tta.jungwon.vo.*;

/**
 * Handles requests for the application home page.
 */
@RestController 
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	private MailMonManager mailManger = new MailMonManager();
	
	
	
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	@RequestMapping(value = "bidinfoList.do", method = RequestMethod.GET)
	public JSONObject bidinfoList(@RequestParam(required = false) Map param, Locale locale) {
		JSONObject resObj = new JSONObject();
		
		
		//키워드나, 발주기관  텍스트 필드가 반드시 있어야 한다는 조건이어야 한다. 
		//extjs에서 해주는 것이 좋다.
		String from=(String)param.get("fromDate");
		String to=(String)param.get("toDate");
		String instNm=(String)param.get("instNm");
		String keyword=(String)param.get("keyword");
		String type = (String)param.get("searchType");
		
		URLConnection urlc = new URLConnection();
		
		if (type.equals("p"))
		{
			resObj = urlc.getPreStdPublishList(from,to,instNm,keyword);	
		}
		else if (type.equals("t"))
		{
			resObj = urlc.getTbidListURL(from,to,instNm,keyword);
		}
		
		
		return resObj;
	}
	@RequestMapping(value = "regSchedule.do", method = RequestMethod.POST)
	public JSONObject regSchedule(@RequestBody MonInfo param, Locale locale) { 
		JSONObject resObj = new JSONObject();	
		logger.info("InstNmae = {}",param.getInstName());
		logger.info("keyword = {}",param.getKeyword());
		logger.info("type = {}",param.getSearchType());
		logger.info("EndDate = {}",param.getEndDate().toString());
		
/*		java.util.Iterator<BMTUser> it = param.getUsers().iterator();
		while (it.hasNext())
		{
			BMTUser bt= it.next();			
			logger.info(bt.getEmail());
		}*/
		mailManger.runMon(param);
		logger.info(mailManger.getJsonList().toJSONString());
		return resObj; 
	}
	
	@RequestMapping(value = "getRegScheduleList.do", method = RequestMethod.POST)
	public JSONObject getRegScheduleList(@RequestParam(required = false) Map param, Locale locale)
	{
		JSONObject resObj = mailManger.getJsonList();
		return resObj;
	}
	@RequestMapping(value = "delSchedule.do", method = RequestMethod.POST)
	public JSONObject delSchedule(@RequestParam(required = false) Map param, Locale locale) {
		JSONObject resObj = new JSONObject();
		String threadName = (String)param.get("threadName");
		logger.info(threadName);
		mailManger.delete(threadName);
		return resObj;
	}
}
