package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
@Data
@Embeddable
public class EspecialitatId implements Serializable {

    private int idGaleria;
    private int idGenere;

    public EspecialitatId(int idGaleria, int idGenere){
        this.idGenere=idGenere;
        this.idGaleria=idGaleria;
    }

    public EspecialitatId() {

    }
}
