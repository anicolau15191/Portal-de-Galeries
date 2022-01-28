package back.backend_private.repositories;

import back.backend_private.entity.Usuaris;
import org.springframework.data.repository.CrudRepository;

public interface UsuariCrud extends CrudRepository<Usuaris,Integer> {
}
