<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use App\Models\Poblacio;

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

}
