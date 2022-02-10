<?php

namespace App\Http\Controllers;

use App\Models\Exposicio;
use Illuminate\Support\Facades\DB;

class ArtistaController extends Controller
{
    public function getAutorsExposicio(Exposicio $exposicio){
        return DB::select("select distinct artista.nom from artista,feta,obres
                        where feta.id_artista = artista.id_artista
                        and feta.id_obra = obres.id_obres and obres.id_expo =".$exposicio->id_exposicio);
    }
}
