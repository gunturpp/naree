<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Event;

class EventController extends Controller
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
			$events = DB::table('events')->count();
        }
        else {
            return 'salah';
        }
        // $newss = News::latest()->paginate(5);
        $events = DB::table('events')->latest()->paginate(5);
        return view('event.index',compact('events', 'admins'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('event.create');
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
            'name_event' => 'required',
            'description' => 'required|max:10000|string',
            'date_event' => 'required',
            'ticket_price' => 'required',
            'location' => 'required',
            'province' => 'required',
            'organizer' => 'required',
            'poster' => 'required|mimes:jpeg,png,jpg|max:15000',
            'duration' => 'required',
            'exp' => 'required',
            'long' => 'required',
            'lat' => 'required',
            ]);
            $data = $request->only('name_event', 'description', 'date_event','location','province', 'organizer', 'dance_type', 'poster', 'duration', 'exp', 'long', 'lat');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://192.168.43.85/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/event";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }


        Event::create($data);
        return redirect()->route('event.index')
            ->with('success','New Event has been created successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $events = Event::find($id);
        return view('event.show',compact('events'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $events = Event::find($id);
        return view('event.edit',compact('events'));
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
            'name_event' => 'required',
            'description' => 'required|max:10000|string',
            'date_event' => 'required',
            'ticket_price' => 'required',
            'location' => 'required',
            'province' => 'required',
            'organizer' => 'required',
            'poster' => 'required|mimes:jpeg,png,jpg|max:15000',
            'duration' => 'required',
            'exp' => 'required',
            'long' => 'required',
            'lat' => 'required',
            ]);
            $data = $request->only('name_event', 'description', 'date_event','location','province', 'organizer', 'dance_type', 'poster', 'duration', 'exp', 'long', 'lat');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://192.168.43.85/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/event";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;

    
            }


        Event::find($id)->update($data);
        return redirect()->route('event.index')
            ->with('success','New Event has been created successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Event::find($id)->delete();
        return redirect()->route('event.index')
                        ->with('success','Event has been deleted successfully');
    }
}
