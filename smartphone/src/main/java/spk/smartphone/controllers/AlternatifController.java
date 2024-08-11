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
import spk.smartphone.models.Alternatif;
import spk.smartphone.services.AlternatifService;

@RestController
@AllArgsConstructor
@RequestMapping("/alternatif")
public class AlternatifController {

    private AlternatifService alternatifService;

    @GetMapping
    public List<Alternatif> getAll() {
        return alternatifService.getAll();
    }

    @GetMapping("/{id}")
    public Alternatif getById(@PathVariable Integer id) {
        return alternatifService.getById(id);
    }

    @PostMapping
    public Alternatif create(@RequestBody Alternatif alternatif) {
        return alternatifService.create(alternatif);
    }

    @PutMapping("/{id}")
    public Alternatif update(@PathVariable Integer id, @RequestBody Alternatif alternatif) {
        return alternatifService.update(id, alternatif);
    }

    @DeleteMapping("/{id}")
    public Alternatif delete(@PathVariable Integer id) {
        return alternatifService.delete(id);
    }
}
