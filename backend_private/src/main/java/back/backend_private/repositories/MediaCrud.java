package back.backend_private.repositories;

import back.backend_private.entity.Genere;
import back.backend_private.entity.Media;
import org.springframework.data.repository.CrudRepository;

public interface MediaCrud extends CrudRepository<Media,Integer> {
}
