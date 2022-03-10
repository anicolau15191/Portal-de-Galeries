<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Poblacio extends Model
{
    protected $table = 'poblacio';

    public $timestamps = false;

    protected $primaryKey = 'id_poblacio';

    public function galeries(){

        return $this->hasMany(Galeria::class);
    }
}
