package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name="visitant")
public class Visitant {
    @Id
    @Column(name="id_visitant")
    private int id;
    @OneToOne
    @JoinColumn(name ="id_visitant")
    private Usuaris usuari;
    @OneToMany (mappedBy = "visitant")
    private List<Entrada> entrades;
}
