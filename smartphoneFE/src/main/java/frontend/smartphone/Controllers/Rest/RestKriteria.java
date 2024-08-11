package frontend.smartphone.Controllers.Rest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import frontend.smartphone.models.Kriteria;
import frontend.smartphone.services.KriteriaService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/kriteria")
public class RestKriteria {
    private KriteriaService kriteriaService;

    @GetMapping
    private List<Kriteria> getAll() {
        return kriteriaService.getAll();
    }

    @PostMapping
    private Kriteria create(@RequestBody Kriteria kriteria){
        return kriteriaService.create(kriteria);
    }

    @GetMapping("/{id}")
    private Kriteria getById(@PathVariable Integer id){
        return kriteriaService.getById(id);
    }

    @DeleteMapping("/{id}")
    private Kriteria delete(@PathVariable Integer id){
        return kriteriaService.delete(id);
    }

    @PutMapping("/{id}")
    private Kriteria update(@PathVariable Integer id, @RequestBody Kriteria kriteria){
        return kriteriaService.update(id, kriteria);
    }
}
