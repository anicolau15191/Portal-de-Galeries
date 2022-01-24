package back.backend_private.controller;

import back.backend_private.entity.Exposicio;
import back.backend_private.services.ExpoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping()
public class HomeController {

    @Autowired
    private ExpoService expoService;

    @GetMapping("/expo")
    public String getHome(ModelMap model){
        List<Exposicio> expos = (List<Exposicio>) expoService.read();
        model.addAttribute("list",expos);
        return "home";
    }

    @PostMapping("/add")
    public String addExpo(@RequestParam String nom){
        Exposicio expo = expoService.initExpo(nom,1);
        return "redirect:/home";
    }

    @GetMapping("/expo/del/{id}")
    public String delExpo(@PathVariable int id){
        expoService.delete(id);
        return "redirect:/home";
    }
}
