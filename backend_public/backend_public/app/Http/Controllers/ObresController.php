<?php

namespace App\Http\Controllers;

use App\Models\Obres;
use Illuminate\Support\Facades\DB;

class ObresController extends Controller
{
    public function getAutorsObra($idObra){
        return  DB::select('select distinct artista.nom from artista,obres,feta where feta.id_obra ='.$idObra.' and feta.id_artista = artista.id_artista');

    }

    public function getObra(Obres $obra){
        return $obra->toJson();
    }

    public function getGenereObra(Obres $obra){

        $genere = DB::table('genere')
            ->join('pertany', 'pertany.id_genere', '=', 'genere.id_genere')
            ->where("pertany.id_obres","=",$obra->id_obres)
            ->whereNotNull('genere.id_genere2')
            ->select('genere.nom')
            ->get();

        return $genere;
    }
}
