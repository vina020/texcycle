<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bin_id',
        'transaction_date',
        'status',
        'total_items'
    ];

    protected $dates = ['transaction_date'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bin()
    {
        return $this->belongsTo(Bin::class);
    }

    public function clothes()
    {
        return $this->belongsToMany(
            Clothes::class,
            'transaction_clothes'
        )->withPivot(['quantity', 'condition']);
    }
}
