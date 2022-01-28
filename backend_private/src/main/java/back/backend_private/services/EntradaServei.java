package back.backend_private.services;

import back.backend_private.entity.*;
import back.backend_private.repositories.EntradaCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EntradaServei {
    @Autowired
    EntradaCrud entradaCrud;
    @Autowired
    VisitantServei visitantServei;
    @Autowired
    SessioService sessioService;
    @Autowired
    UsuariServei usuariServei;

    public List<Entrada> listAll(){
        List<Entrada> entrades = (List<Entrada>) entradaCrud.findAll();
        return entrades;
    }

    public Entrada findId(int id){
        Optional<Entrada> e = entradaCrud.findById(id);
        Entrada entrada = e.get();
        return entrada;
    }

    public List<Entrada> getEntradesSessio(int idSessio){
        List<Entrada> entrades = listAll();
        List <Entrada> listEntradesSessio = new ArrayList<>();

        for (int i = 0; i < entrades.size(); i++){
            if(entrades.get(i).getSessio().getId() == idSessio){
                listEntradesSessio.add(entrades.get(i));
            }
        }
        return listEntradesSessio;
    }

    public List<Usuaris> getUsuarisSessio(int idSessio){
        List<Visitant> visitants = visitantServei.listAll();
        List<Entrada> entrades = getEntradesSessio(idSessio);
        List <Usuaris> listUsuariSessio = new ArrayList<>();

        for (int i = 0; i < entrades.size(); i++){
            for (int k =0; k<visitants.size();k++){
                if (entrades.get(i).getVisitant().getId() == visitants.get(k).getId()){
                    Usuaris user = new Usuaris();
                    user = usuariServei.findByID(visitants.get(k).getId());
                    listUsuariSessio.add(user);
                }
            }
        }

        return listUsuariSessio;

    }

    public Sessio getSesioEntrada(int idSessio){
        List<Visitant> visitants = visitantServei.listAll();
        List<Entrada> entrades = getEntradesSessio(idSessio);
        Sessio sessio = new Sessio();

        for (int i = 0; i < entrades.size(); i++){
            for (int k =0; k<visitants.size();k++){
                if (entrades.get(i).getVisitant().getId() == visitants.get(k).getId()){
                    sessio = sessioService.findById(entrades.get(i).getSessio().getId());
                    break;
                }
            }
        }

        return sessio;
    }


}
