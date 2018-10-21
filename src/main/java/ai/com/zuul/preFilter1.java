package ai.com.zuul;


import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;

public class preFilter1 extends ZuulFilter {
    private  Logger log = LoggerFactory.getLogger(this.getClass());

    public preFilter1() {
        super();
    }

    //shouldFilter是决定这个过滤器需不需要执行，返回false则不执行，这个也可以利用配置中心来做，达到动态的开启关闭效果,
    //这边是通过上下文对象，获取一个isSuccess的值来决定要不要执行的，就是说由上个过滤器告诉你要不要执行，因为上面的流程没通过，所以下面也没必要继续执行了。
    @Override
    public boolean shouldFilter() {
        RequestContext ctx = RequestContext.getCurrentContext();
        //Object success = ctx.get("isSuccess");
        return true;
    }

    //filterType就是过滤器的类型了，取值分别为pre，route，post，error
    @Override
    public String filterType() {
        return "pre";
    }

    //filterOrder是表示过滤器执行的顺序，数字越小，优先级越高
    @Override
    public int filterOrder() {
        return 0;
    }

    //run里面就是我们自己要执行的业务逻辑了，可以直接返回null,
    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();

        System.out.println(String.format("%s AccessTokenFilter request to %s", request.getMethod(),
                request.getRequestURL().toString()));

        ctx.setSendZuulResponse(true);
        ctx.setResponseStatusCode(200);
        ctx.setResponseBody("{\"name\":\"chhliu\"}");// 输出最终结果


        return null;
    }
}