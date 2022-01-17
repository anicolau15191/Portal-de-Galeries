package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import javax.sql.rowset.serial.SerialArray;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name="galeria")
public class Galeria implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int idGaleria;
    private String nom;
    private String email;
    @ManyToOne
    @JoinColumn(name="idPoblacio")
    private Poblacio poblacio;
    @Column(name = "idPropietari")
    private int idPropietari;
    private String latitud;
    private String longitut;
    private int enabled;
    @OneToMany
    private Set<Media> fotos;

}
