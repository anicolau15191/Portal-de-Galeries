<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Obres extends Model
{
    protected $table = 'obres';
    public $timestamps = false;
    protected $primaryKey = 'id_obres';

    public function artista(){

        return $this->belongsToMany(Galeria::class,'feta','id_obra','id_artista');
    }

    public function exposicio(){

        return $this->belongsTo(Exposicio::class);
    }

    public function genere(){

        return $this->belongsToMany(Genere::class,'pertany','id_obres','id_genere');
    }
}
