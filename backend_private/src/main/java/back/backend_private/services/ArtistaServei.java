package back.backend_private.services;

import back.backend_private.entity.Artista;
import back.backend_private.repositories.ArtistaCrud;
import back.backend_private.repositories.ObresJsonCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArtistaServei {
    @Autowired
    private ArtistaCrud data;
    @Autowired
    private ObresJsonCrud sql;

    public List<Artista> read(){
        return (List<Artista>) data.findAll();
    }

    public Artista findById(int id){
        Optional<Artista> a = data.findById(id);
        Artista artista= a.get();
        return artista;
    }

    public Artista create(String nom){
        Artista artista = new Artista();
        artista.setNom(nom);
        data.save(artista);
        return artista;
    }

    public void delete(int id){
        data.deleteById(id);
    }

    public List<Artista> readExpo(int idExpo){
        List<Integer> ids= sql.findArtistaByExpo(idExpo);
        List<Artista> artistes = new ArrayList<>();
        for(int i=0;i<ids.size();i++){
            Optional<Artista> art = data.findById(ids.get(i));
            Artista artista = art.get();
            artistes.add(artista);
        }
        return artistes;
    }

    public List<Artista> readExpo2(int idExpo, int[] ids){
        List<Artista> artistes = readExpo(idExpo);
        boolean repe=true;
        for(int i=0;i<ids.length;i++){
            for(int j=0;j<artistes.size();j++){
                if(artistes.get(j).getId()==ids[i]){
                    repe=false;
                }
            }
            if(repe){
                Optional<Artista> art = data.findById(ids[i]);
                Artista artista = art.get();
                artistes.add(artista);
            }
        }
        return artistes;
    }


}
