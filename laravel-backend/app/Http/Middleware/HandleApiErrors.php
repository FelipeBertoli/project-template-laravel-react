<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class HandleApiErrors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            // Passa a requisição para o próximo middleware ou controlador
            return $next($request);
        } catch (\Exception $e) {
            // Captura qualquer exceção
            $response = [
                'status' => 'error',
                'message' => 'Ocorreu um erro inesperado.'
            ];

            // Caso você queira identificar erros específicos, como 404, 500, etc.
            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                $response['message'] = 'Recurso não encontrado.';
                return response()->json($response, 404);
            }

            if ($e instanceof \Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException) {
                $response['message'] = 'Método não permitido.';
                return response()->json($response, 405);
            }

            // Caso padrão para outros tipos de erro
            return response()->json($response, 500);
        }
    }
}
