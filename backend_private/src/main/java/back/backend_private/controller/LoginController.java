package back.backend_private.controller;

import back.backend_private.entity.Usuaris;
import back.backend_private.services.UsuariServei;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping()
public class LoginController {
    @Autowired
    UsuariServei usuariServei;

    @GetMapping("/")
    public String login(){
        return "login";
    }

    @PostMapping("/login")
    public String validar(@RequestParam String email, String password, HttpSession session){
        Usuaris usuari = usuariServei.findByEmail(email);
        if (BCrypt.checkpw(password, usuari.getPassword())) {
            session.setAttribute("session",usuari);
            return "redirect:/home";
        }else{
            return "redirect:/";
        }

        //return "/home";
    }
}
