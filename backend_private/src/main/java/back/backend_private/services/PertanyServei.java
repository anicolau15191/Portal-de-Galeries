package back.backend_private.services;

import back.backend_private.entity.Genere;
import back.backend_private.entity.Pertany;
import back.backend_private.entity.PertanyId;
import back.backend_private.repositories.GenereCrud;
import back.backend_private.repositories.PertanyCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PertanyServei {
    @Autowired
    PertanyCrud pertanyCrud;
    @Autowired
    GenereCrud genereCrud;
    @Autowired
    GenereServei genereServei;

    public void assignarGenere(int pare, int fill, int obra){
        PertanyId pertanyIdPare = new PertanyId(obra,pare);
        PertanyId pertanyIdFill = new PertanyId(obra,fill);
        Pertany pertanyPare = new Pertany(pertanyIdPare);
        Pertany pertanyFill = new Pertany(pertanyIdFill);
        pertanyCrud.save(pertanyPare);
        pertanyCrud.save(pertanyFill);
    }

    public List<Genere> getGeneres(int obra){
        List<Pertany> relacions = pertanyCrud.findAllByPertanyId_idObres(obra);
        List<Genere> generes = new ArrayList<>();

        for(Pertany rela:relacions){
            Optional<Genere> genere = genereCrud.findById(rela.getPertanyId().getIdGenere());
            Genere g = genere.get();
            generes.add(g);
        }
        return generes;
    }
}
