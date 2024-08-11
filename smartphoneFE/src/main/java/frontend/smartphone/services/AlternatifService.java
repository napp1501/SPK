package frontend.smartphone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import frontend.smartphone.models.Alternatif;

@Service
public class AlternatifService {
    @Value("${server.base.url}/alternatif")
        private String url;

        @Autowired
        private RestTemplate restTemplate;

        public List<Alternatif> getAll() {
                return restTemplate
                                .exchange(
                                                url,
                                                HttpMethod.GET,
                                                null,
                                                new ParameterizedTypeReference<List<Alternatif>>() {
                                                })
                                .getBody();
        }

        public Alternatif getById(Integer id) {
                return restTemplate
                                .exchange(
                                                url.concat("/" + id),
                                                HttpMethod.GET,
                                                null,
                                                Alternatif.class, id)
                                .getBody();
        }

        public Alternatif create(Alternatif alternatif) {
                return restTemplate
                                .exchange(
                                                url,
                                                HttpMethod.POST,
                                                new HttpEntity<>(alternatif),
                                                Alternatif.class)
                                .getBody();
        }

        public Alternatif update(Integer id, Alternatif alternatif) {
                return restTemplate
                                .exchange(
                                                url.concat("/" + id),
                                                HttpMethod.PUT,
                                                new HttpEntity<>(alternatif),
                                                Alternatif.class)
                                .getBody();
        }

        public Alternatif delete(Integer id) {
                return restTemplate
                                .exchange(
                                                url.concat("/" + id),
                                                HttpMethod.DELETE,
                                                null,
                                                Alternatif.class)
                                .getBody();
        }
}
