package back.backend_private.repositories;

import back.backend_private.entity.Entrada;
import org.springframework.data.repository.CrudRepository;

public interface EntradaCrud extends CrudRepository<Entrada,Integer> {
}
