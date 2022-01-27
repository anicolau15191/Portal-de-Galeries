package back.backend_private.entity;

import lombok.Data;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name="feta")
public class Feta implements Serializable{
    @EmbeddedId
    private FetaId id;

    public Feta(FetaId id){
        this.id=id;
    }
    public Feta(){}
}
