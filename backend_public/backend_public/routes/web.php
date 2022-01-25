<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GaleriaController;
use App\Http\Controllers\PoblacioController;
use App\Http\Controllers\GenereController;
use App\Models\Galeria;
use App\Models\Poblacio;
use App\Models\Genere;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|

Route::get('/galeries'); //listat galeries --> OK
Route::get('/galeries/{galeria}'); //info galeria -->OK
Route::get('/galeries/{galeria}/especialitzat'); //llistat de galeria per genere
Route::get('/galeries/{galeria}/calendari'); // llistat de exposicions de totes ses galeries
Route::get('/galeries/{galeria}/exposicions'); // //llistat exposiciond de sa galeria
Route::get('/galeries/{galeria}/exposicions/{exposicio}/horari'); // horari de l'exposicio
Route::get('/galeries/{galeria}/exposicions/{exposicio}/obra'); // llistat de ses obres de sa exposicio
Route::get('/galeries/{galeria}/exposicions/{exposicio}/artistes'); // llistat artistes exposicio
Route::get('/galeries/{galeria}/exposicions/{exposicio}/sessions'); // sesions de exposicio
Route::post('/galeries/{galeria}/exposicions/{exposicio}/sessions/{sessio}/entrada'); // reserva a sa sesio
Route::get('/galeries/{galeria}/sales'); // llistat de sales
Route::get('/galeries/{galeria}/sales/{sala}'); // informacio sala galeria

Route::get('/artistes/{artista}/obres'); // llistat totes ses obres per artista
Route::get('/generes/{genere}/obres'); // llistat obres per genere

Route::get('/register');// registre

Route::get('/login'); // iniciar sesio
Route::post('/logout'); // sortir de sa sesio

Route::get('/perfil/{user}'); // llistar informacio de l'usurai
Route::post('/perfil/{user}/entrades'); // llistat totes ses entrades usuari
Route::post('/perfil/{user}/editar'); // editar informacio l'usuari

Route::get('/poblacio/llistar'); // llistar totes ses poblacions -->OK
Route::get('/poblacio/{poblacio}'); // llistar totes ses galeries de sa poblacio -->OK

Route::get('/propietari'); // llistat propietaris
Route::get('/generes'); // llistat de generes -->OK
Route::get('/generes/{genere}/subgeneres');// llistat de subgeneres del genere -->OK

*/

Route::get('/galeries', [GaleriaController::class,'listAllActive']); // llistat galeries actives
Route::get('/galeries/{galeria}',function (Galeria $galeria){
    return $galeria->toJson();
});
Route::get('//galeries/{galeria}/generes', [GenereController::class,'getAllGeneresByGaleria']);
Route::get('//galeries/{galeria}/subgeneres', [GenereController::class,'getAllGeneresFillsByGaleria']);

Route::get('/poblacio', [PoblacioController::class,'listAll']);
Route::get('/poblacio/{poblacio}/galeries',function (Poblacio $poblacio){

    $listGaleriesInPoblacio =  Galeria::where("id_poblacio","=",$poblacio->id_poblacio)->where("enabled",0)->get();

    return $listGaleriesInPoblacio->toJson();
});

Route::get('/generes', [GenereController::class,'getGeneresPare']);
Route::get('/generes/subgeneres', [GenereController::class,'getGeneresFills']);
Route::get('/generes/{genere}/subgeneres',function (Genere $genere){

    $listGenereAmbFills =  Genere::where("id_genere2","=",$genere->id_genere)->get();

    return $listGenereAmbFills->toJson();
});



