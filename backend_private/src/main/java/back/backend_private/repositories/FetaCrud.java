package back.backend_private.repositories;

import back.backend_private.entity.Feta;
import back.backend_private.entity.FetaId;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FetaCrud extends CrudRepository<Feta, FetaId> {
    List<Feta> findAllById_idArtista(int idArtista);
}
