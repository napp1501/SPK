package spk.smartphone.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "alternatif")

public class Alternatif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name",length = 25, nullable = false, unique = true)
    private String name;
    
    @Column(name = "kode_alternatif",length = 25, nullable = false, unique = true)
    private String kode_alternatif;

    @Column(name = "brand", length = 25, nullable = false)
    private String brand;

    @Column(name = "layar", length = 25, nullable = false)
    private String layar;
    
    @Column(name = "kamera", length = 25, nullable = false)
    private String kamera;

    @Column(name = "battery", length = 25, nullable = false)
    private String battery;

    @Column(name = "memori", length = 25, nullable = false)
    private String memori;

    @Column(name = "harga", length = 25, nullable = false)
    private String harga;

}
