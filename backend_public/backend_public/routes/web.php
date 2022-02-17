<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GaleriaController;
use App\Http\Controllers\PoblacioController;
use App\Http\Controllers\GenereController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\ExposicioController;
use App\Http\Controllers\ObresController;
use App\Http\Controllers\ArtistaController;
use App\Models\Galeria;
use App\Models\Poblacio;
use App\Models\Genere;
use App\Models\Sales;
use App\Models\Exposicio;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|

Route::get('/galeries/{galeria}/calendari'); // llistat de exposicions de totes ses galeries
Route::get('/galeries/{galeria}/exposicions/{exposicio}/sessions'); // sesions de exposicio
Route::post('/galeries/{galeria}/exposicions/{exposicio}/sessions/{sessio}/entrada'); // reserva a sa sesio

Route::get('/artistes/{artista}/obres'); // llistat totes ses obres per artista
Route::get('/generes/{genere}/obres'); // llistat obres per genere

Route::get('/register');// registre

Route::get('/login'); // iniciar sesio
Route::post('/logout'); // sortir de sa sesio

Route::get('/perfil/{user}'); // llistar informacio de l'usurai
Route::post('/perfil/{user}/entrades'); // llistat totes ses entrades usuari
Route::post('/perfil/{user}/editar'); // editar informacio l'usuari

*/

Route::get('/galeries', [GaleriaController::class,'listAllActive']);

Route::get('/galeries/{galeria}', [GaleriaController::class,'getGaleria']);

Route::get('/galeries/{galeria}/coordenades', [GaleriaController::class,'getCoordenades']);

Route::get('/galeries/{galeria}/generes', [GenereController::class,'getAllGeneresByGaleria']);

Route::get('/galeries/{galeria}/subgeneres', [GenereController::class,'getAllGeneresFillsByGaleria']);

Route::get('/galeries/{galeria}/sales', [SalesController::class,'getSalesGaleria']);

Route::get('/sales/{sala}', [SalesController::class,'getSalaId']);

Route::get('/sales/{sala}/exposicions', [ExposicioController::class,'getExposicionsSala']);

Route::get('/galeries/{galeria}/exposicions', [ExposicioController::class,'getAllExposicionsGaleria']);

Route::get('exposicions/{exposicio}', [ExposicioController::class,'getExposicio']);

Route::get('exposicions/{exposicio}/autors', [ArtistaController::class,'getAutorsExposicio']);

Route::get('exposicions/{exposicio}/primeraObra', [ExposicioController::class,'getFirtsObraExpo']);

Route::get('exposicions/{exposicio}/obres',[ExposicioController::class,'getObresExposicio']);

Route::get('/poblacio', [PoblacioController::class,'listAll']);

Route::get('/galeria/{galeria}/poblacio', [PoblacioController::class,'poblacioGaleria']);

Route::get('/poblacio/{poblacio}/galeries', [PoblacioController::class,'listAllGaleriesInPOblacio']);

Route::get('/generes', [GenereController::class,'getGeneresPare']);

Route::get('/generes/subgeneres', [GenereController::class,'getGeneresFills']);

Route::get('/exposicio/{exposicio}/genere', [GenereController::class,'genereExposicio']);

Route::get('/generes/subgeneres', [GenereController::class,'getGeneresFills']);

Route::get('/obres/{obra}', [ObresController::class,'getAutorsObra']);

Route::get('/obres/{obra}/info', [ObresController::class,'getObra']);

Route::get('/obres/{obra}/genere', [ObresController::class,'getGenereObra']);





