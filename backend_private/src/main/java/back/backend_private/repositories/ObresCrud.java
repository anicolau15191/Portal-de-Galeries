package back.backend_private.repositories;

import back.backend_private.entity.Exposicio;
import back.backend_private.entity.FetaId;
import back.backend_private.entity.Obres;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ObresCrud extends CrudRepository<Obres, Integer> {
    List<Obres> findAllByExpo(Exposicio expo);
}
