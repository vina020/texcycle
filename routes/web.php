<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/homepage', function () {
    return view('homepage');
});

Route::get('/marketplace', function () {
    return view('marketplace');
});

Route::get('/dropbin', function () {
    return view('dropbin');
});

Route::get('/tracking', function () {
    return view('tracking');
});

Route::get('/community', function () {
    return view('community');
});

Route::get('/side', function () {
    return view('side');
});

Route::get('/components/side', function () {
    return view('components.side');
});

Route::get('/components/navbar', function () {
    return view('components.navbar');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::get('/upload', function () {
    return view('upload');
});

Route::get('/history', function () {
    return view('history');
});

Route::get('/profile', function () {
    return view('profile');
});

Route::get('/scanner', function () {
    return view('scanner');
});

Route::get('/keranjang', function () {
    return view('keranjang');
});

Route::get('/login', function () {
    return view('auth.login');
})->name('login');

Route::post('/register', 
[AuthController::class, 'register'
])->name('register');