package back.backend_private.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="visitant")
public class Visitant {
    @Id
    @Column(name="id_visitant")
    private int id;
}
