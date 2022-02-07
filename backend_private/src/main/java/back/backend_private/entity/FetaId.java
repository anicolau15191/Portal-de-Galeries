package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class FetaId implements Serializable {

    private int idObra;
    private int idArtista;

    public FetaId(int id_obra, int id_artista){
        this.idObra=id_obra;
        this.idArtista=id_artista;
    }

    public FetaId(){}
}
