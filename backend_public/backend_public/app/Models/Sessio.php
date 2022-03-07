<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Sessio extends Model
{
    protected $table = 'sessio';
    public $timestamps = false;
    protected $primaryKey = 'id_sessio';

    public function exposicio(){
        return $this->belongsTo(Exposicio::class);
    }

    public function entrada(){
        return $this->hasMany(Entrada::class);
    }
}
