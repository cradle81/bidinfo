package kr.or.tta.bidinfo.mail;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import kr.or.tta.HomeController;
import kr.or.tta.jungwon.vo.MonInfo;

public class MailMonManager {
	HashMap <String, MailMonitorThread> list = new HashMap<String, MailMonitorThread>();
	private static final Logger logger = LoggerFactory.getLogger(MailMonManager.class);
	
	public void add(String threadName, MailMonitorThread t)
	{
		//스레드 생성 정보 추가 하여 관리
		list.put(threadName,t);

	}
	public void delete(String threadName)
	{
		Thread t = list.get(threadName);
		
		list.remove(threadName);
		
		
		//스레드 정보 확인
		//해당 스레드 킬
		t.interrupt();
		
	}
	public HashMap getList()
	{
		return list;
	}
	public JSONObject getJsonList()
	{
		JSONObject resObj = new JSONObject();
		JSONArray jsonArrayRows = new JSONArray();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d H:m:s"); 
		
		for (Map.Entry<String, MailMonitorThread> entry: list.entrySet())
		{		
			
			MailMonitorThread t = entry.getValue();
			MonInfo monInfo = t.getMonInfo();
			JSONObject item = new JSONObject();
			String endDate = sdf.format(monInfo.getEndDate());
			
			item.put("threadName", t.getName());
			item.put("instName", monInfo.getInstName()); 
			item.put("keyword", monInfo.getKeyword());
			item.put("endDate", endDate);
			item.put("emails", monInfo.getNameList());
			
			logger.info("ThreadName = {}, instName={}",t.getName(),monInfo.getInstName());			
			logger.info("keyword = {} , endDate ={}", endDate) ;
			logger.info("names ={}", monInfo.getNameList()) ;
			jsonArrayRows.add(item);
 
		}
		resObj.put("data", jsonArrayRows);
		return resObj;
	}	
	public void runMon(MonInfo mon)
	{
		 MailMonitorThread t= new MailMonitorThread(mon);
		 t.start();		 		 
		 this.add(t.getName(),t);		
	}

}
