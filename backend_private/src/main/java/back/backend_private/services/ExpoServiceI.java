package back.backend_private.services;

import back.backend_private.entity.Exposicio;

import java.util.List;

public interface ExpoServiceI {
    List<Exposicio> read();
    List<Exposicio> available();
    void delete (int id);
    Exposicio initExpo(String nom, int idPropietari);
    Exposicio findById(int id);

}
