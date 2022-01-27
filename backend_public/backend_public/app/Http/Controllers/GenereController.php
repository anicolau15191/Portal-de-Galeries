<?php

namespace App\Http\Controllers;


use App\Models\Galeria;
use App\Models\Genere;
use Illuminate\Support\Facades\DB;


class GenereController extends Controller
{
    public function getGeneresPare(){

        $generes = Genere::where('id_genere2',null)->get();

        return $generes->toJson();
    }

    public function getGeneresFills(){

        $generes = Genere::whereNotNull('id_genere2')->get();

        return $generes->toJson();
    }

    public function getAllGeneresByGaleria($id){
        $galeria = Galeria::find($id);
        $g = $galeria->genere;
        return $g->toJson();
    }

    public function getAllGeneresFillsByGaleria($id){

        $fills = DB::table('genere')
            ->join('especialitzat', 'especialitzat.id_genere', '=', 'genere.id_genere2')
            ->where("especialitzat.id_galeria","=",$id)
            ->select('genere.nom', 'genere.id_genere', 'genere.id_genere2')
            ->get();


        return $fills;

    }

}
