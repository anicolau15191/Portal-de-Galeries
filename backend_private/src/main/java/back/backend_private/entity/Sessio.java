package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

@Data
@Entity
@Table(name="sessio")
public class Sessio implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_sessio")
    private int id;
    private Date data;
    private Time hora_ini;
    private Time hora_fi;
    @ManyToOne
    @JoinColumn(name="id_expo")
    private Exposicio expo;
}
