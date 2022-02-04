<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use App\Models\Poblacio;

class GaleriaController extends Controller
{

    public function listAllActive(){
        $galeries = Galeria::where('enabled',0)
            ->get();

        return $galeries->toJson();
    }

    public function getGaleria(Galeria $galeria){
        return $galeria->toJson();
    }


}
