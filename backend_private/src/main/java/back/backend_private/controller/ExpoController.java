package back.backend_private.controller;

import back.backend_private.entity.Artista;
import back.backend_private.entity.Exposicio;
<<<<<<< HEAD
import back.backend_private.entity.Genere;
import back.backend_private.entity.Obres;
import back.backend_private.repositories.ArtistaCrud;
import back.backend_private.repositories.ObresCrud;
import back.backend_private.services.*;
import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
=======
import back.backend_private.entity.Galeria;
import back.backend_private.entity.Sales;
import back.backend_private.services.ArtistaServei;
import back.backend_private.services.ExpoService;
import back.backend_private.services.GaleriaServei;
import back.backend_private.services.SalesServei;
>>>>>>> xisca
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
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
<<<<<<< HEAD
    private FetaService fetaService;
    @Autowired
    private ObresServei obresServei;
    @Autowired
    private ObresCrud obresCrud;
    @Autowired
    private GenereServei genereServei;
    @Autowired
    private PertanyServei pertanyServei;
    @Autowired
    private ArtistaCrud artistaCrud;
    @Autowired
    private MediaServei mediaServei;

    @GetMapping("/expo/{id}")
    public String perfilExpo(@PathVariable int id, ModelMap model){
        List<Genere> generePare = genereServei.list();
        model.addAttribute("generePare",generePare);
        List<Genere> genereFill = genereServei.llistatArtFills();
        model.addAttribute("genereFill",genereFill);
=======
    GaleriaServei galeriaServei;
    @Autowired
    SalesServei salesServei;

    @GetMapping("/expo/{id}/{idGaleria}")
    public String perfilExpo(@PathVariable int id,@PathVariable int idGaleria, ModelMap model){
>>>>>>> xisca
        List <Artista> art = artistaServei.read();
        model.addAttribute("artistes",art);
        List<Obres> obrEx = obresCrud.findAllByExpo(expoService.findById(id));
        model.addAttribute("obresEx",obrEx);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
<<<<<<< HEAD
        Artista artista = new Artista();
        model.addAttribute("artista",artista);
=======
        Galeria galeria = galeriaServei.findById(idGaleria);
        model.addAttribute("galeria",galeria);
        Sales sala = salesServei.findSalaById(expo.getIdSala());
        model.addAttribute("sala",sala);
>>>>>>> xisca
        return "perfilExpo";
    }

    @GetMapping("/expo/{id}/{idArtista}")
    public String perfilExpoArt(@PathVariable int id, @PathVariable int idArtista, ModelMap model){
        model.clear();
        List<Genere> generePare = genereServei.list();
        model.addAttribute("generePare",generePare);
        List<Genere> genereFill = genereServei.llistatArtFills();
        model.addAttribute("genereFill",genereFill);
        List <Artista> art = artistaServei.read();
        model.addAttribute("artistes",art);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        List<Obres> obrEx = obresCrud.findAllByExpo(expoService.findById(id));
        model.addAttribute("obresEx",obrEx);
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
    public String delArtista(@PathVariable int idExpo, @PathVariable int id){
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
    public String addObra(@PathVariable int idExpo, @PathVariable int idArtista, @RequestParam("image") MultipartFile img, @RequestParam String titol, @RequestParam int venta, @RequestParam float preu, @RequestParam int pare, @RequestParam int fill) throws IOException {
        int id = obresServei.create(titol,venta,preu);
        InputStream is = img.getInputStream();

        ByteArrayOutputStream os = new ByteArrayOutputStream();
        byte[] readBuf = new byte[4096];
        while (is.available() > 0) {
            int bytesRead = is.read(readBuf);
            os.write(readBuf, 0, bytesRead);
        }

        String uploadDir = "C://imggaleria/imgObres/";
        String fileName = Integer.toString(id);

        mediaServei.saveFile(uploadDir,fileName,img);
        fetaService.enllaçarObra(id,idArtista);
        pertanyServei.assignarGenere(pare,fill,id);
        return "redirect:/expo/"+idExpo;
    }

    @PostMapping("/addObraEx/{idExpo}/{idArtista}")
    public String addObraEx(@PathVariable int idExpo, @PathVariable int idArtista, @RequestParam int[] check){
        Obres obra = new Obres();
        for(int i=0;i<check.length;i++){
            obresServei.addExpo(expoService.findById(idExpo),check[i]);
        }
        return "redirect:/expo/"+idExpo+"/"+idArtista;
    }

    @GetMapping("/unassignObra/{idExpo}/{idArtista}/{idObra}")
    public String delObra(@PathVariable int idExpo, @PathVariable int idArtista, @PathVariable int idObra){
        obresServei.deleteExpo(idObra);
        return "redirect:/expo/"+idExpo+"/"+idArtista;
    }
}