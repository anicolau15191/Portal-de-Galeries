package back.backend_private.controller;

import back.backend_private.entity.*;
import back.backend_private.repositories.GaleriaCrud;
import back.backend_private.services.*;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("")

public class ReservesController {
    @Autowired
    private ExpoService expoService;
    @Autowired
    private SessioService sessioService;
    @Autowired
    EntradaServei entradaServei;
    @Autowired
    SalesServei salesServei;
    @Autowired
    GaleriaServei galeriaServei;
    @Autowired
    GaleriaCrud galeriaCrud;

    @GetMapping("/reserves/{id}/{idGaleria}")
    public String reserves(@PathVariable int id,@PathVariable int idGaleria, ModelMap model){
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        List<Sessio> sesions = sessioService.sessionsForExpo(id);
        model.addAttribute("sesions",sesions);
        Sales sala = salesServei.getSala(id);
        model.addAttribute("sala",sala);
        Galeria galeria = galeriaServei.findById(idGaleria);
        model.addAttribute("galeria",galeria);
        return "reserves";
    }

    @GetMapping("/reserves/{idGaleria}/{idExpo}/sessio/{idSessio}/entrades")
        public String reservesSessio(@PathVariable int idGaleria,@PathVariable int idExpo,@PathVariable int idSessio, ModelMap model){
        List<Usuaris> users = entradaServei.getUsuarisSessio(idSessio);
        model.addAttribute("users",users);
        Sessio sessio = entradaServei.getSesioEntrada(idSessio);
        model.addAttribute("sessio",sessio);
        Exposicio expo = expoService.findById(idExpo);
        model.addAttribute("expo",expo);
        List<Sessio> sesions = sessioService.sessionsForExpo(idExpo);
        model.addAttribute("sesions",sesions);
        Sales sala = salesServei.getSala(expo.getId());
        model.addAttribute("sala",sala);
        Galeria galeria = galeriaServei.findById(idGaleria);
        model.addAttribute("galeria",galeria);
        return "reserves";
    }



}
