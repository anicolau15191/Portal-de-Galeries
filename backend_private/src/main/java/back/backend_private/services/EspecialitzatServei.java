package back.backend_private.services;

import back.backend_private.entity.EspecialitatId;
import back.backend_private.entity.Especialitzat;
import back.backend_private.entity.Galeria;
import back.backend_private.entity.Genere;
import back.backend_private.repositories.EspecialitzatCrud;
import back.backend_private.repositories.GenereCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EspecialitzatServei {

    @Autowired
    EspecialitzatCrud especialitzatCrud;
    @Autowired
    GenereCrud genereCrud;
    @Autowired
    GenereServei genereServei;


    public void crearRelacio(List<Genere> art, Galeria galeria){
        for (int i = 0; i<art.size();i++){
            EspecialitatId especialitatId = new EspecialitatId(galeria.getIdGaleria(),art.get(i).getIdGenere());
            Especialitzat esp = new Especialitzat(especialitatId);
            especialitzatCrud.save(esp);
        }
    }

    public void addNouGenere(Genere genere, Galeria galeria){
            EspecialitatId especialitatId = new EspecialitatId(galeria.getIdGaleria(),genere.getIdGenere());
            Especialitzat esp = new Especialitzat(especialitatId);
            especialitzatCrud.save(esp);
    }
    public void deleteGenere(Genere genere, Galeria galeria){
        if(genere.getIdGenere2() != null){
            EspecialitatId especialitatId = new EspecialitatId(galeria.getIdGaleria(),genere.getIdGenere());
            Especialitzat esp = new Especialitzat(especialitatId);
            especialitzatCrud.delete(esp);
        }else{
            List<Genere> genereFills = getGeneresFills(galeria);
            for (int i = 0; i < genereFills.size(); i++){
                if (genereFills.get(i).getIdGenere2().idGenere == genere.getIdGenere()){
                    EspecialitatId especialitatId = new EspecialitatId(galeria.getIdGaleria(),genereFills.get(i).getIdGenere());
                    Especialitzat esp = new Especialitzat(especialitatId);
                    especialitzatCrud.delete(esp);
                }
            }
            EspecialitatId especialitatId = new EspecialitatId(galeria.getIdGaleria(),genere.getIdGenere());
            Especialitzat esp = new Especialitzat(especialitatId);
            especialitzatCrud.delete(esp);
        }

    }

    public List<Genere> getGeneres(Galeria galeria){
       List<Especialitzat> especialitzats =  especialitzatCrud.findAllByEspecialitatId_IdGaleria(galeria.getIdGaleria());

       List<Genere> generes = new ArrayList<>();

       for (Especialitzat e:especialitzats){
           Optional<Genere> genere = genereCrud.findById(e.getEspecialitatId().getIdGenere());
           Genere g = genere.get();
           if(g.getIdGenere2() == null){
               generes.add(g);
           }
       }
       return generes;
    }

    public List<Genere> getGeneresFills(Galeria galeria){
        List<Especialitzat> especialitzats =  especialitzatCrud.findAllByEspecialitatId_IdGaleria(galeria.getIdGaleria());

        List<Genere> generesFills = new ArrayList<>();

        for (Especialitzat e:especialitzats){
            Optional<Genere> genere = genereCrud.findById(e.getEspecialitatId().getIdGenere());
            Genere g = genere.get();
            if(g.getIdGenere2() != null){
                generesFills.add(g);
            }
        }
        return generesFills;
    }


}
