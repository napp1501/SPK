package spk.smartphone.services;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import lombok.AllArgsConstructor;
import spk.smartphone.models.Alternatif;
import spk.smartphone.repositories.AlternatifRepository;

@Service
@AllArgsConstructor
public class AlternatifService {
    private AlternatifRepository alternatifRepository;

    public List<Alternatif> getAll(){
        return alternatifRepository.findAll();
    }

    public Alternatif getById(Integer id){
        return alternatifRepository.findById(id).orElseThrow(
            () -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Id Alternatif Tidak Ditemukan"
            )
        );
    }

    public Alternatif create(Alternatif alternatif){
        return alternatifRepository.save(alternatif);
    }

    public Alternatif update(Integer id, Alternatif alternatif){
        getById(id);
        alternatif.setId(id);
        return alternatifRepository.save(alternatif);
    }
    
    public Alternatif delete(Integer id){
        Alternatif alternatif = getById(id);
        alternatifRepository.delete(alternatif);
        return alternatif;
    }
}
