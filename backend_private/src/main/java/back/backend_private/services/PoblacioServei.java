package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Poblacio;
import back.backend_private.repositories.GaleriaCrud;
import back.backend_private.repositories.PoblacioCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PoblacioServei implements MetodesCrudPoblacio{
    @Autowired
    private PoblacioCrud data;

    @Override
    public List<Poblacio> list() {

        return (List<Poblacio>) data.findAll();
    }

    @Override
    public Poblacio findById(int id) {
        Optional<Poblacio> p = data.findById(id);
        Poblacio poblacio = p.get();
        return poblacio;
    }

}
