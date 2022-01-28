package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="usuaris")
public class Usuaris {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_usuaris")
    private int id;
    private String nom;
    private String cognoms;
    private String email;
    @ManyToOne
    @JoinColumn(name="id_poblacio")
    private Poblacio poblacio;


}
