<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Visitant extends Model
{

    protected $table='visitant';
    public $timestamps=false;
    protected $primaryKey='id_visitant';

    public function entrada(){
        return $this->hasMany(Entrada::class);
    }
}
