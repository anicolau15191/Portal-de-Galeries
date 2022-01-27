package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class FetaId implements Serializable {

    private int idObres;
    private int idArtista;

    public FetaId(int id_obres, int id_artista){
        this.idObres=id_obres;
        this.idArtista=id_artista;
    }

    public FetaId(){}
}
