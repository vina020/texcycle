<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return redirect('/homepage');
});

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

// Routes untuk guest (belum login)
Route::middleware(['guest'])->group(function () {
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register.form');
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.post');
});

// Routes untuk user yang sudah login
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
    
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

//dashboard
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

//profile
Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
    Route::put('/profile/change-password', [ProfileController::class, 'changePassword'])->name('profile.change-password');
    
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});