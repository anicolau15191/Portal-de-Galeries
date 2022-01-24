package back.backend_private.controller;

import back.backend_private.entity.Especialitzat;
import back.backend_private.entity.Galeria;
import back.backend_private.entity.Genere;
import back.backend_private.entity.Poblacio;
import back.backend_private.repositories.EspecialitzatCrud;
import back.backend_private.repositories.GaleriaCrud;
import back.backend_private.repositories.GenereCrud;
import back.backend_private.repositories.PoblacioCrud;
import back.backend_private.services.EspecialitzatServei;
import back.backend_private.services.GaleriaServei;
import back.backend_private.services.GenereServei;
import back.backend_private.services.PoblacioServei;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping()
public class HomeController {
    @Autowired
    private PoblacioServei poblacio;
    @Autowired
    private GaleriaServei galeriaServei;
    @Autowired
    private GenereServei genereServei;
    @Autowired
    private EspecialitzatServei especialitzatServei;

    @GetMapping("/home") //nomes dexar barra
    public String llistat(ModelMap model){
        List<Galeria> galeries = (List<Galeria>) galeriaServei.noEliminades();
        model.addAttribute("llista",galeries);
        List<Poblacio> llistaPoblacions = poblacio.list();
        model.addAttribute("poblacions",llistaPoblacions);
        List<Genere> tipusArt = genereServei.list();
        model.addAttribute("tipusArt",tipusArt);
        List<Genere> generesFills = genereServei.llistatArtFills();
        model.addAttribute("generesFills",generesFills);

        return "home";
    }

    @PostMapping("/add")
    public String addGaleria(@RequestParam String nom, String email, int pob){
        Poblacio trobada = poblacio.findById(pob);
        Galeria galeria = galeriaServei.crearGaleria(1,nom,trobada,email);
        return "redirect:/home";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarGaleria(@PathVariable int id){
        galeriaServei.borrar(id);
        return "redirect:/home";
    }


}
