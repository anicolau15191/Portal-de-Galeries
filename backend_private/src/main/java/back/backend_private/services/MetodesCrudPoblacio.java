package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Poblacio;

import java.util.List;
import java.util.Optional;

public interface MetodesCrudPoblacio {
    List<Poblacio> list();
    Poblacio findById(int id);
}
