package back.backend_private.repositories;

import back.backend_private.entity.Visitant;
import org.springframework.data.repository.CrudRepository;

public interface VisitantCrud extends CrudRepository<Visitant,Integer> {
}
