<?php

namespace App\Http\Controllers;
use App\Models\Usuari;
use App\Models\Visitant;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Exposicio;
use App\Models\Galeria;
use App\Models\Obres;
use App\Models\Sales;
use App\Models\Sessio;
use Carbon\Carbon;
use App\Models\Entrada;
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

    public function getSessions(Exposicio $exposicio, Request $request){
        $dia = $request->input('dia');
        $sesions = Sessio::select('*')
            ->where("id_expo","=",$exposicio->id_exposicio)
            ->where("data","=",$dia)
            ->get();

        return $sesions;
    }

    public function insertEntrada(Request $request){
        $sessio = $request->input("id_sessio");
        $usuari = $request->input("id_usuari");
        $num = DB::table("entrada")
            ->where("id_sessio","=",$sessio)
            ->count();
        $limit = Sales::select("aforament")
            ->join("exposicio","sales.id_sales","=","exposicio.id_sala")
            ->join("sessio","exposicio.id_exposicio","=","sessio.id_expo")
            ->where("id_sessio","=",$sessio)
            ->first();
        if($limit->aforament>$num){
            $entrada = new Entrada;
            $entrada->id_visitant = $usuari;
            $entrada->id_sessio = $sessio;
            $entrada->save();
            return 1;
        }else{
            return 0;
        }
    }

    public function getCalendari(){
        $expos = Exposicio::select("data_ini as start", "data_fi as end", "nom as title")
            ->where("enabled","=",0)
            ->get();
        return $expos->toJson();
    }

    public function register(Request $request){
        $usuari = new Usuari();

        $usuari->nom = $request->input("nom");
        $usuari->cognoms = $request->input("last");
        $usuari->id_poblacio = $request->input("pob");
        $usuari->email = $request->input("email");
        $usuari->password = Hash::make($request->input("pass"));
        $usuari->save();

        $visitant = new Visitant();
        $id = Usuari::select("id_usuaris")
            ->where("nom","=",$usuari->nom)
            ->where("cognoms","=",$usuari->cognoms)
            ->where("id_poblacio","=",$usuari->id_poblacio)
            ->where("email","=",$usuari->email)
            ->where("password","=",$usuari->password)
            ->first();

        $visitant->id_visitant = (int) $id->id_usuaris;
        $visitant->save();
    }

    public function login(Request $request){
        $email = $request->input("email");
        $password = $request->input("pass");
        $user = Usuari::select("*")
            ->where("email","=",$email)
            ->first();
        if(!Hash::check($password,$user->password)){
            return 0;
        }else{
            return $user;
        }
    }
}
