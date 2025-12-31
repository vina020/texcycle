<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ClothesCategory extends Model
{
    use HasFactory;

    protected $table = 'clothes_categories';

    protected $fillable = [
        'category_name'
    ];

    public function clothes()
    {
        return $this->hasMany(Clothes::class, 'category_id');
    }
}
