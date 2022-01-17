package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="especialitzat")
public class Especialitzat implements Serializable {
    @EmbeddedId
    private EspecialitatId especialitatId;

    public Especialitzat(EspecialitatId id){
        this.especialitatId = id;
    }

    public Especialitzat() {

    }
}
