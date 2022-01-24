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
    
    private int id;
    private String nom;
    private String descripcio;
    private int idPropietari;
    private int enabled;
}
