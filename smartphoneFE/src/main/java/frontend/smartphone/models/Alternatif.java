package frontend.smartphone.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Alternatif {
    private Integer id;
    private String name;
    private String kode_alternatif;
    private String brand;
    private String layar;
    private String kamera;
    private String battery;
    private String memori;
    private String harga;

}
