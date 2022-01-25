package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="artista")
public class Artista {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_artista")
    private int id;
    private String nom;
}
