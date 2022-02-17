<?php

namespace App\Http\Controllers;


use App\Models\Exposicio;
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

    public function listFillsByGenere(Genere $genere){
        $listGenereAmbFills =  Genere::where("id_genere2","=",$genere->id_genere)->get();

        return $listGenereAmbFills->toJson();
    }

    public function genereExposicio ($expo){

        return DB::select('select distinct genere.nom from genere,obres,pertany,exposicio where pertany.id_genere = genere.id_genere and genere.id_genere2 is not null
                            and obres.id_expo ='.$expo.' and obres.id_obres = pertany.id_obres');

    }
}
