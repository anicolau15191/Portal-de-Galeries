package back.backend_private.services;

import back.backend_private.entity.Exposicio;
import back.backend_private.entity.Sessio;
import back.backend_private.repositories.SessioCrud;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class SessioService {
    @Autowired
    SessioCrud sessioCrud;

    public List<Sessio> read(){
        List<Sessio> all = (List<Sessio>) sessioCrud.findAll();
        return all;
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
}
