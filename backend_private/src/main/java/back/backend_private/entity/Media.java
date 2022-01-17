package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="media")
public class Media implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMedia;
    @ManyToOne
    @JoinColumn(name="idGaleria")
    private Galeria galeria;
    private String nom;
}
