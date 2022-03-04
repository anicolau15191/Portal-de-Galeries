<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use App\Models\Poblacio;
use http\Env\Response;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\File;

class GaleriaController extends Controller
{

    public function listAllActive(){
        $galeries = Galeria::where('enabled',0)
            ->leftjoin('especialitzat','galeria.id_galeria','=','especialitzat.id_galeria')
            ->select('galeria.id_galeria','galeria.nom','galeria.id_poblacio',DB::raw('GROUP_CONCAT(especialitzat.id_genere) as generes'))
            ->groupBy('galeria.id_galeria','galeria.nom','galeria.id_poblacio')
            ->get();

        return $galeries->toJson();
    }

    public function listByPoblacio(Poblacio $poblacio){
        $galeries = Galeria::where('id_poblacio',$poblacio->id_poblacio)->get();
        return $galeries->toJson();
    }

    public function getGaleria(Galeria $galeria){
        return $galeria->toJson();
    }

    public function getCoordenades(Galeria $galeria){

        $coordenades = Galeria::where("id_galeria","=",$galeria->id_galeria)->get();

        return $coordenades->toJson();
    }

    public function fotos($id,$filename){
        $absolute_path = realpath("/imggaleria/".$id."/");
        $path = $absolute_path . '\\' . $filename;

        $file = \Illuminate\Support\Facades\File::get($path);
        $type = \Illuminate\Support\Facades\File::mimeType($path);

        $response = \Illuminate\Support\Facades\Response::make($file,200);
        $response->header("Content-type",$type);

        return $response;
    }


}
