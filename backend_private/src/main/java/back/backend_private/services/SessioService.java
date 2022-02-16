package back.backend_private.services;

import back.backend_private.entity.Exposicio;
import back.backend_private.entity.Entrada;
import back.backend_private.entity.Sessio;
import back.backend_private.repositories.ExpoCrud;
import back.backend_private.repositories.SessioCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SessioService {
    @Autowired
    SessioCrud sessioCrud;
    @Autowired
    ExpoService expoService;

    public List<Sessio> read(){
        List<Sessio> all = (List<Sessio>) sessioCrud.findAll();
        return all;
    }

    public void create(Date data, Time hora_ini, Time hora_fi, String nom, int idExpo){
        Sessio sessio = new Sessio();
        sessio.setData(data);
        sessio.setHora_ini(hora_ini);
        sessio.setHora_fi(hora_fi);
        sessio.setNom(nom);
        sessio.setExpo(expoService.findById(idExpo));
        sessioCrud.save(sessio);
    }

    public void delete(int id){
        sessioCrud.delete(findById(id));
    }

    public List<Sessio> readByData(Exposicio expo,Date data){
        List<Sessio> byData = new ArrayList<>();
        List<Sessio> byExpo = readByExpo(expo);

        for(int i=0;i<byExpo.size();i++){
            if(byExpo.get(i).getData().equals(data)){
                byData.add(byExpo.get(i));
            }
        }
        return byData;
    }

    public List<Sessio> readByExpo(Exposicio expo){
        List<Sessio> byExpo = sessioCrud.findByExpo(expo);
        return byExpo;
    }

    public List<Sessio> sessionsForExpo(int idExpo){
        List<Sessio> sessions = (List<Sessio>) sessioCrud.findAll();
        List <Sessio> sesionsExpo = new ArrayList<>();

        for (int i = 0; i < sessions.size(); i++){
            if(sessions.get(i).getExpo().getId() == idExpo){
                sesionsExpo.add(sessions.get(i));
            }
        }
        return sesionsExpo;
    }

    public Sessio findById(int id){
        Optional<Sessio> s = sessioCrud.findById(id);
        Sessio sessio = s.get();
        return sessio;
    }

}
