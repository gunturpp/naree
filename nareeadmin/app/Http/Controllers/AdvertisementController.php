<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Advertisement;

class AdvertisementController extends Controller
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
			$advertisements = DB::table('advertisements')->count();
        }
        else {
            return 'kamu bukan staff naree';
        }
        // $newss = News::latest()->paginate(5);
        $advertisements = DB::table('advertisements')->latest()->paginate(5);
        return view('advertisement.index',compact('advertisements', 'admins'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('advertisement.create');
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
                $getPath = 'http://127.0.0.1:8000/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/advertisement";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }
            $he = base64_encode($data['poster']);
            dd(base64_decode($he));

        Advertisement::create($data);
        return redirect()->route('advertisement.index')
            ->with('success','New Advertisement has been created successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $advertisements = Advertisement::find($id);
        return view('advertisement.show',compact('advertisements'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $advertisements = Advertisement::find($id);
        return view('advertisement.edit',compact('advertisements'));
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
                $getPath = 'http://127.0.0.1:8000/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/advertisement";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }


        Advertisement::find($id)->update($data);
        return redirect()->route('advertisement.index')
            ->with('success','New Advertisement has been created successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Advertisement::find($id)->delete();
        return redirect()->route('advertisement.index')
                        ->with('success','Advertisement has been deleted successfully');
    }
}
