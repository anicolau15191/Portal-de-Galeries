package back.backend_private.entity;

import lombok.Data;
import lombok.Generated;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="exposicio")
public class Exposicio implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_exposicio")
    private int id;

    private String nom;

    private String descripcio;

    @Column(name="id_sala")
    private int idSala;

    private int enabled;
}
