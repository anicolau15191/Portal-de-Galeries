package back.backend_private.entity;

import lombok.Data;

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
    private int id_expo;
    private
}
