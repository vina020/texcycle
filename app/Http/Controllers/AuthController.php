<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showRegister()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email|unique:users',
            'username' => 'required|string|min:3|max:20|unique:users,name', 
            'password' => 'required|min:8|confirmed',
        ]);

        User::create([
            'name' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return redirect()->route('login')->with('success', 'Registrasi berhasil! Silakan login.');
    }

    public function showLogin()
    {
        return view('auth.login');
    }

    public function login(Request $request)
{
    $credentials = $request->validate([
        'username' => 'required',
        'password' => 'required',
    ]);

    // Coba login dengan email
    if (Auth::attempt(['email' => $credentials['username'], 'password' => $credentials['password']])) {
        $request->session()->regenerate();
        return redirect('/dashboard');
    }
    
    // Coba login dengan username
    if (Auth::attempt(['name' => $credentials['username'], 'password' => $credentials['password']])) {
        $request->session()->regenerate();
        return redirect()->intended('/dashboard');
    }

    return back()->withErrors([
        'username' => 'Username atau password salah.',
    ])->withInput();
}
    
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect()->route('login')->with('success', 'Berhasil logout.');
    }
}