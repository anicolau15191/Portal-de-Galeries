package back.backend_private.services;

import back.backend_private.entity.Exposicio;

import java.util.List;

public interface ExpoServiceI {
    List<Exposicio> read();
    void create (Exposicio expo);
    void delete (int id);
    Exposicio initExpo(int idExpo, String nom, int idPropietari);

}
