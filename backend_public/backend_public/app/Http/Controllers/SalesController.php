<?php

namespace App\Http\Controllers;

use App\Models\Sales;

class SalesController extends Controller
{
    public function getSalaId($id){
        $sala = Sales::where("id_sales" ,"=",$id);
        return $sala;
    }
}
