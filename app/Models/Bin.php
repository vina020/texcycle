<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bin extends Model
{
    use HasFactory;

    protected $fillable = [
        'location',
        'capacity',
        'current_load',
        'status'
    ];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
