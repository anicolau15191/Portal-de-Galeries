<?php

namespace App\Http\Controllers;

use App\Models\Exposicio;
use App\Models\Galeria;
use App\Models\Obres;
use App\Models\Sales;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ExposicioController extends Controller
{
    public function getExposicionsSala(Sales $sala){
        $listExposicions = Exposicio::where("id_sala" ,"=",$sala->id_sales)->where("enabled",0)->get();

        return $listExposicions->toJson();
    }

    public function getAllExposicionsGaleria(Galeria $galeria){
        $listExpo = DB::table('exposicio')
            ->join("sales","sales.id_sales","=","exposicio.id_sala")
            ->where("sales.id_galeria","=",$galeria->id_galeria)
            ->where("sales.enabled","=",0)
            ->where("exposicio.enabled","=",0)
            ->where("exposicio.data_fi",">=",Carbon::today())
            ->select('exposicio.id_exposicio','exposicio.nom', 'exposicio.descripcio', 'exposicio.data_ini','exposicio.data_fi')
            ->get();


        return $listExpo;
    }

    public function getExposicio(Exposicio $exposicio){
        $getExposicio = Exposicio::where("id_exposicio" ,"=",$exposicio->id_exposicio)->where("enabled",0)->get();

        return $getExposicio->toJson();
    }

    public function getObresExposicio(Exposicio $exposicio){

        $lisObres = Obres::where("id_expo","=",$exposicio->id_exposicio)->get();

        return$lisObres->toJson();
    }

    public function getFirtsObraExpo(Exposicio $exposicio){
        $obra = Obres::where("id_expo","=",$exposicio->id_exposicio)->first();

        return $obra->toJson();
    }
}
