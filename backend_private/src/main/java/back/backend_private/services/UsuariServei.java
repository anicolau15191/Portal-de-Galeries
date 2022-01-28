package back.backend_private.services;

import back.backend_private.entity.Usuaris;
import back.backend_private.entity.Visitant;
import back.backend_private.repositories.UsuariCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuariServei {
    @Autowired
    UsuariCrud usuariCrud;

    public Usuaris findByID(int id){
        Optional<Usuaris> u = usuariCrud.findById(id);
        Usuaris user = u.get();
        return user;
    }
}
