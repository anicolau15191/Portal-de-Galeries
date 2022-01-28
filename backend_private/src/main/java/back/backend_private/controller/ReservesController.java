package back.backend_private.controller;

import back.backend_private.entity.*;
import back.backend_private.services.*;
import org.hibernate.procedure.spi.ParameterRegistrationImplementor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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

    @GetMapping("/reserves/{id}")
    public String reserves(@PathVariable int id, ModelMap model){
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        List<Sessio> sesions = sessioService.sessionsForExpo(id);
        model.addAttribute("sesions",sesions);
        return "reserves";
    }

    @GetMapping("/reserves/{idGaleria}/sessio/{idSessio}/entrades")
        public String reservesSessio(@PathVariable int idGaleria,@PathVariable int idSessio, ModelMap model){
        Galeria galeria = galeriaServei.findById(idGaleria);
        List<Usuaris> users = entradaServei.getUsuarisSessio(idSessio);
        model.addAttribute("users",users);
        Sessio sessio = entradaServei.getSesioEntrada(idSessio);
        model.addAttribute("sessio",sessio);
        Exposicio expo = expoService.findById(idGaleria);
        model.addAttribute("expo",expo);
        List<Sessio> sesions = sessioService.sessionsForExpo(idGaleria);
        model.addAttribute("sesions",sesions);
        Sales sala = salesServei.getSala(galeria,expo.getId());
        model.addAttribute("sala",sala);
        return "reserves";
    }



}
