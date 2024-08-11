package spk.smartphone.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spk.smartphone.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    
}
