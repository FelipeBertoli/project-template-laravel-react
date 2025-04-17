<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de Conta</title>
</head>
<body>
    <p>Olá {{ $user->name }},</p>
    <p>Por favor, confirme sua conta clicando no link abaixo:</p>
    <a href="{{ $activationUrl }}">Confirmar Conta</a>
</body>
</html>
