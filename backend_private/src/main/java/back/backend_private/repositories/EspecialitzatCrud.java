package back.backend_private.repositories;

import back.backend_private.entity.EspecialitatId;
import back.backend_private.entity.Especialitzat;
import back.backend_private.entity.Genere;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EspecialitzatCrud extends CrudRepository<Especialitzat, EspecialitatId> {
    List<Especialitzat> findAllByEspecialitatId_IdGaleria(int idGaleria);
}
