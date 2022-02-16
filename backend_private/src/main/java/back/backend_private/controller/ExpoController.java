package back.backend_private.controller;

import back.backend_private.entity.*;
import back.backend_private.repositories.ArtistaCrud;
import back.backend_private.repositories.ExpoCrud;
import back.backend_private.repositories.ObresCrud;
import back.backend_private.services.*;
import org.apache.tomcat.util.http.fileupload.ByteArrayOutputStream;
import back.backend_private.services.ArtistaServei;
import back.backend_private.services.ExpoService;
import back.backend_private.services.GaleriaServei;
import back.backend_private.services.SalesServei;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping()
public class ExpoController {

    @Autowired
    private ExpoService expoService;
    @Autowired
    private ExpoCrud expoCrud;
    @Autowired
    private ArtistaServei artistaServei;
    @Autowired
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
    @Autowired
    GaleriaServei galeriaServei;
    @Autowired
    SalesServei salesServei;
    @Autowired
    SessioService sessioService;

    @GetMapping("/expo/{id}/{idGaleria}")
    public String perfilExpo(@PathVariable int id, @PathVariable int idGaleria, ModelMap model, HttpServletRequest request){
        Usuaris user = (Usuaris) request.getSession().getAttribute("session");
        model.addAttribute("user",user);
        List <Artista> art = artistaServei.read();
        model.addAttribute("artistes",art);
        List<Obres> obrEx = obresCrud.findAllByExpo(expoService.findById(id));
        model.addAttribute("obresEx",obrEx);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        Artista artista = new Artista();
        model.addAttribute("artista",artista);
        Galeria galeria = galeriaServei.findById(idGaleria);
        model.addAttribute("galeria",galeria);
        Sales sala = salesServei.findSalaById(expo.getIdSala());
        model.addAttribute("sala",sala);
        return "perfilExpo";
    }

    @GetMapping("/expo/{id}/{idGaleria}/{idArtista}")
    public String perfilExpoArt(@PathVariable int id, @PathVariable int idArtista, @PathVariable int idGaleria,
                                ModelMap model, HttpServletRequest request){
        model.clear();
        Usuaris user = (Usuaris) request.getSession().getAttribute("session");
        model.addAttribute("user",user);
        List<Genere> generePare = genereServei.list();
        model.addAttribute("generePare",generePare);
        List<Genere> genereFill = genereServei.llistatArtFills();
        model.addAttribute("genereFill",genereFill);
        List <Artista> art = artistaServei.read();
        Galeria galeria = galeriaServei.findById(idGaleria);
        model.addAttribute("galeria",galeria);
        model.addAttribute("artistes",art);
        Exposicio expo = expoService.findById(id);
        model.addAttribute("expo",expo);
        Sales sala = salesServei.findSalaById(expo.getIdSala());
        model.addAttribute("sala",sala);
        List<Obres> obrEx = obresCrud.findAllByExpo(expoService.findById(id));
        model.addAttribute("obresEx",obrEx);
        List<Obres> obr = fetaService.filtrarObres(idArtista);
        model.addAttribute("obres",obr);
        Artista artista = artistaServei.findById(idArtista);
        model.addAttribute("artista",artista);

        return "perfilExpo";
    }

    @PostMapping("/{id}/addArtista/{idGaleria}")
    public String addArtista(@RequestParam String nom,@PathVariable int id,@PathVariable int idGaleria){
        artistaServei.create(nom);
        return "redirect:/expo/"+id+"/"+idGaleria;
    }

    @GetMapping("/{idExpo}/delArtista/{id}")
    public String delArtista(@PathVariable int idExpo, @PathVariable int id){
        artistaServei.delete(id);
        return "redirect:/expo/"+idExpo;
    }

    @PostMapping("/updateExpo/{idGaleria}/{idExpo}")
    public String updateExpo(@PathVariable int idGaleria, @PathVariable int idExpo,@RequestParam String nomE,@RequestParam String descripcio){
        Exposicio expo = expoService.findById(idExpo);
        expo.setNom(nomE);
        expo.setDescripcio(descripcio);
        expoCrud.save(expo);
        return "redirect:/expo/"+idExpo+"/"+idGaleria;
    }

    @GetMapping("/{idExpo}/obres/{idGaleria}/{idArtista}")
    public String listObres(@PathVariable int idExpo, @PathVariable int idArtista,@PathVariable int idGaleria, ModelMap model){
        List<Obres> obres = fetaService.filtrarObres(idArtista);
        model.addAttribute("obres",obres);
        return "redirect:/expo/"+idExpo+"/"+idGaleria+"/"+idArtista;
    }

    @PostMapping("/{idExpo}/addObra/{idArtista}/{idGaleria}")
    public String addObra(@PathVariable int idExpo, @PathVariable int idArtista,@PathVariable int idGaleria,
                          @RequestParam("image") MultipartFile img, @RequestParam String titol, @RequestParam int venta,
                          @RequestParam float preu, @RequestParam int pare, @RequestParam int fill) throws IOException {

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
        return "redirect:/expo/"+idExpo+"/"+idGaleria;
    }

    @PostMapping("/addObraEx/{idExpo}/{idArtista}/{idGaleria}")
    public String addObraEx(@PathVariable int idExpo, @PathVariable int idArtista, @PathVariable int idGaleria,@RequestParam int[] check){
        for(int i=0;i<check.length;i++){
            obresServei.addExpo(expoService.findById(idExpo),check[i]);
        }
        return "redirect:/expo/"+idExpo+"/"+idGaleria+"/"+idArtista;
    }

    @GetMapping("/unassignObra/{idExpo}/{idObra}/{idGaleria}")
    public String delObra(@PathVariable int idExpo, @PathVariable int idGaleria, @PathVariable int idObra){
        obresServei.deleteExpo(idObra);
        return "redirect:/expo/"+idExpo+"/"+idGaleria;
    }

    @GetMapping("/addSessio/{idGaleria}/{idSala}/{idExpo}")
    public String addSessio(@PathVariable int idGaleria, @PathVariable int idExpo,@PathVariable int idSala,
                            ModelMap model){
        Exposicio expo = expoService.findById(idExpo);
        model.addAttribute("expo",expo);
        Sales sala = salesServei.findSalaById(idSala);
        model.addAttribute("sala",sala);
        Galeria galeria = galeriaServei.findById(idGaleria);
        model.addAttribute("galeria",galeria);
        return "sessio";
    }

    @PostMapping("/addDate/{idGaleria}/{idSala}/{idExpo}")
    public String addDate(@PathVariable int idExpo,@PathVariable int idGaleria,@PathVariable int idSala,
                          @RequestParam Date start, @RequestParam Date end){
        expoService.addDate(idExpo,start,end);
        return "redirect:/addSessio/"+idGaleria+"/"+idSala+"/"+idExpo;
    }

    @PostMapping("/addTime/{idGaleria}/{idSala}/{idExpo}")
    public String addTime(@PathVariable int idExpo,@PathVariable int idGaleria,@PathVariable int idSala,
                          @RequestParam String tstart, @RequestParam String tend, @RequestParam String nom) throws Exception{
        Exposicio expo = expoService.findById(idExpo);
        String [] str1 = tstart.split("T");
        String [] str2 = tend.split("T");
        Date data = Date.valueOf(str1[0]);
        Time hora_ini = Time.valueOf(str1[1].substring(0,8));
        Time hora_fi = Time.valueOf(str2[1].substring(0,8));
        if(data.after(expo.getData_ini()) && data.before(expo.getData_fi()) || data.equals(expo.getData_ini())){
            sessioService.create(data,hora_ini,hora_fi,nom,idExpo);
        }
        return "redirect:/addSessio/"+idGaleria+"/"+idSala+"/"+idExpo;
    }

    @GetMapping("/comprArt")
    public String comprArt(HttpServletRequest request,ModelMap model){
        Usuaris user = (Usuaris) request.getSession().getAttribute("session");
        model.addAttribute("user",user);
        return "comprArt";
    }

    @GetMapping("/delSessio/{idGaleria}/{idSala}/{idExpo}/{idSessio}")
    public String delSessio(@PathVariable int idExpo,@PathVariable int idGaleria,@PathVariable int idSala,@PathVariable int idSessio){
        sessioService.delete(idSessio);
        return "redirect:/addSessio/"+idGaleria+"/"+idSala+"/"+idExpo;
    }
}