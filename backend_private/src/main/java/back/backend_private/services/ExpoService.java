package back.backend_private.services;


import back.backend_private.entity.Exposicio;
import back.backend_private.repositories.ExpoCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public List<Exposicio> available() {
        List <Exposicio> all = read();
        List <Exposicio> available = new ArrayList<>();
        for(int i=0;i<all.size();i++){
            if(all.get(i).getEnabled()==0){
                available.add(all.get(i));
            }
        }
        return available;
    }

    @Override
    public void delete(int id) {
        Exposicio expo = findById(id);
        expo.setEnabled(1);
        data.save(expo);
    }

    @Override
    public Exposicio initExpo(String nom, int idPropietari) {
        Exposicio expo = new Exposicio();
        expo.setNom(nom);
        expo.setIdPropietari(idPropietari);
        expo.setEnabled(0);
        data.save(expo);
        return expo;
    }

    @Override
    public Exposicio findById(int id) {
        Optional<Exposicio> e = data.findById(id);
        Exposicio expo = e.get();
        return expo;
    }


}
