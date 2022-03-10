<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artista extends Model
{
    protected $table = 'artista';
    public $timestamps = false;
    protected $primaryKey = 'id_artista';

    public function obres(){

        return $this->belongsToMany(Genere::class,'feta','id_artista','id_obra');
    }
}
