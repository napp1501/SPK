package spk.smartphone.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spk.smartphone.models.Alternatif;

@Repository
public interface AlternatifRepository extends JpaRepository<Alternatif, Integer> {
    
}
