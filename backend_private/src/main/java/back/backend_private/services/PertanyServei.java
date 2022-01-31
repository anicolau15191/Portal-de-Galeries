package back.backend_private.services;

import back.backend_private.entity.Genere;
import back.backend_private.entity.Obres;
import back.backend_private.entity.Pertany;
import back.backend_private.entity.PertanyId;
import back.backend_private.repositories.GenereCrud;
import back.backend_private.repositories.PertanyCrud;
import org.springframework.beans.factory.annotation.Autowired;

public class PertanyServei {
    @Autowired
    PertanyCrud pertanyCrud;
    @Autowired
    GenereCrud genereCrud;
    @Autowired
    GenereServei genereServei;

    public void assignarGenere(int genere, int obra){
        PertanyId pertanyId = new PertanyId(genere,obra);
        Pertany pertany = new Pertany(pertanyId);
        pertanyCrud.save(pertany);
    }
}
