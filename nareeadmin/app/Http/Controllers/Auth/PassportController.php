<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\News;
use App\Event;
use App\Advertisement;
use App\Feedback;
use App\Achievement;


use Validator;
use DB;
class PassportController extends Controller
{
    public $successStatus = 200;
	

    public function login(){
        if(Auth::attempt([
			'email' => request('email'),
			'password' => request('password')]))
        {
            $user = Auth::user();
            $token = $user->createToken('myToken')->accessToken;
            return response()->json(['currentuser'=>$user, 'status' => $this->successStatus,'token'=>$token],
            $this->successStatus);
        }
        else{
			$message = "Masukkan email dan password";
            return response()->json(['error'=>'Wrong email or password'],401);
        }
    }
	// UPDATE
	public function editUser(User $user, $id)
    {   
		$user = Auth::findOrFail($id);
		return response()->json(['currentuser'=>$user], compact('users'));
    }

    public function update(User $user)
    { 
        $this->validate(request(), [
            'name' => 'required',
        ]);

        $user->name = request('name');
        $user->password = bcrypt(request('password'));

        $user->save();

        return back();
	}
	// ===========================================================
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
			'name' => 'required',
			'email' => 'required|string|email|min:6|max:30|unique:users',
			'username' => 'required|string|min:6|max:20|unique:users',
			'password' => 'required',
			'c_password' => 'required|same:password',
			'gender' => 'required',
			'birthdate' => 'required',
			'occupation' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->
            errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        // $input['remember_token'] = $users->createToken('MyApp')->accessToken;
        $user = User::create($input);
        // $success['token'] = $user->createToken('MyApp')->accessToken;
        $success = $user;

        return response()->json(['success'=>$success], $this->successStatus);

    }
	public function getUsers(Request $request,  $string=null) {
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$users = User::Where('id','like','%'.$string.'%')->orderBy('id', 'email')->get();
		else

			$users = User::orderBy('id', 'email')->get();
		$status=true;
		return compact('status','users');
	}
   
	// GET
    public function getNews(Request $request,  $string=null)
	{
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$news = News::Where('judul_news','like','%'.$string.'%')->orderBy('id', 'description')->get();
		else

			$news = News::orderBy('id', 'description')->get();
		$status=true;
		return compact('status','news');
    }
    public function getEvents(Request $request,  $string=null)
	{
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$events = Event::Where('name_event','like','%'.$string.'%')->orderBy('id', 'description')->get();
		else

			$events = Event::orderBy('id', 'description')->get();
		$status=true;
		return compact('status','events');
	}
	public function getAdvertisement(Request $request,  $string=null)
	{
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$advertisements = Advertisement::Where('title','like','%'.$string.'%')->orderBy('id', 'description')->get();
		else

			$advertisements = Advertisement::orderBy('id', 'description')->get();
		$status=true;
		return compact('status','advertisements');
	}
	public function getAchievement(Request $request,  $string=null)
	{
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$achievements = Achievement::Where('title','like','%'.$string.'%')->orderBy('id', 'year')->get();
		else

			$achievements = Achievement::orderBy('id', 'year')->get();
		$status=true;
		return compact('status','achievements');
	}

	// POST
	
	public function postFeedback(Request $request)
	{
		$user = Auth::user();
		$data = $request->only(
			'id_user',
			'comment'
		);
		
		$data['id_user'] = $request->id_user;
		$data['comment'] = $request->comment;
        $feedbacks = Feedback::create($data);
        $success = $feedbacks;
        return response()->json(['success'=>$success], $this->successStatus);
	}
	public function postAchievement(Request $request)
	{
		$user = Auth::user();
		$data = $request->only(
			'id_user','title','scope','month','year','exp'
		);
		$data['id_user'] = $request->id_user;
		$data['title'] = $request->title;
		$data['scope'] = $request->scope;
		$data['month'] = $request->month;
		$data['year'] = $request->year;
		$data['exp'] = $request->exp;
		$achievements = Achievement::create($data);
		$success = $achievements;
		return response()->json(['success'=>$success], $this->successStatus);
	}
}
