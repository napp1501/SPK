package spk.smartphone.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import spk.smartphone.models.Kriteria;
import spk.smartphone.services.KriteriaService;

@RestController
@AllArgsConstructor
@RequestMapping("/kriteria")
public class KriteriaController {
    private KriteriaService kriteriaService;

    @GetMapping
    public List<Kriteria> getAll() {
        return kriteriaService.getAll();
    }

    @GetMapping("/{id}")
    public Kriteria getById(@PathVariable Integer id) {
        return kriteriaService.getById(id);
    }

    @PostMapping
    public Kriteria create(@RequestBody Kriteria kriteria) {
        return kriteriaService.create(kriteria);
    }

    @PutMapping("/{id}")
    public Kriteria update(@PathVariable Integer id, @RequestBody Kriteria kriteria) {
        return kriteriaService.update(id, kriteria);
    }

    @DeleteMapping("/{id}")
    public Kriteria delete(@PathVariable Integer id) {
        return kriteriaService.delete(id);
    }
}
