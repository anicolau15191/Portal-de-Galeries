package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Entrada implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_entrada")
    private int id;
    @ManyToOne
    @JoinColumn(name="id_visitant")
    private Visitant visitant;
    @ManyToOne
    @JoinColumn(name="id_sessio")
    private Sessio sessio;
}
