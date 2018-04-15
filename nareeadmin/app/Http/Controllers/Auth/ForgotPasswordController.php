<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Transformers\Json;
use App\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Mail;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    https://www.youtube.com/watch?v=T49ogngdhrw
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
     */

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Send a reset link to the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getResetToken(Request $request)
    {
        $this->validate($request, ['email' => 'required|email']);
        if ($request->wantsJson()) {
            $user = User::where('email', $request->input('email'))->first();
            if (!$user) {
                return response()->json(Json::response(null, trans('passwords.user')), 400);
            }
            $token = $this->broker()->createToken($user);
            echo $token;
            $data = [
                'email' => $request->email,
                'subject' => 'Reset My Password',
                'tokennya' => $token, 
            ];
            // push token password to gmail
            Mail::send('gmail.gmail',$data,function($message) use ($data) { 
                $message->from('naree.indonesia@gmail.com', 'nareeadmin');
                $message->to($data['email']);
                $message->subject($data['subject']);
            });
            return (response()->json(Json::response(['token' => $token])));
        }
    }
}