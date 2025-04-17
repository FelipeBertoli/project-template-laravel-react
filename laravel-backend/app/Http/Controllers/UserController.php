<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\ActivateAccountMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Mail;


class UserController extends Controller
{

    public function index()
    {
        $users = User::all();

        return response()->json($users, 200);
    }

    public function create(Request $request)
    {
        $request->validate(
            [
                'name' => ['required', 'string', 'regex:/^[a-zA-ZÀ-ÿ\s]+$/', 'max:30'],
                'surname' => ['required', 'string', 'regex:/^[a-zA-ZÀ-ÿ\s]+$/', 'max:60'],
                'gender' => ['required', 'string', 'max:15'],
                'birthday' => ['nullable', 'date', 'before_or_equal:' . now()->subYears(16)->format('d-m-Y')],
                'email' => ['required', 'string', 'email', 'max:100', 'unique:' . User::class],
                'password' => ['required', 'confirmed', Rules\Password::defaults()]
            ],
            [
                'name.required' => 'O nome é obrigatório.',
                'name.max' => 'O nome é muito grande.',
                'name.regex' => 'O nome só pode conter letras e espaços.',
                'surname.required' => 'O sobrenome é obrigatório.',
                'surname.max' => 'O sobrenome é muito grande',
                'surname.regex' => 'O sobrenome só pode conter letras e espaços.',
                'email.required' => 'O e-mail é obrigatório.',
                'email.email' => 'O e-mail é inválido.',
                'email.unique' => 'O e-mail precisa ser único.',
                'email.max' => 'O e-mail é muito grande',
                'gender.required' => 'O gênero é obrigatório.',
                'birthday.required' => 'A data de aniversário é obrigatória.',
                'birthday.before_or_equal' => 'Você não tem idade suficiente.',
                'password.required' => 'A senha é obrigatória.'
            ]
        );

        try {
            $user = User::create([
                'name' => $request->name,
                'surname' => $request->surname,
                'gender' => $request->gender,
                'birthday' => $request->birthday,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'status' => 'Pendente',
            ]);

            $token = $user->createToken('myapptoken')->plainTextToken;

            $activationUrl = route('user.activate', ['id' => $user->id]);

            Mail::to($user->email)->send(new ActivateAccountMail($user, $activationUrl));

            return response(["message" => "Usuário criado com sucesso", "user" => $user, 'token' => $token], 201);
        } catch (\Exception $e) {
            return response()->json(["message" => "Erro ao criar o usuário: " . $e->getMessage()], 500);
        }
    }

    public function showById($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        return response()->json($user, 200);
    }

    public function update(Request $request)
    {
        $user = User::findOrFail($request->id);

        $request->validate(
            [
                'name' => 'sometimes|required|string|max:255',
                'email' => 'sometimes|required|email|unique:users,email,' . $user->id,
                'surname' => 'sometimes|required|string|max:255',
                'gender' => 'sometimes|required|string',
                'birthday' => 'sometimes|required|date',
            ],

        );

        $user->update([
            'name' => $request->input('name', $user->name) ?? $user->name,
            'surname' => $request->input('surname', $user->surname) ?? $user->surname,
            'birthday' => $request->input('birthday', $user->birthday) ?? $user->birthday,
            'gender' => $request->input('gender', $user->gender) ?? $user->gender,
            'email' => $request->input('email', $user->email) ?? $user->email,
        ]);

        return response()->json([
            'message' => 'Usuário atualizado com sucesso!',
            'user' => $user,
        ]);
    }

    public function delete($id)
    {

        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'message' => 'Usuário não encontrado.'
            ], 404);
        }

        $user->delete();

        return response()->json([
            'message' => 'Usuário deletado com sucesso.'
        ], 200);
    }
}
