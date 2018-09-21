<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\User;
use App\Event;
use App\News;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
    public function landing()
    {
        $allusers = DB::table('users')->count();
        $allevents = DB::table('events')->count();
        $allnews = DB::table('news')->count();

        return view('landing', compact('allusers','allevents','allnews'));
    }
    
}
