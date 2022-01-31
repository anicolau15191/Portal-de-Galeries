package back.backend_private.controller;

import back.backend_private.entity.Artista;
import back.backend_private.entity.Exposicio;
import back.backend_private.entity.Genere;
import back.backend_private.entity.Obres;
import back.backend_private.services.ArtistaServei;
import back.backend_private.services.ExpoService;
import back.backend_private.services.FetaService;
import back.backend_private.services.GenereServei;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping()
public class ExpoController {

    @Autowired
    private ExpoService expoService;
    @Autowired
    private ArtistaServei artistaServei;
    @Autowired
    private FetaService fetaService;
    @Autowired
    private GenereServei genereServei;

    @GetMapping("/expo/{id}")
    public String perfilExpo(@PathVariable int id, ModelMap model){
        List<Genere> generes = genereSe
        List <Artista> art = artistaServei.read();
        model.addAttribute("artistes",art);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        Artista artista = new Artista();
        model.addAttribute("artista",artista);
        return "perfilExpo";
    }

    @GetMapping("/expo/{id}/{idArtista}")
    public String perfilExpoArt(@PathVariable int id, @PathVariable int idArtista, ModelMap model){
        model.clear();
        List <Artista> art = artistaServei.read();
        model.addAttribute("artistes",art);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        List<Obres> obr = fetaService.filtrarObres(idArtista);
        model.addAttribute("obres",obr);
        Artista artista = artistaServei.findById(idArtista);
        model.addAttribute("artista",artista);
        return "perfilExpo";
    }

    @PostMapping("/{id}/addArtista")
    public String addArtista(@RequestParam String nom,@PathVariable int id){
        artistaServei.create(nom);
        return "redirect:/expo/"+id;
    }

    @GetMapping("/{idExpo}/delArtista/{id}")
    public String addArtista(@PathVariable int idExpo, @PathVariable int id){
        artistaServei.delete(id);
        return "redirect:/expo/"+idExpo;
    }

    @GetMapping("/{idExpo}/obres/{idArtista}")
    public String listObres(@PathVariable int idExpo, @PathVariable int idArtista, ModelMap model){
        List<Obres> obres = fetaService.filtrarObres(idArtista);
        model.addAttribute("obres",obres);
        return "redirect:/expo/"+idExpo+"/"+idArtista;
    }

    @PostMapping("/{idExpo}/addObra/{idArtista}")
    public String addObra(@PathVariable int idExpo,@PathVariable int idArtista){

        return "redirect:/expo/"+idExpo;
    }
}