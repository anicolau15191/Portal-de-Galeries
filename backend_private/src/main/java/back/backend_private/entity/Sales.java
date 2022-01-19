package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="sales")
public class Sales implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSales;
    private String nom;
    private int aforament;
    @ManyToOne
    @JoinColumn(name="idGaleria")
    private Galeria galeria;
    private int enabled;

}
