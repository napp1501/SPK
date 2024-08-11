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

import frontend.smartphone.models.Alternatif;
import frontend.smartphone.services.AlternatifService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/alternatif")
public class RestAlternatif {
    private AlternatifService alternatifService;

    @GetMapping
    private List<Alternatif> getAll() {
        return alternatifService.getAll();
    }

    @PostMapping
    private Alternatif create(@RequestBody Alternatif alternatif){
        return alternatifService.create(alternatif);
    }

    @GetMapping("/{id}")
    private Alternatif getById(@PathVariable Integer id){
        return alternatifService.getById(id);
    }

    @DeleteMapping("/{id}")
    private Alternatif delete(@PathVariable Integer id){
        return alternatifService.delete(id);
    }

    @PutMapping("/{id}")
    private Alternatif update(@PathVariable Integer id, @RequestBody Alternatif alternatif){
        return alternatifService.update(id, alternatif);
    }
}
