package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Genere;
import back.backend_private.repositories.GenereCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GenereServei implements MetodesCrudGenere{
    @Autowired
    private GenereCrud data;

    @Override
    public List<Genere> list() {
        List<Genere> llista =  (List<Genere>) data.findAll();
        List <Genere> art = new ArrayList<>();

        for (int i = 0; i<llista.size(); i++){
               if(llista.get(i).getIdGenere2() == null) {
                   art.add(llista.get(i));
               }
        }
        return art;
    }

    @Override
    public List<Genere> llistatArt(int[] art) {
        List<Genere> llistaArts = new ArrayList<>();
        List<Genere> llista =  (List<Genere>) data.findAll();

        for (int i = 0; i < llista.size(); i++){
            for (int k =0; k<art.length;k++){
                if (llista.get(i).getIdGenere() == art[k]){
                    llistaArts.add(llista.get(i));
                }
            }
        }
        return llistaArts;
    }

    public List<Genere> llistatArtFills() {

        List<Genere> llistaArtsFills = new ArrayList<>();
        List<Genere> llista =  (List<Genere>) data.findAll();

        for (int i = 0; i < llista.size(); i++){
                if(llista.get(i).getIdGenere2() != null){
                    llistaArtsFills.add(llista.get(i));
                }
        }
        return llistaArtsFills;
    }



}
