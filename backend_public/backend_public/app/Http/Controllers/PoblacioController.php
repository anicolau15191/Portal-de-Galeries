<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use App\Models\Poblacio;

class PoblacioController extends Controller
{
    public function listAll(){
        $poblacio = Poblacio::all();

        return $poblacio->toJson();

    }

}
