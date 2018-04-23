<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Achievement;
use App\History;
class AchievementController extends Controller
{
    public function __construct()
    {   
        // harus role admin
        $this->middleware('auth:admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {	
        $user = Auth::user();
		if($user->role=='admin'){
			$achievements = DB::table('achievements')->count();
        }
        else {
            return 'kamu bukan staff naree';
        }
        // $newss = News::latest()->paginate(5);
        $achievements = DB::table('achievements')->latest()->paginate(5);
        return view('achievement.index',compact('achievements', 'admins'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('achievement.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $expUser = DB::table('users')->value('exp');
        request()->validate([
            'username' => 'required',
            'title' => 'required',
            'organizer' => 'required',
            'scope' => 'required',
            'month' => 'required',
            'year' => 'required',
            'exp' => 'required'
            ]);
            $data = $request->only('username','title','organizer','scope','month','year','exp');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://127.0.0.1:8000/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/achievement";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;
            }
            
            $userId = DB::table('users')->where('username',$data['username'])->value('id');
            // add total exp user with exp achievement
            $addExp = $expUser + $data['exp'];
            DB::table('users')->where('id', $userId)->update(['exp' => $addExp]);
            // create history achievement in table history
            History::create([
                'id_user' => $userId,
                'judul' => $data['title'],
                'exp' => $data['exp']
            ]);

        achievement::create($data);
        return redirect()->route('achievement.index')    
            ->with('success','New achievement has been created successfully');
            
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $achievements = achievement::find($id);
        return view('achievement.show',compact('achievements'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $achievements = achievement::find($id);
        return view('achievement.edit',compact('achievements'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        request()->validate([
            'username' => 'required',            
            'title' => 'required',
            'organizer' => 'required',
            'scope' => 'required',
            'month' => 'required',
            'year' => 'required',
            'exp' => 'required'

            ]);
            $data = $request->only('username','title','organizer','scope','month','year','exp');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://127.0.0.1:8000/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/achievement";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }


        achievement::find($id)->update($data);
        return redirect()->route('achievement.index')
            ->with('success','New achievement has been created successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        achievement::find($id)->delete();
        return redirect()->route('achievement.index')
                        ->with('success','achievement has been deleted successfully');
    }
}
