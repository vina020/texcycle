<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Clothes extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'clothes_name',
        'material'
    ];

    public function category()
    {
        return $this->belongsTo(ClothesCategory::class, 'category_id');
    }

    public function transactions()
    {
        return $this->belongsToMany(
            Transaction::class,
            'transaction_clothes'
        )->withPivot(['quantity', 'condition']);
    }
}
