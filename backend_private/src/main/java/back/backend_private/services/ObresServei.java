package back.backend_private.services;

import back.backend_private.entity.Obres;
import back.backend_private.repositories.ObresCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObresServei {
    @Autowired
    private ObresCrud data;

    public List<Obres> read(){
        return (List<Obres>) data.findAll();
    }
}
