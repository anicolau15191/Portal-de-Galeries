package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Sales;
import back.backend_private.repositories.SalesCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class SalesServei {
    @Autowired
    private SalesCrud sales;

    public List<Sales> findSlesByGaleria(Galeria galeria) {

        List<Sales> llistatSalesGaleria = new ArrayList<>();
        List<Sales> llistatSales = (List<Sales>) sales.findAll();

        for (int i = 0; i<llistatSales.size();i ++){
            if (llistatSales.get(i).getGaleria().equals(galeria) && llistatSales.get(i).getEnabled() == 0){
                llistatSalesGaleria.add(llistatSales.get(i));
            }
        }
        return llistatSalesGaleria;
    }

    public Sales novaSala (Galeria galeria, String nom, int aforament){
        Sales sala = new Sales();
        sala.setNom(nom);
        sala.setGaleria(galeria);
        sala.setAforament(aforament);

        sales.save(sala);
        return sala;
    }

    public void eliminarSala(int id) {
        Optional<Sales> getSala = sales.findById(id);
        Sales sala = getSala.get();
        sala.setEnabled(1);
        sales.save(sala);
    }

    public Sales findSalaById(int id){
        Optional<Sales> getSala = sales.findById(id);
        Sales sala = getSala.get();
        return sala;
    }

    public void editarSala(int id, String nom, int aforament) {
        Optional<Sales> getSala = sales.findById(id);
        Sales sala = getSala.get();
        sala.setNom(nom);
        sala.setAforament(aforament);

        sales.save(sala);

    }


}
