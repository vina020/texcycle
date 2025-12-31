<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TransactionClothes extends Model
{
    use HasFactory;

    protected $table = 'transaction_clothes';

    protected $fillable = [
        'transaction_id',
        'clothes_id',
        'quantity',
        'condition'
    ];
}
