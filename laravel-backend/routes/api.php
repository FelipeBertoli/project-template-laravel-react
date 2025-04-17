<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\UserActivationController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::middleware(['auth:sanctum'])->post('/logout', [AuthenticatedSessionController::class, 'destroy']);
Route::get('/activate/{id}', [UserActivationController::class, 'activate'])->name('user.activate');

Route::get('/sanctum/csrf-cookie', function (Request $request) {
    return response()->json(['message' => 'CSRF cookie set']);
});

Route::prefix('user')->group(function () {
    Route::post('/create', [UserController::class, 'create']);
    Route::middleware('auth:sanctum')->group(function () {
        Route::put('/update', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'delete']);
        Route::prefix('show')->group(function () {
            Route::get('/', [UserController::class, 'index']);
            Route::get('/{id}', [UserController::class, 'showById']);
        });
    });
});
