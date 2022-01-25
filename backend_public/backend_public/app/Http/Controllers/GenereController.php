<?php

namespace App\Http\Controllers;


use App\Models\Galeria;
use App\Models\Genere;

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
        $galeria = Galeria::find($id);
        $g = $galeria->genere;
        $fills = Genere::all();
        $n = $fills->diff(Genere::where("id_genere2","=",1)->get());
        $value = $g->groupBy('id_genere');
        //return $g->diff(Genere::whereNotNull('id_genere2')->get());

        return $value;


    }

}
