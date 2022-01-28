package back.backend_private.services;

import back.backend_private.entity.Visitant;
import back.backend_private.repositories.VisitantCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VisitantServei {
    @Autowired
    VisitantCrud visitantCrud;

    public List<Visitant> listAll(){
        List<Visitant> visitants = (List<Visitant>) visitantCrud.findAll();
        return visitants;
    }

    public Visitant findId(int id){
        Optional<Visitant> v = visitantCrud.findById(id);
        Visitant visitant = v.get();
        return visitant;
    }
}
