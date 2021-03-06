<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthAPIController extends Controller
{
    public function register(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'email' => 'email|required|unique:users',
            'password' => 'required'
        ]);

        $validatedData['password'] = bcrypt($request->password);

        $user = User::create($validatedData);

        $accessToken = $user->createToken('authToken')->accessToken;
            return response()->json([
                'message'=>'success register',
                'user' => $user,
                'access_token' => $accessToken]);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if (!Auth::attempt($loginData)) {
            return response(['
            message' => 'Invalid Credentials,
            '])->setStatusCode(400);
        }
        /**@var User $user */
        $user = Auth::user($loginData);
        $accessToken = $user->createToken('authToken')->accessToken;
        $cookie =cookie('jwt', $accessToken,60*24);
        return response([
            'user' => auth()->user(),
            'message' => 'success login',
            'access_token' => $accessToken,
            'user' => $user,
        ])->withCookie($cookie);
    }
    public function logout()
    {
        $cookie = Cookie::forget('jwt');
        return response([
            'message'=> 'success logout'
        ])->withCookie($cookie);
    }
}
