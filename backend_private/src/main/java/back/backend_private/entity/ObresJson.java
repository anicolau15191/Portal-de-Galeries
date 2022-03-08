package back.backend_private.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
public class ObresJson {

    private int idObres;
    private String nomO;
    private String preu;
    private String codi;
}
