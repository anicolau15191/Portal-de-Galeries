package back.backend_private.repositories;

import back.backend_private.entity.Feta;
import back.backend_private.entity.Pertany;
import back.backend_private.entity.PertanyId;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PertanyCrud extends CrudRepository<Pertany, PertanyId> {
    List<Pertany> findAllById_idObres(int idObres);
}
