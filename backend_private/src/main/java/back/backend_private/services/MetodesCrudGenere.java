package back.backend_private.services;

import back.backend_private.entity.Genere;
import java.util.List;

public interface MetodesCrudGenere {
    List<Genere>list();
    List<Genere>llistatArt(int[]art);


}
