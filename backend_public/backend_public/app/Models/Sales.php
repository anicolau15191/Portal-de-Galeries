<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    protected $table = 'sales';

    public $timestamps = false;

    protected $primaryKey = 'id_sales';

    public function galeria(){

        return $this->belongsTo(Galeria::class);

    }

}
