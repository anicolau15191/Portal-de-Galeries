package back.backend_private.services;

import back.backend_private.entity.Artista;
import back.backend_private.entity.Exposicio;
import back.backend_private.repositories.ArtistaCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistaServei {
    @Autowired
    private ArtistaCrud data;

    public List<Artista> read(){
        return (List<Artista>) data.findAll();
    }

    public Artista findById(int id){
        Optional<Artista> a = data.findById(id);
        Artista artista= a.get();
        return artista;
    }
}
