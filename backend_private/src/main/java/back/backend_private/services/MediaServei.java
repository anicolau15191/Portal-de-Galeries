package back.backend_private.services;

import back.backend_private.entity.Galeria;
import back.backend_private.entity.Media;
import back.backend_private.entity.Poblacio;
import back.backend_private.repositories.MediaCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.*;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

@Service
public class MediaServei {
    @Autowired
    MediaCrud mediaCrud;

    public Media addFoto( Galeria galeria, String nom) {
        Media media = new Media();
        media.setGaleria(galeria);
        media.setNom(nom);

        mediaCrud.save(media);
        return media;
    }
    public void saveFile(String uploadDir, String fileName, MultipartFile multipartFile) throws IOException {

        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        try (InputStream inputStream = multipartFile.getInputStream()) {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save image file: " + uploadDir +" --- "+ fileName, ioe);
        }
    }

    public List<Media> getImgGaleria(Galeria galeria){
        List<Media> allImatges = (List<Media>) mediaCrud.findAll();
        List<Media> imatges = new ArrayList<>();

        for (int i = 0; i<allImatges.size() ; i++){
            if (allImatges.get(i).getGaleria().idGaleria == galeria.idGaleria){
                imatges.add(allImatges.get(i));
            }
        }
        return imatges;
    }


}
