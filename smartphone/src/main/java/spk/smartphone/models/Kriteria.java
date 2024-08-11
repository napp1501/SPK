package spk.smartphone.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "kriteria")

public class Kriteria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name", length = 25, nullable = false, unique = true)
    private String name;

    @Column(name = "kode_kriteria", length = 5, nullable = false, unique = true)
    private String kode_kriteria;

    @Column(name = "bobot", length = 25, nullable = false)
    private double bobot;
}
