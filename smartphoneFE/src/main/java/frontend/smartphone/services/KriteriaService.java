package frontend.smartphone.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import frontend.smartphone.models.Kriteria;

@Service
public class KriteriaService {
    @Value("${server.base.url}/kriteria")
        private String url;

        @Autowired
        private RestTemplate restTemplate;

        public List<Kriteria> getAll() {
                return restTemplate
                                .exchange(
                                                url,
                                                HttpMethod.GET,
                                                null,
                                                new ParameterizedTypeReference<List<Kriteria>>() {
                                                })
                                .getBody();
        }

        public Kriteria getById(Integer id) {
                return restTemplate
                                .exchange(
                                                url.concat("/" + id),
                                                HttpMethod.GET,
                                                null,
                                                Kriteria.class, id)
                                .getBody();
        }

        public Kriteria create(Kriteria kriteria) {
                return restTemplate
                                .exchange(
                                                url,
                                                HttpMethod.POST,
                                                new HttpEntity<>(kriteria),
                                                Kriteria.class)
                                .getBody();
        }

        public Kriteria update(Integer id, Kriteria kriteria) {
                return restTemplate
                                .exchange(
                                                url.concat("/" + id),
                                                HttpMethod.PUT,
                                                new HttpEntity<>(kriteria),
                                                Kriteria.class)
                                .getBody();
        }

        public Kriteria delete(Integer id) {
                return restTemplate
                                .exchange(
                                                url.concat("/" + id),
                                                HttpMethod.DELETE,
                                                null,
                                                Kriteria.class)
                                .getBody();
        }
}
