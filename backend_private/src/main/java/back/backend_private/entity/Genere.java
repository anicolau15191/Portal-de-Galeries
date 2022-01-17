package back.backend_private.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name="genere")
public class Genere implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int idGenere;
    @ManyToOne //(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_genere2") //pare//
    private Genere idGenere2;
    private String nom;

}
