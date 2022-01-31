package back.backend_private.services;

import back.backend_private.entity.Exposicio;

import java.util.List;

public interface ExpoServiceI {
    List<Exposicio> read();
    List<Exposicio> available(int idSala);
    void delete (int id);
    Exposicio create(String nom, String descripcio, int idPropietari);
    Exposicio findById(int id);

}
