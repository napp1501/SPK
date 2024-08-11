package spk.smartphone.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spk.smartphone.models.Kriteria;

@Repository
public interface KriteriaRepository extends JpaRepository<Kriteria, Integer> {
    
}
