package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="pertany")
public class Pertany implements Serializable {
    @EmbeddedId
    private PertanyId pertanyId;

    public Pertany (PertanyId id){
        this.pertanyId = id;
    }

    public Pertany(){}
}
