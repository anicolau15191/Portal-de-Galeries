package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Genere;
import back.backend_private.entity.Poblacio;
import back.backend_private.repositories.GaleriaCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GaleriaServei implements MetodesCrudGaleria {
    @Autowired
    private GaleriaCrud data;
    @Autowired
    private PoblacioServei poblacio;
    @Autowired
    private GenereServei genereServei;

    @Override
    public List<Galeria> list() {

        return (List<Galeria>) data.findAll();
    }

    @Override
    public List<Galeria> noEliminades() {

        List<Galeria> llistat = (List<Galeria>) data.findAll();
        List<Galeria> llistaNoEliminats = new ArrayList<>();

        for (int i = 0; i < llistat.size(); i++){
            if (llistat.get(i).getEnabled() == 0){
                llistaNoEliminats.add(llistat.get(i));
            }
        }
        return llistaNoEliminats;
    }

    @Override
    public void guardar(Galeria galeria) {
    }

    @Override
    public void borrar(int id) {
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setEnabled(1);
        data.save(galeria);
    }

    @Override
    public Galeria crearGaleria(int idPropietari , String nom, Poblacio poblacio, String email) {
        Galeria galeria = new Galeria();
        galeria.setIdPropietari(idPropietari);
        galeria.setNom(nom);
        galeria.setEmail(email);
        galeria.setPoblacio(poblacio);

        data.save(galeria);
        return galeria;
    }

    @Override
    public void addDescripcio(String desc, int id) {
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setDescripcio(desc);
        data.save(galeria);

    }

}
