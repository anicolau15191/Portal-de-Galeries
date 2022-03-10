<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Genere extends Model
{
    protected $table = 'genere';

    public $timestamps = false;

    protected $primaryKey = 'id_genere';

    public function genere(){

        return $this->hasMany(Genere::class);
    }

    public function genereFill(){

        return $this->hasMany(Genere::class)->with('id_genere2');
    }

    public function galeria(){

        return $this->belongsToMany(Galeria::class,'especialitzat','id_galeria','id_genere');
    }

    public function obres(){

        return $this->belongsToMany(Galeria::class,'pertany','id_obra','id_genere');
    }
}
