package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import java.io.Serializable;

@Data
@Embeddable
public class PertanyId implements Serializable {

    private int id_obres;
    private int id_genere;

    public PertanyId(int idObres, int idGenere){
        this.id_obres = idObres;
        this.id_genere= idGenere;
    }

    public PertanyId(){}
}
