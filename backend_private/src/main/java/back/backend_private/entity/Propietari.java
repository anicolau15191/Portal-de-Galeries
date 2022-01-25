package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="propietari")
public class Propietari implements Serializable {
    @Id
    @Column(name="id_propietari")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
}
