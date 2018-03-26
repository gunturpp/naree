<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Feedback;

class feedbackController extends Controller
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
			$feedbacks = DB::table('feedbacks')->count();
        }
        else {
            return 'salah';
        }
        // $newss = News::latest()->paginate(5);
        $feedbacks = DB::table('feedbacks')->latest()->paginate(5);
        return view('feedback.index',compact('feedbacks', 'admins'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('feedback.create');
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
        request()->validate([
            'title' => 'required',
            'duration' => 'required',
            'price' => 'required',
            'status' => 'required'

            ]);
            $data = $request->only('title','duration','price','status');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://192.168.43.85/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/feedback";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }


        feedback::create($data);
        return redirect()->route('feedback.index')
            ->with('success','New feedback has been created successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $feedbacks = feedback::find($id);
        return view('feedback.show',compact('feedbacks'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $feedbacks = feedback::find($id);
        return view('feedback.edit',compact('feedbacks'));
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
            'title' => 'required',
            'duration' => 'required',
            'price' => 'required',
            'status' => 'required'

            ]);
            $data = $request->only('title','duration','price','status');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://192.168.43.85/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/feedback";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }


        feedback::find($id)->update($data);
        return redirect()->route('feedback.index')
            ->with('success','New feedback has been created successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        feedback::find($id)->delete();
        return redirect()->route('feedback.index')
                        ->with('success','feedback has been deleted successfully');
    }
}
