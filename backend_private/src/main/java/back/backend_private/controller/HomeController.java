package back.backend_private.controller;

<<<<<<< HEAD
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
=======
import back.backend_private.entity.Exposicio;
import back.backend_private.services.ExpoService;
>>>>>>> adri
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
<<<<<<< HEAD
import java.util.Optional;
=======
>>>>>>> adri

@Controller
@RequestMapping()
public class HomeController {
<<<<<<< HEAD
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

=======

    @Autowired
    private ExpoService expoService;

    @GetMapping("/home")
    public String getHome(ModelMap model){
        List<Exposicio> expos = (List<Exposicio>) expoService.read();
        model.addAttribute("list",expos);
>>>>>>> adri
        return "home";
    }

    @PostMapping("/add")
<<<<<<< HEAD
    public String addGaleria(@RequestParam String nom, String email, int pob){
        Poblacio trobada = poblacio.findById(pob);
        Galeria galeria = galeriaServei.crearGaleria(1,nom,trobada,email);
=======
    public String addExpo(@RequestParam String nom, int idPromotor){
        Exposicio expo = expoService.initExpo2(1,nom,idPromotor);
>>>>>>> adri
        return "redirect:/home";
    }

    @GetMapping("/eliminar/{id}")
<<<<<<< HEAD
    public String eliminarGaleria(@PathVariable int id){
        galeriaServei.borrar(id);
        return "redirect:/home";
    }


=======
    public String delExpo(@PathVariable int id){
        expoService.delete(id);
        return "redirect:/home";
    }
>>>>>>> adri
}
