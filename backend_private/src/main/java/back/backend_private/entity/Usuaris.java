package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="usuaris")
public class Usuaris {
    @Id
    @Column(name="id_usuaris")
    private int id;
    private String nom;
    private String cognoms;
    private String email;
    private Poblacio
}
