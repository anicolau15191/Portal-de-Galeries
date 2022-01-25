package back.backend_private.repositories;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Poblacio;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PoblacioCrud extends CrudRepository<Poblacio, Integer> {


}
