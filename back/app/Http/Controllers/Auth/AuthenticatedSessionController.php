<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);

    if (!Auth::attempt($request->only('email', 'password'))) {
        return response()->json([
            'message' => 'Credenciais inválidas'
        ], 401);
    }

    $user = Auth::user();

    // Gera token para API
    $token = $user->createToken('mobile')->plainTextToken;

    return response()->json([
        'message' => 'Login realizado com sucesso',
        'user' => $user,
        'token' => $token,
    ]);
}


    public function destroy(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout realizado'
        ]);
    }
}
