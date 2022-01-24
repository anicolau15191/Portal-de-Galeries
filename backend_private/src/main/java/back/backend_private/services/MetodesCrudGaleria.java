package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Poblacio;

import java.util.List;
import java.util.Optional;

public interface MetodesCrudGaleria {
    List<Galeria> list();
    List<Galeria> noEliminades();
    void guardar(Galeria galeria);
    void borrar(int id);
    Galeria crearGaleria(int idpropietari, String nom, Poblacio poblacio, String email);
    void addDescripcio(String desc, int id);

}
