package back.backend_private.services;

import back.backend_private.entity.Poblacio;
import back.backend_private.entity.Propietari;
import back.backend_private.entity.Usuaris;
import back.backend_private.entity.Visitant;
import back.backend_private.repositories.PropietariCrud;
import back.backend_private.repositories.UsuariCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuariServei {
    @Autowired
    UsuariCrud usuariCrud;
    @Autowired
    PropietariServei propietariServei;
    @Autowired
    PropietariCrud propietariCrud;

    public Usuaris findByID(int id){
        Optional<Usuaris> u = usuariCrud.findById(id);
        Usuaris user = u.get();
        return user;
    }

    public void addPropietari(String nom, String cognom, String email, Poblacio poblacio, String password){

        Usuaris usuari = new Usuaris();
        usuari.setNom(nom);
        usuari.setCognoms(cognom);
        usuari.setEmail(email);
        usuari.setPoblacio(poblacio);
        usuari.setPassword(password);

        usuariCrud.save(usuari);

        propietariServei.add(usuari);
    }

    public Usuaris findByEmail(String email){
        List<Usuaris> all = (List<Usuaris>) usuariCrud.findAll();
        List<Propietari> allPropietari = (List<Propietari>) propietariCrud.findAll();
        Usuaris esPropietari = new Usuaris();
        Usuaris user = new Usuaris();

        for (int i = 0; i<all.size();i++){
            if(all.get(i).getEmail().equalsIgnoreCase(email)){
                user.setId(all.get(i).getId());
                user.setNom(all.get(i).getNom());
                user.setCognoms(all.get(i).getCognoms());
                user.setEmail(all.get(i).getEmail());
                user.setPoblacio(all.get(i).getPoblacio());
                user.setPasswordBd(all.get(i).getPassword());
                break;
            }
        }
        for (int i = 0; i<allPropietari.size();i++){
            if(user.getId() == allPropietari.get(i).getUsuari().getId()){
                esPropietari = user;
            }
        }
        return esPropietari;
    }
}
