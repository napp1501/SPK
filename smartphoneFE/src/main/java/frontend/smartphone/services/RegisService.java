package frontend.smartphone.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestTemplate;

import frontend.smartphone.models.Regis;


@Service
public class RegisService {
    
    @Value("${server.base.url}/registration")
    private String url;
    
    @Autowired
    private RestTemplate restTemplate;

    @PostMapping
    public Regis create(Regis regis){
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Basic QWRtaW46YWRtaW4=");
        return restTemplate.exchange(
            url,
            HttpMethod.POST,
            new HttpEntity<>(regis, headers),
            Regis.class
            ).getBody();
    }
}
