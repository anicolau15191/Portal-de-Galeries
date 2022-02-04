package back.backend_private.controller;

import back.backend_private.entity.Exposicio;
import back.backend_private.entity.Sessio;
import back.backend_private.entity.SessioJson;
import back.backend_private.services.ExpoService;
import back.backend_private.services.SessioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@org.springframework.web.bind.annotation.RestController

public class RestController {
    @Autowired
    private SessioService sessioService;

    @GetMapping("/sesions/{id}/{idGaleria}")
    public List<SessioJson> exposicio(@PathVariable int id,@PathVariable int idGaleria){
        List<Sessio> sesions = sessioService.sessionsForExpo(id);
        List<SessioJson> json = new ArrayList<>();

        for (int i = 0; i<sesions.size();i++){
            SessioJson sessio = new SessioJson();
            sessio.setStart(sesions.get(i).getData().toString()+"T"+sesions.get(i).getHora_ini());
            sessio.setTitle(sesions.get(i).getNom());
            sessio.setUrl("/reserves"+"/"+idGaleria+"/"+id+"/sessio/"+sesions.get(i).getId()+"/entrades");
            json.add(sessio);
        }
        return json;
    }
}
