package back.backend_private.entity;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Data
@Entity
@Table(name="obres")
public class Obres {
    @Id
    @Column(name="id_obres")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private float preu;
    private int venta;
    private int venut;
    @ManyToOne
    @JoinColumn(name="id_expo")
    private Exposicio expo;
    private int excepcio;
    @ManyToOne
    @JoinColumn(name="id_visitant")
    private Visitant visitant;
}
