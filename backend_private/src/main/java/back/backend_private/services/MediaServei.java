package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Media;
import back.backend_private.entity.Poblacio;
import back.backend_private.repositories.MediaCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MediaServei {
    @Autowired
    MediaCrud mediaCrud;

    public Media addFoto( Galeria galeria, String nom) {
        Media media = new Media();
        media.setGaleria(galeria);
        media.setNom(nom);

        mediaCrud.save(media);
        return media;
    }
}
