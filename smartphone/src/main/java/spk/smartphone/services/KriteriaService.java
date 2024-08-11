package spk.smartphone.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import lombok.AllArgsConstructor;
import spk.smartphone.models.Kriteria;
import spk.smartphone.repositories.KriteriaRepository;

@Service
@AllArgsConstructor
public class KriteriaService {
    private KriteriaRepository kriteriaRepository;

    public List<Kriteria> getAll(){
        return kriteriaRepository.findAll();
    }

    public Kriteria getById(Integer id){
        return kriteriaRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Id Kriteria Tidak Ditemukan"
            )
        );
    }

    public Kriteria create(Kriteria kriteria){
        return kriteriaRepository.save(kriteria);
    }

    public Kriteria update(Integer id, Kriteria kriteria){
        getById(id);
        kriteria.setId(id);
        return kriteriaRepository.save(kriteria);
    }
    
    public Kriteria delete(Integer id){
        Kriteria kriteria = getById(id);
        kriteriaRepository.delete(kriteria);
        return kriteria;
    }
}
