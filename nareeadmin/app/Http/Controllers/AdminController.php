<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dashboard;
use App\Advertisement;
use App\Event;
use App\News;
use App\Feedback;
use App\User;
use DB;
use Auth;
class AdminController extends Controller
{
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
		if($user->role=='admin'){
            $userList = User::orderBy('province')->get();

            $users = DB::table('users')->count();
            $events = DB::table('events')->count();
            $news = DB::table('news')->count();
            $advertisements = DB::table('advertisements')->count();
            $feedbacks = DB::table('feedbacks')->count();
        }
        else {
            return 'kamu bukan admin :p';
            
        }
        return view('dashboard', compact('userList','users','events','news','advertisements','feedbacks'));        
    }
}
