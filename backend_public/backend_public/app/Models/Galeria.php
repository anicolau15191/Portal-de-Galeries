<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galeria extends Model
{

    protected $table = 'galeria';

    public $timestamps = false;

    protected $primaryKey = 'id_galeria';

    public function poblacio(){

        return $this->belongsTo(Poblacio::class);

    }

    public function genere(){

        return $this->belongsToMany(Genere::class,'especialitzat','id_galeria','id_genere');
    }
}
