package back.backend_private.repositories;

import back.backend_private.entity.Artista;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArtistaCrud extends CrudRepository<Artista,Integer> {
}
