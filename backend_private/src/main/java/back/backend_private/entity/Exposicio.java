package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name="exposicio")
public class Exposicio {
    @Id
    private int id;
}
