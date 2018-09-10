package kr.or.tta.jungwon;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SampleDBConnection {
	
	private static final Logger logger = LoggerFactory.getLogger(SampleDBConnection.class);
	
	@RequestMapping(value = "/1", method = RequestMethod.GET)	
	public String home(Locale locale, Model model) {
		logger.info("Welcome ! SampleDBConnection ");
		
		
		
		return "home";
	}
}
