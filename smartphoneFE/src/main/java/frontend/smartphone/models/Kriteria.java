package frontend.smartphone.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Kriteria {
    private Integer id;
    private String name;
    private String bobot;
    private String kode_kriteria;

}
