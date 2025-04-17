<?php

// app/Http/Controllers/UserActivationController.php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserActivationController extends Controller
{
    public function activate($id)
    {
        // Procurar o usuário com base no ID
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        // Aqui você pode marcar o usuário como "Ativo"
        $user->status = 'Ativo';
        $user->save();

        return response()->json(['message' => 'Usuário ativado com sucesso!']);
    }
}
