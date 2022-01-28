package back.backend_private.services;

import back.backend_private.entity.Entrada;
import back.backend_private.entity.Sessio;
import back.backend_private.repositories.SessioCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SessioService {
    @Autowired
    SessioCrud sessioCrud;

    public List<Sessio> read(){
        return null;
    }

    public List<Sessio> readByData(){
        return null;
    }

    public List<Sessio> readByExpo(){
        return null;
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
