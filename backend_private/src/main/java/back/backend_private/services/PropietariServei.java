package back.backend_private.services;

import back.backend_private.entity.Propietari;
import back.backend_private.entity.Usuaris;
import back.backend_private.repositories.PropietariCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PropietariServei {
    @Autowired
    PropietariCrud propietariCrud;


    public void add(Usuaris usuari){
        Propietari propietari = new Propietari();
        propietari.setId(usuari.getId());
        propietariCrud.save(propietari);
    }

}
