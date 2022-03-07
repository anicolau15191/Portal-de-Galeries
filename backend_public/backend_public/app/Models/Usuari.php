<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuari extends Model
{
    protected $table = 'usuaris';
    public $timestamps = false;
    protected $primaryKey = 'id_usuaris';

    public function poblacio(){

        return $this->belongsTo(Poblacio::class);
    }

}
