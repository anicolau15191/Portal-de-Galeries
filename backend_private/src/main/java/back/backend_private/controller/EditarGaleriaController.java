package back.backend_private.controller;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Genere;
import back.backend_private.entity.Poblacio;
import back.backend_private.repositories.GaleriaCrud;
import back.backend_private.repositories.GenereCrud;
import back.backend_private.repositories.MediaCrud;
import back.backend_private.services.*;
import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping()
public class EditarGaleriaController {
    @Autowired
    private GaleriaCrud data;
    @Autowired
    private PoblacioServei poblacio;
    @Autowired
    private GaleriaServei galeriaServei;
    @Autowired
    private EspecialitzatServei especialitzatServei;
    @Autowired
    private GenereServei genereServei;
    @Autowired
    private GenereCrud genereCrud;
    @Autowired
    MediaServei mediaServei;

    @GetMapping("/perfil/{id}")
    public String galeria(@PathVariable int id, ModelMap model){
        Optional<Galeria> galeria = data.findById(id);
        Galeria g = galeria.get();
        List<Genere> generes = especialitzatServei.getGeneres(g);
        model.addAttribute("galeria",g);
        model.addAttribute("generes",generes);
        List<Genere> generesFills = especialitzatServei.getGeneresFills(g);
        model.addAttribute("generesFills",generesFills);
        List<Poblacio> llistaPoblacions = poblacio.list();
        model.addAttribute("poblacions",llistaPoblacions);
        List<Genere> tipusArt = genereServei.list();
        model.addAttribute("tipusArt",tipusArt);
        return "perfilGaleria";
    }


    @GetMapping("/editarGaleria/{id}")
    public String editarGaleria(@PathVariable int id, ModelMap model){
        Optional<Galeria> galeria = data.findById(id);
        Galeria g = galeria.get();
        List<Genere> generes = especialitzatServei.getGeneres(g);
        model.addAttribute("galeria",g);
        model.addAttribute("generes",generes);
        List<Genere> generesFills = especialitzatServei.getGeneresFills(g);
        model.addAttribute("generesFills",generesFills);
        List<Poblacio> llistaPoblacions = poblacio.list();
        model.addAttribute("poblacions",llistaPoblacions);
        List<Genere> tipusArt = genereServei.list();
        model.addAttribute("tipusArt",tipusArt);
        List<Genere> allGeneres = genereServei.list();
        model.addAttribute("allGeneres",allGeneres);
        List<Genere> allGeneresFills = genereServei.llistatArtFills();
        model.addAttribute("allGeneresFills",allGeneresFills);
        return "editarGaleria";
    }



    @PostMapping("/imatgesGaleria/{id}/{num}")
    public String imatges(@PathVariable int id, @PathVariable int num, @RequestParam("file")MultipartFile img) throws IOException {

        InputStream is = img.getInputStream();
        String nomImatge = img.getOriginalFilename();

        ByteArrayOutputStream os = new ByteArrayOutputStream();
        byte[] readBuf = new byte[4096];
        while (is.available() > 0) {
            int bytesRead = is.read(readBuf);
            os.write(readBuf, 0, bytesRead);
        }
        // Passam l'arxiu a dins una carpeta
        String ruta = "C://Users//xisca//OneDrive//Documentos//ifc33B//imgGaleria/";
        String fileName = ruta + nomImatge;

        OutputStream outputStream = new FileOutputStream(fileName);
        os.writeTo(outputStream);

        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        mediaServei.addFoto(galeria,nomImatge);
        return "redirect:/perfil/"+id;
    }
    @PostMapping("/editarDescripcio/{id}")
    public String desc(@PathVariable int id , @RequestParam String desc){
        galeriaServei.addDescripcio(desc,id);
        return "redirect:/editarGaleria/"+id;
    }

    @PostMapping("/editarPoblacio/{id}")
    public String editarPoblacio(@PathVariable int id , @RequestParam int pob){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        Poblacio trobada = poblacio.findById(pob);
        galeria.setPoblacio(trobada);
        data.save(galeria);
        return "redirect:/editarGaleria/"+id;
    }

    @PostMapping("/editarNom/{id}")
    public String editarNom(@PathVariable int id , @RequestParam String nom){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setNom(nom);
        data.save(galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @PostMapping("/editarCorreu/{id}")
    public String editarCorreu(@PathVariable int id , @RequestParam String correu){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setEmail(correu);
        data.save(galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @PostMapping("/editarTelefon/{id}")
    public String editarTelefon(@PathVariable int id , @RequestParam String telefon){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setTelefon(telefon);
        data.save(galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @PostMapping("/editarDireccio/{id}")
    public String editarDireccio(@PathVariable int id , @RequestParam String direccio){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setDireccio(direccio);
        data.save(galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @PostMapping("/afegirGenere/{id}")
    public String addArt(@PathVariable int id , @RequestParam int nouArt){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        Optional<Genere> gen = genereCrud.findById(nouArt);
        Genere genere = gen.get();
        especialitzatServei.addNouGenere(genere,galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @PostMapping("/afegirGenereFill/{id}")
    public String addGenere(@PathVariable int id , @RequestParam int nouGenere){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        Optional<Genere> gen = genereCrud.findById(nouGenere);
        Genere genere = gen.get();
        especialitzatServei.addNouGenere(genere,galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @GetMapping ("/eliminarGenere/{id}/{idGenere}")
    public String eliminarGenere(@PathVariable int id , @PathVariable int idGenere){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        Optional<Genere> gen = genereCrud.findById(idGenere);
        Genere genere = gen.get();
        especialitzatServei.deleteGenere(genere,galeria);
        return "redirect:/editarGaleria/"+id;
    }
    @PostMapping("/addCoordenades/{id}")
    public String addCoordenades(@PathVariable int id , @RequestParam String lng, String lat){
        Optional<Galeria> g = data.findById(id);
        Galeria galeria = g.get();
        galeria.setLatitud(lat);
        galeria.setLongitut(lng);
        data.save(galeria);
        return "redirect:/editarGaleria/"+id;
    }

}
