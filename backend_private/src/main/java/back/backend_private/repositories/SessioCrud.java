package back.backend_private.repositories;

import back.backend_private.entity.Exposicio;
import back.backend_private.entity.Sessio;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SessioCrud extends CrudRepository<Sessio,Integer> {
    List<Sessio> findByExpo(Exposicio expo);
}
