<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{

    protected $table = 'entrada';
    public $timestamps = false;
    protected $primaryKey = 'id_entrada';

    public function visitant(){
        return $this->belongsTo(Visitant::class);
    }

    public function sessio(){
        return $this->belongsTo(Sessio::class);
    }
}
