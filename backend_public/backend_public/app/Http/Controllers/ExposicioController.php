<?php

namespace App\Http\Controllers;

use App\Models\Exposicio;
use App\Models\Obres;
use App\Models\Sales;

class ExposicioController extends Controller
{
    public function getExposicionsSala(Sales $sala){
        $listExposicions = Exposicio::where("id_sala" ,"=",$sala->id_sales)->where("enabled",0)->get();

        return $listExposicions->toJson();
    }

    public function getExposicio(Exposicio $exposicio){
        $getExposicio = Exposicio::where("id_exposicio" ,"=",$exposicio->id_exposicio)->where("enabled",0)->get();

        return $getExposicio->toJson();
    }

    public function getObresExposicio(Exposicio $exposicio){

        $lisObres = Obres::where("id_expo","=",$exposicio->id_exposicio)->where("venut",0)->get();

        return$lisObres->toJson();
    }

    public function getAutorsExposicio(Exposicio $exposicio){

        $listObres = $this->getObresExposicio($exposicio);

        $lenght = count($listObres);

        for ($i = 0; $i<$lenght;$i++){
            echo $i;
        }
    }
}
