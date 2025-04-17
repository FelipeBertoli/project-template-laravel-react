<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */

     public function store(Request $request)
     {
         // Validação dos campos de entrada
         $validator = Validator::make($request->all(), [
             'email' => 'required|email',
             'password' => 'required|string',
         ]);
      
         if ($validator->fails()) {
             throw new ValidationException($validator);
         }
     
         // Tentativa de autenticação
         if (Auth::attempt($request->only('email', 'password'))) {
             $user = Auth::user();
             $token = $request->user()->createToken($user->email . '_Token')->plainTextToken;
     
             return response()->json([
                 'message' => 'Login bem-sucedido',
                 'token' => $token,
                 'user_id' =>$user->id
             ]);
         }
     
         // Caso o usuário não seja encontrado
         return response()->json(['message' => 'Usuário não encontrado ou credenciais inválidas'], 404);
     }
     

    public function destroy(Request $request)
    {
        $request->user()->tokens->each(function ($token) {
            $token->delete();
        });    

        Auth::guard('web')->logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout bem-sucedido']);
    }
}
