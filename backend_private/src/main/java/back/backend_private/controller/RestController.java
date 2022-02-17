package back.backend_private.controller;

import back.backend_private.entity.*;
import back.backend_private.repositories.FetaCrud;
import back.backend_private.repositories.ObresJsonCrud;
import back.backend_private.entity.ObresJson;
import back.backend_private.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@org.springframework.web.bind.annotation.RestController

public class RestController {
    @Autowired
    private SessioService sessioService;
    @Autowired
    private ExpoService expoService;
    @Autowired
    private GaleriaServei galeriaServei;
    @Autowired
    private ObresServei obresServei;
    @Autowired
    private ArtistaServei artistaServei;
    @Autowired
    private GenereServei genereServei;
    @Autowired
    private ObresJsonCrud obresJsonCrud;
    @Autowired
    private FetaCrud fetaCrud;

    @GetMapping("/sesions/{id}/{idGaleria}")
    public List<SessioJson> exposicio(@PathVariable int id,@PathVariable int idGaleria){
        List<Sessio> sesions = sessioService.sessionsForExpo(id);
        List<SessioJson> json = new ArrayList<>();
        Exposicio expo = expoService.findById(id);

        for (int i = 0; i<sesions.size();i++){
            if(sesions.get(i).getData().after(expo.getData_ini()) && sesions.get(i).getData().before(expo.getData_fi())
                    || sesions.get(i).getData().equals(expo.getData_ini())){
                SessioJson sessio = new SessioJson();
                sessio.setStart(sesions.get(i).getData().toString()+"T"+sesions.get(i).getHora_ini());
                sessio.setTitle(sesions.get(i).getNom());
                sessio.setUrl("/reserves"+"/"+idGaleria+"/"+id+"/sessio/"+sesions.get(i).getId()+"/entrades");
                json.add(sessio);
            }
        }
        return json;
    }

    @GetMapping("/sesions/{idGaleria}/{idSala}/{idExpo}")
    public List<SessioJson> sessions(@PathVariable int idGaleria, @PathVariable int idSala, @PathVariable int idExpo){
        List<Sessio> sesions = sessioService.sessionsForExpo(idExpo);
        List<SessioJson> json = new ArrayList<>();
        Exposicio expo = expoService.findById(idExpo);

        for (int i = 0; i<sesions.size();i++){
            if(sesions.get(i).getData().after(expo.getData_ini()) && sesions.get(i).getData().before(expo.getData_fi())
            || sesions.get(i).getData().equals(expo.getData_ini())){
                SessioJson sessio = new SessioJson();
                sessio.setStart(sesions.get(i).getData().toString()+"T"+sesions.get(i).getHora_ini());
                sessio.setEnd(sesions.get(i).getData().toString()+"T"+sesions.get(i).getHora_fi());
                sessio.setTitle(sesions.get(i).getNom());
                sessio.setUrl("/delSessio/"+idGaleria+"/"+idSala+"/"+idExpo+"/"+sesions.get(i).getId());
                json.add(sessio);
            }
        }
         return json;
    }

    @GetMapping("/compres/{idPropietari}")
    public List<ObresJson> compres(@PathVariable int idPropietari){
        List<ObresJson> compres = obresJsonCrud.getCompres();
        List<Integer> expos = obresJsonCrud.getExpos(idPropietari);
        List<ObresJson> json = new ArrayList<>();

        for(int i=0;i<compres.size();i++){
            Obres obra = obresServei.findById(compres.get(i).getIdObres());
            for(int j=0;j<expos.size();j++){
                if(obra.getExpo().getId()==expos.get(j)){
                    json.add(compres.get(i));
                }
            }
        }
        return json;
    }

    @GetMapping("/artistes")
    public List<ArtistaJson> artistes(){
        List<Artista> artistes = artistaServei.read();
        List<ArtistaJson> list = new ArrayList<>();
        for(int i=0;i< artistes.size();i++){
            ArtistaJson art = new ArtistaJson();
            art.setId_artista(artistes.get(i).getId());
            art.setNom(artistes.get(i).getNom());
            art.setCount(fetaCrud.countById_IdArtista(artistes.get(i).getId()));
            list.add(art);
        }

        return list;
    }

    @GetMapping("/generes")
    public List<GeneresJson> generes(){
        List<Genere> fills = genereServei.llistatArtFills();
        List<Genere> pares = genereServei.list();
        List<GeneresJson> json = new ArrayList<>();

        for(int i=0;i<fills.size();i++){
            GeneresJson genere = new GeneresJson();
            genere.setFill(fills.get(i).getNom());
            genere.setId_fill(Integer.toString(fills.get(i).getIdGenere()));
            for(int j=0;j< pares.size();j++){
                if(pares.get(j).getIdGenere()==fills.get(i).getIdGenere2().getIdGenere()){
                    genere.setId_pare(Integer.toString(pares.get(j).getIdGenere()));
                }
            }
            json.add(genere);
        }
        return json;
    }

    @GetMapping("/generes/pares")
    public List<ParesJson> generesPare(){

        List<Genere> pares = genereServei.list();
        List<ParesJson> json = new ArrayList<>();

        for(int i=0;i<pares.size();i++){
            ParesJson genere = new ParesJson();
            genere.setNom(pares.get(i).getNom());
            genere.setId(Integer.toString(pares.get(i).getIdGenere()));
            json.add(genere);
        }
        return json;
    }
}
