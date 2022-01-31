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
}
