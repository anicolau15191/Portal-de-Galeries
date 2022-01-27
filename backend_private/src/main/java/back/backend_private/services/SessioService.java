package back.backend_private.services;

import back.backend_private.entity.Sessio;
import back.backend_private.repositories.SessioCrud;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

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
}
