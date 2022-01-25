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
public class ExpoController {

    @Autowired
    private ExpoService expoService;

    @GetMapping("/expo")
    public String getExpo(ModelMap model){
        List<Exposicio> expos = (List<Exposicio>) expoService.read();
        model.addAttribute("list",expos);
        return "expo";
    }

    @PostMapping("/add")
    public String addExpo(@RequestParam String nom){
        Exposicio expo = expoService.initExpo(nom,1);
        return "redirect:/expo";
    }

    @GetMapping("/del/{id}")
    public String delExpo(@PathVariable int id){
        expoService.delete(id);
        return "redirect:/expo";
    }
}