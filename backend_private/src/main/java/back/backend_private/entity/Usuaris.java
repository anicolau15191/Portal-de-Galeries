package back.backend_private.entity;

import lombok.Data;
import org.mindrot.jbcrypt.BCrypt;

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
    private String password;
    @ManyToOne
    @JoinColumn(name="id_poblacio")
    private Poblacio poblacio;

    private String hashPassword(String passwordNotEncrypted) {
        return BCrypt.hashpw(passwordNotEncrypted, BCrypt.gensalt());
    }

    public void setPassword(String password) {
        this.password = hashPassword(password);
    }

    public void setPasswordBd(String password){
        this.password = password;
    }

}
