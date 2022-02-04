<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class ObresController extends Controller
{
    public function getAutorsObra($idArtista){
        $artista = DB::table('artista')
            ->join('feta', 'feta.id_obra', '=', 'obres.id_obres')
            ->where("feta.id_artista","=",$idArtista)
            ->select('artista.nom')
            ->get();


        return $artista->toJson();
    }
}
