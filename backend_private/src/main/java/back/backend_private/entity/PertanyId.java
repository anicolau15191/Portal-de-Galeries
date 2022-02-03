package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import java.io.Serializable;

@Data
@Embeddable
public class PertanyId implements Serializable {

    private int idObres;
    private int idGenere;

    public PertanyId(int idObres, int idGenere){
        this.idObres = idObres;
        this.idGenere= idGenere;
    }

    public PertanyId(){}
}
