package back.backend_private.service;


import back.backend_private.entity.Exposicio;
import back.backend_private.repositories.ExpoCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpoService implements ExpoServiceI{
    @Autowired
    private ExpoCrud data;

    @Override
    public List<Exposicio> read(){
        return (List<Exposicio>) data.findAll();
    }

    @Override
    public void create(Exposicio expo) {
    }

    @Override
    public void delete(int id) {
        Optional<Exposicio> e = data.findById(id);
        Exposicio expo = e.get();
        expo.setEnabled(1);
        data.save(expo);
    }

    @Override
    public Exposicio initExpo1(int idExpo, String nom, int idPropietari) {
        Exposicio expo = new Exposicio();
        expo.setNom(nom);
        expo.setIdPropietari(idPropietari);
        return expo;
    }

    @Override
    public Exposicio initExpo2(int idExpo, String nom, int idPromotor) {
        Exposicio expo = new Exposicio();
        expo.setNom(nom);
        expo.setIdPromotor(idPromotor);
        return expo;
    }

}
