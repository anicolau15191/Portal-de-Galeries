package back.backend_private.repositories;


import back.backend_private.entity.ObresJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Repository
public class ObresJsonCrud{
    @Autowired
    private EntityManager entityManager;

    public List<ObresJson> getCompres(){
        List<Object[]> sql = ((List<Object[]>) entityManager.createNativeQuery("SELECT obres.id_obres as 'idObres', obres.nom as 'nomO', obres.preu,usuaris.nom as 'nomU',usuaris.cognoms,usuaris.email,poblacio.nom as 'nomP' FROM obres " +
                "INNER JOIN visitant ON obres.id_visitant=visitant.id_visitant " +
                "INNER JOIN usuaris ON visitant.id_visitant=usuaris.id_usuaris " +
                "INNER JOIN poblacio ON usuaris.id_poblacio=poblacio.id_poblacio;").getResultList());

        Iterator it=sql.iterator();
        List<ObresJson> list=new ArrayList<>();
        while(it.hasNext()){
            Object[] line = (Object[]) it.next();
            ObresJson obra = new ObresJson();
            obra.setIdObres((Integer) line[0]);
            obra.setNomO((String) line[1]);
            obra.setPreu(String.valueOf(line[2]));
            obra.setNomU((String) line[3]);
            obra.setCognoms((String) line[4]);
            obra.setEmail((String) line[5]);
            obra.setNomP((String) line[6]);
            list.add(obra);
        }
        return list;
    }

    public List<Integer> getExpos(int propietari){
        List<Integer> idExpos = entityManager.createNativeQuery("SELECT DISTINCT exposicio.id_exposicio FROM exposicio" +
                " INNER JOIN sales ON exposicio.id_sala=sales.id_sales\n" +
                " INNER JOIN galeria ON sales.id_galeria=galeria.id_galeria\n" +
                " INNER JOIN propietari ON galeria.id_propietari="+propietari+";").getResultList();
        return idExpos;
    }


}
