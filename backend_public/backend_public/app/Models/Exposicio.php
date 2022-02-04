<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exposicio extends Model
{
    protected $table = "exposicio";

    public $timestamps = false;

    protected $primaryKey = 'id_exposicio';

    public function sales(){

        return $this->belongsTo(Sales::class);

    }

    public function obres(){

        return $this->hasMany(Obres::class);
    }

}
