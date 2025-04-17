<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ActivateAccountMail extends Mailable
{
    use SerializesModels;

    public $user;
    public $activationUrl;

    public function __construct($user, $activationUrl)
    {
        $this->user = $user;
        $this->activationUrl = $activationUrl;
    }

    public function build()
    {
        return $this->subject('Confirme sua conta')
                    ->view('emails.activate');
    }
}
