<?php

namespace App\Http\Controllers;

use App\Models\Exposicio;
use App\Models\Galeria;
use App\Models\Sales;

class SalesController extends Controller
{
    public function getSalaId($id){
        $sala = Sales::where("id_sales" ,"=",$id);
        return $sala;
    }

    public function getSalesGaleria(Galeria $galeria){
        $listSalesGaleria = Sales::where('id_galeria',"=",$galeria->id_galeria)->where("enabled",0)->get();

        return $listSalesGaleria->toJson();
    }

}
