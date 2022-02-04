package back.backend_private.controller;

import back.backend_private.entity.*;
import back.backend_private.repositories.GaleriaCrud;
import back.backend_private.services.ExpoService;
import back.backend_private.services.GaleriaServei;
import back.backend_private.services.SalesServei;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping()

public class SalesController {
    @Autowired
    private GaleriaServei galeriaServei;
    @Autowired
    private GaleriaCrud galeriaCrud;
    @Autowired
    SalesServei salesServei;
    @Autowired
    ExpoService expoService;

    @GetMapping("/sales/{id}")
    public String salesGaleria(@PathVariable int id, ModelMap model, HttpServletRequest request){
        Usuaris user = (Usuaris) request.getSession().getAttribute("session");
        model.addAttribute("user",user);
        Optional<Galeria> g = galeriaCrud.findById(id);
        Galeria galeria = g.get();
        List<Sales> llistatSales = salesServei.findSlesByGaleria(galeria);
        model.addAttribute("sales",llistatSales);
        model.addAttribute("galeria",galeria);
        return "sales";
    }
   @PostMapping("/addSala/{id}")
    public String addSala(@PathVariable int id , @RequestParam String nom , int aforament){
        Optional<Galeria> g = galeriaCrud.findById(id);
        Galeria galeria = g.get();
        salesServei.novaSala(galeria,nom,aforament);
        return "redirect:/sales/"+id;
    }

    @GetMapping("/eliminarSala/{id}/{idSala}")
    public String eliminarSala(@PathVariable int id , @PathVariable int idSala){
        salesServei.eliminarSala(idSala);
        return "redirect:/sales/"+id;
    }
    @GetMapping("/sala/{id}/{idGaleria}")
    public String sala(@PathVariable int id, @PathVariable int idGaleria, ModelMap model,HttpServletRequest request){
        Usuaris user = (Usuaris) request.getSession().getAttribute("session");
        model.addAttribute("user",user);
        Optional<Galeria> g = galeriaCrud.findById(idGaleria);
        Galeria galeria = g.get();
        Sales sala = salesServei.findSalaById(id);
        List<Exposicio> expos = (List<Exposicio>) expoService.available();
        model.addAttribute("list",expos);
        model.addAttribute("sala",sala);
        model.addAttribute("galeria",galeria);
        return "sala";
    }

    @PostMapping("/addExpo/{idSala}/{idGaleria}")
    public String addExpo(@RequestParam String nomE, @PathVariable int idSala, @PathVariable int idGaleria, String descripcio){
        expoService.create(nomE,descripcio, idSala);
        return "redirect:/sala/"+idSala+"/"+idGaleria;
    }

    @GetMapping("/del/{idSala}/{idGaleria}/{id}")
    public String delExpo(@PathVariable int idSala, @PathVariable int idGaleria,@PathVariable int id){
        expoService.delete(id);
        return "redirect:/sala/"+idSala+"/"+idGaleria;
    }

    @PostMapping("/editarSala/{id}/{idGaleria}")
    public String editarSala(@PathVariable int id , @PathVariable int idGaleria , @RequestParam String nom , int aforament){
        salesServei.editarSala(id,nom,aforament);
        return "redirect:/sala/"+id+"/"+idGaleria;
    }
}
