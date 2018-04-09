<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\UploadedFile;

// use Symfony\Component\HttpFoundation\File\UploadedFile;
use DB;
use Validator;
use Session;
use File;

use App\User;
use App\News;
use App\Event;
use App\Advertisement;
use App\Feedback;
use App\Achievement;
use App\History;
use App\Exp;
use App\Kehadiran;

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
    public function editUser($id)
    {
        $users = User::find($id);
		return response()->json(['currentuser'=>$users]);
    }
    public function updateUser(Request $request , $id)
    {
	
        // Validator::extend('photo',function($attribute, $value, $params, $validator) {
		// 	$image = base64_decode($getPhoto);
		// 	/* check mime, check file size on disk, check dimensions, whatever... */
		// 	return $image; /* true/false if the image fits the required attributes */
		// });
		
		// return $file;
		// $data->photo = $data;
		// echo $haha->id;
		// $data['photo'] = $fil	e;
		$rules = ([
			'name' =>'max:30',
			'occupation'=>'max:30',
			'photo'=> 'required|mimes:jpeg,jpg,png|max:15000',
			'no_hp'=> 'min:10|max:13',
			'about_me'=>'max:200',
			'team'=> 'max:30',
			'dance_type'=>'max:30',
			'exp' => 'max:11',
			'level'=> 'max:11',
		]);
		$messages = [
			'required' => 'Field harus di isi alias tidak boleh kosong',
		];
		$data = $request->only('name','occupation','photo','no_hp','about_me','team','dance_type','exp','level');
			$data = $request->input('photo');
			// echo json_encode($data);
			$haha = $request->all();
			// echo json_encode($request->all());
			$data = str_replace('data:image/png;base64,', '', $data);
			$data = str_replace(' ', '+', $data);
			$image = base64_decode($data);
			$ip = "https://nareeapp.com";
			$file = $ip . DIRECTORY_SEPARATOR . "images/photoprofile" . DIRECTORY_SEPARATOR . uniqid() . '.png';
			$destinationPath = public_path() . DIRECTORY_SEPARATOR . 'images/';
			$success = file_put_contents($file,$image);				
			// $data['photo'] = $request->photo;
			// $data = json_encode(['photo' => $file]);
			$data = $file;
		
        $validator = Validator::make($request->all(), $messages);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->
            errors()], 401);;
		}
		// if ($request->hasFile('photo')->isValid()){
        //     $data['photo'] = ;
        // } 
		// $data->photo = $file;
		User::find($id)->update(['photo' => $file]);
        return $message = ('Selamat, profile berhasil diubah');
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
			'level' => 'required',
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
	public function getExp(Request $request,  $string=null) {
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$exps = Exp::Where('level','like','%'.$string.'%')->orderBy('id')->get();
		else

			$exps = Exp::orderBy('level')->get();
		$status=true;
		return compact('status','exps');
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
	public function getHistories(Request $request,  $string=null)
	{
		$token = $request->header('Api-key');
		$user = Auth::user();
		if($string!=null)
			$histories = History::Where('judul','like','%'.$string.'%')->orderBy('id', 'created_at')->get();
		else

			$histories = History::orderBy('id', 'created_at')->get();
		$status=true;
		return compact('status','histories');
	}

	// POST
	public function postKehadiranEvent(Request $request)
	{
		$user = Auth::user();
		$data = $request->only(
			'kehadiran',
			'id_user',
			'id_event'
		);
		$data['kehadiran'] = $request->kehadiran;
		$data['id_user'] = $request->id_user;
		$data['id_event'] = $request->id_event;
        $kehadirans = Kehadiran::create($data);
        $success = $kehadirans;
        return response()->json(['success'=>$success], $this->successStatus);	
	}
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
	public function postHistories(Request $request)
	{
		$user = Auth::user();
		$data = $request->only(
			'id_user','comment','judul'
		);
		$data['id_user'] = $request->id_user;
		$data['exp'] = $request->exp;
		$data['judul'] = $request->judul;
		$histories = History::create($data);
		$success = $histories;
		return response()->json(['success'=>$success], $this->successStatus);
	}
}
