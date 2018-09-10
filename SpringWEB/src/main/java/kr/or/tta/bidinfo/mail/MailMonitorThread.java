package kr.or.tta.bidinfo.mail;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import kr.or.tta.HomeController;
import kr.or.tta.bidinfo.URLConnection;
import kr.or.tta.jungwon.vo.MonInfo;

public class MailMonitorThread extends Thread{
	
    public MonInfo mon;

    final int interval = 60000;
    
    int updateCnt=0;
    
    Date endDate;
    
    private static final Logger logger = LoggerFactory.getLogger(MailMonitorThread.class);
    
	public MailMonitorThread(MonInfo mon)
	{	
		this.mon = mon;
	}
	public String updateToday()
	{			
		Date d = new Date();
		String s = d.toString();
		System.out.println("현재날짜 : "+ s);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d");			
		String updateDate = sdf.format(d);
		return updateDate;
	}
	
	public MonInfo getMonInfo()
	{
		return mon;
	}
	
	public void run() 
	{

		//파라미터 가져오기
		String keyword = mon.getKeyword();
		String instName = mon.getInstName();					  
		this.endDate = mon.getEndDate();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d");
	    String fromDate= sdf.format(mon.getFromDate());
	    
	    //시간 업데이트
	    String toDate = this.updateToday();
	    
	    //초기화
	    URLConnection url = new URLConnection();		
	    boolean isSendMail=false;	    	   
	    JSONObject res;
	    res= url.getPreStdPublishList(fromDate, toDate, instName, keyword);
	    
	    //초기 카운트 업데이트함
	    updateCnt = res.size();
	    
		while(true) //endDate까지 running해야 함
		{
	 
			// Thread으로 대기하면서 조정 
			 try {
				    				   			 				   
				    toDate = this.updateToday();
				    res= url.getPreStdPublishList(fromDate, toDate, instName, keyword);
				    				    
				    logger.info(res.toJSONString());				    
				    logger.info("current new count is ==> {} ", updateCnt);
					if(Math.max(updateCnt, res.size()) > updateCnt )  //비교를 사이즈로 하는 것이 아니라, 시간을 가지고 체크를 해야 하지 않을까 함.//왜냐하면 시간이 지나면서 기존 엘레먼트들이 삭제될 수 있기에, 리스크 개수로 비교하게 되면 오차가 발생할 수 잇따.
					 {
						 isSendMail = true;
						 updateCnt = res.size();
					 }
					 
					 // 임시로 메일보내지 말기
					 isSendMail = true;
					 
					 logger.info("isSendMail="+isSendMail);	
					 
					 //메일보내기
					 if (isSendMail)
					 {						 
						 SendMail se = new SendMail(res,this.getMonInfo());
						 se.sendMail();
						 isSendMail = false;
					 }
					 				 
				    System.out.println("===============================");
					System.out.println("running");
					System.out.println("isSendMail="+isSendMail);
					System.out.println("newCnt="+res.size());
					System.out.println("currnetCnt="+res.size());
					System.out.println("keyworkd="+ keyword);
					System.out.println("발주기관="+ instName);
					System.out.println("===============================");
					
					
					 Thread.sleep(interval);	
	
			}
			 catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				break;
			}catch (Exception e)
			{
				e.printStackTrace();
			}
		}
	}

}
