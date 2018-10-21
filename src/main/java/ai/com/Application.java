package ai.com;

import ai.com.zuul.MyFallbackProvider;
import ai.com.zuul.RouterFilter1;
import ai.com.zuul.preFilter1;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@SpringBootApplication
@EnableZuulProxy
@ComponentScan("ai/com")//包名
@EnableAsync
//@ServletComponentScan
@Controller
public class Application extends WebMvcConfigurationSupport {

    @RequestMapping("/")
    @ResponseBody
    public String index() {
        return "Hello World!";
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        configurer.setUseSuffixPatternMatch(true)
                .setUseTrailingSlashMatch(true);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public preFilter1 accessUserNameFilter() {
        return new preFilter1();
    }

    @Bean
    public RouterFilter1 preFilter1_ai() {
        return new RouterFilter1();
    }

    @Bean
    public MyFallbackProvider eurekaClientFallback() {
        return new MyFallbackProvider();
    }
//    @Bean
//    public ServletRegistrationBean dispatcherRegistration(DispatcherServlet dispatcherServlet) {
//        ServletRegistrationBean reg = new ServletRegistrationBean(dispatcherServlet);
//        reg.getUrlMappings().clear();
//        reg.addUrlMappings("*.html");
//        reg.addUrlMappings("*.do");
//        return reg;
//    }
}