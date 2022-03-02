<?php

namespace App\Http\Controllers;

use App\Models\Exposicio;
use App\Models\Galeria;
use App\Models\Obres;
use App\Models\Sales;
use App\Models\Sessio;
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
            ->orderBy('exposicio.data_ini','ASC')
            ->get();

        return $listExpo;
    }

    public function getExposicio(Exposicio $exposicio){
        $getExposicio = Exposicio::where("id_exposicio" ,"=",$exposicio->id_exposicio)->where("enabled",0)->get();

        return $getExposicio->toJson();
    }

    public function getExposicio1(Exposicio $exposicio){
        $getExposicio = Exposicio::where("id_exposicio" ,"=",$exposicio->id_exposicio)->where("enabled",0)->get();

        return $getExposicio[0]->toJson();
    }

    public function getObresExposicio(Exposicio $exposicio){

        $lisObres = Obres::where("id_expo","=",$exposicio->id_exposicio)->get();

        return$lisObres->toJson();
    }

    public function getFirtsObraExpo(Exposicio $exposicio){
        $obra = Obres::where("id_expo","=",$exposicio->id_exposicio)->first();

        return $obra->toJson();
    }

    public function getDies(Exposicio $exposicio){
        $dates = Exposicio::select('exposicio.data_ini','exposicio.data_fi')
            ->where("id_exposicio","=",$exposicio->id_exposicio)
            ->get();
        return $dates[0];
    }

    public function getSessions(Exposicio $exposicio){
        $sesions = Sessio::select('*')
            ->where("id_expo","=","17")
            ->get();
        return $sesions;
    }
}
