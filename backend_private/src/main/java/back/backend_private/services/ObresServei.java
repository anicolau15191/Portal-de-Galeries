package back.backend_private.services;

import back.backend_private.entity.Exposicio;
import back.backend_private.entity.Obres;
import back.backend_private.repositories.ObresCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ObresServei {
    @Autowired
    private ObresCrud data;

    public List<Obres> read(){
        return (List<Obres>) data.findAll();
    }

    public int create(String nom, int venta){
        Obres obra = new Obres();
        obra.setNom(nom);
        obra.setVenta(venta);
        data.save(obra);
        return obra.getId();
    }

    public int create(String nom, int venta, float preu, int any){
        Obres obra = new Obres();
        obra.setNom(nom);
        obra.setVenta(venta);
        obra.setPreu(preu);
        data.save(obra);
        return obra.getId();
    }

    public void addExpo(Exposicio idExpo, int idObra){
        Obres obra = findById(idObra);
        obra.setExpo(idExpo);
        data.save(obra);
    }

    public void deleteExpo(int idObra){
        Obres obra = findById(idObra);
        obra.setExpo(null);
        data.save(obra);
    }

    public Obres findById(int idObra){
        Optional<Obres> o = data.findById(idObra);
        Obres obra = o.get();
        return obra;
    }
}
