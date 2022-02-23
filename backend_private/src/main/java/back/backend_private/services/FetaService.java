package back.backend_private.services;

import back.backend_private.entity.Artista;
import back.backend_private.entity.Feta;
import back.backend_private.entity.FetaId;
import back.backend_private.entity.Obres;
import back.backend_private.repositories.FetaCrud;
import back.backend_private.repositories.ObresCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FetaService {
    @Autowired
    ObresCrud obresCrud;
    @Autowired
    ArtistaServei artistaServei;
    @Autowired
    FetaCrud fetaCrud;

    public void enllaçarObra(int obra, int artista){
        FetaId fetaId = new FetaId(obra, artista);
        Feta feta = new Feta(fetaId);
        fetaCrud.save(feta);
    }

    public List<Obres> filtrarObres(int idArtista){
        List<Feta> relacions = fetaCrud.findAllById_idArtista(idArtista);
        List<Obres> obres = new ArrayList<>();

        for(Feta rela:relacions){
            Optional<Obres> o = obresCrud.findById(rela.getId().getIdObra());
            Obres obra = o.get();
            obres.add(obra);
        }
        return obres;
    }

    public void deleteObra(int obra, int artista){
        FetaId fetaId = new FetaId(obra, artista);
        Feta feta = new Feta(fetaId);
        fetaCrud.delete(feta);
    }

}
