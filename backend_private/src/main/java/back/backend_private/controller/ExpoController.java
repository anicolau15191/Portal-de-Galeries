package back.backend_private.controller;

import back.backend_private.entity.Artista;
import back.backend_private.entity.Exposicio;
import back.backend_private.services.ArtistaServei;
import back.backend_private.services.ExpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping()
public class ExpoController {

    @Autowired
    private ExpoService expoService;
    @Autowired
    private ArtistaServei artistaServei;

    @GetMapping("/expo/{id}")
    public String perfilExpo(@PathVariable int id, ModelMap model){
        List <Artista> art = artistaServei.read();
        model.addAttribute("artistes",art);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        return "perfilExpo";
    }
}