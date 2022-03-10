package back.backend_private.repositories;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Genere;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GenereCrud extends CrudRepository<Genere,Integer> {

}
