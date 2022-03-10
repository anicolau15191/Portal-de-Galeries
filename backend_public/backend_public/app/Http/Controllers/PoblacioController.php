<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use App\Models\Poblacio;
use Illuminate\Support\Collection;

class PoblacioController extends Controller
{
    public function listAll(){
        $poblacio = Poblacio::all();

        return $poblacio->toJson();

    }

    public function listAllGaleriesInPOblacio(Poblacio $poblacio){
        $listGaleriesInPoblacio =  Galeria::where("id_poblacio","=",$poblacio->id_poblacio)->where("enabled",0)->get();

        return $listGaleriesInPoblacio->toJson();
    }

    public function poblacioGaleria(Galeria $galeria){
        $poblacio = Poblacio::where("id_poblacio","=",$galeria->id_poblacio)->get();
         return $poblacio->toJson();
    }

}
