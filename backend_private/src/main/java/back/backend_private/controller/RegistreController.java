package back.backend_private.controller;

import back.backend_private.entity.Poblacio;
import back.backend_private.services.PoblacioServei;
import back.backend_private.services.UsuariServei;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping()
public class RegistreController {
    @Autowired
    private PoblacioServei poblacio;
    @Autowired
    UsuariServei usuariServei;

    @GetMapping("/registre")
    public String registre(ModelMap model){
        List<Poblacio> llistaPoblacions = poblacio.list();
        model.addAttribute("poblacions",llistaPoblacions);
        return "registre";
    }

    @PostMapping("/addPropietari")
    public String addGaleria(@RequestParam String nom, String cognom, String email, int pob, String password){
        Poblacio pobl = poblacio.findById(pob);
        usuariServei.addPropietari(nom,cognom,email,pobl,password);
        return "redirect:/";
    }
}
