<?php

namespace App\Http\Controllers;

use App\Models\Obres;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Fragment\FragmentUriGenerator;

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

    public  function  p(){
        $idProvisional = DB::select("select obres.id_obres from obres where obres.codi_ordre =1234");
        $idObra =  $idProvisional[0]->id_obres;



        return $idObra;
    }

    public function fotosObres($id){
        $path = realpath("/imggaleria/imgObres/".$id);


        $file = \Illuminate\Support\Facades\File::get($path);
        $type = \Illuminate\Support\Facades\File::mimeType($path);

        $response = \Illuminate\Support\Facades\Response::make($file,200);
        $response->header("Content-type",$type);

        return $response;
    }
}
