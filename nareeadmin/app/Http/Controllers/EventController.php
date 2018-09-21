<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Query\Builder;
use DB;
use App\Admin;
use App\Event;
use App\Category;

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
            return 'kamu bukan staff naree';
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
            'name_event' => 'required|max:100|string',
            'description' => 'required|max:10000|string',
            'date_event' => 'required',
            'ticket_price' => 'required',
            'location' => 'required',
            'province' => 'required',
            'organizer' => 'required',
            'poster' => 'required|mimes:jpeg,png,jpg|max:15000',
            'duration' => 'required',
            'long' => 'required',
            'lat' => 'required',
            'rating' => 'required',
            'any_register' => 'required',

            // 'category' => 'required',
            // 'min_person' => 'required',
            // 'max_person' => 'required',
            // 'persons' => 'required',
            // 'exp' => 'required'
            ]);
            $data = $request->only('name_event', 'description', 'date_event','ticket_price','location','province', 'organizer', 'dance_type', 'poster', 'duration', 'long', 'lat','rating','any_register');
            $data['type'] = "normal";
            // $categories = $request->only('category','min_person','max_person','persons','exp');
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                $getPath = 'http://127.0.0.1:8000/homeislandadmin/public/img/' . $fileName;
                $destinationPath = "images/event";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath, $getPath,$fileName);
                $photo1 = $fileName;
                $data['admin'] = $user->email;
                // return $getPath;
            }
        // Category::create($categories);
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
        // $justId = $events->id;
        // $this->addCategory($justId);
        return view('event.show',compact('events'));
    }
    private $id_event;
    public function addCategory($id)
    {
        $events = Event::find($id);
        // dd($events->id);
        // $this->id_event = $events->id;
        return view('event.addCategory',compact('events'));
        
        // request()->validate([
        //     'id_event' => $id,
        //     'category' => 'required',
        //     'min_person' => 'required',
        //     'max_person' => 'required',
        //     'persons' => 'required',
        //     'exp' => 'required'
        //     ]);
        //     $categories = $request->only('id_event','category','min_person','max_person','persons','exp');

        // Category::create($categories);
        // return redirect()->route('event.show')
        //     ->with('success','New Category has been created successfully');
    }
    
    public function storeCategory(Request $request)
    {
        $events = DB::table('events')
            ->join('categorydance', 'events.id', '=', 'categorydance.id_event')
            ->select('events.id', 'categorydance.id_event')
            ->get();
        // $h = $this->addCategory($request);
        // $events = Event::find($id);
        dd($events);
        $user = Auth::user();
        // request()->validate([
        //     'id_event' => 'required',
        //     'category' => 'required',
        //     'min_person' => 'required',
        //     'max_person' => 'required',
        //     'persons' => 'required',
        //     'exp' => 'required'
        // ]);

        // $categories = $request->only('category','min_person','max_person','persons','exp');
        $categories = new Category;
        $categories->id_event = $events[0]->id;
        $categories->category = $request->category;
        $categories->min_person = $request->min_person;
        $categories->max_person = $request->max_person;
        $categories->persons = $request->persons;
        $categories->exp = $request->exp;
        $categories->save();
        // Category::create($categories);
        return redirect()->route('event.index')
            ->with('success','New Category has been created successfully');
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
            'name_event' => 'required|max:100|string',
            'description' => 'required|max:10000|string',
            'date_event' => 'required',
            'ticket_price' => 'required',
            'location' => 'required',
            'province' => 'required',
            'organizer' => 'required',
            'poster' => 'mimes:jpeg,png,jpg|max:15000',
            'duration' => 'required',
            'long' => 'required',
            'lat' => 'required',
            'rating' => 'required',
            'any_register' => 'required',
            ]);
            $data = $request->only('name_event', 'description', 'date_event','ticket_price','location','province', 'organizer', 'dance_type', 'poster', 'duration', 'exp', 'long', 'lat','rating','any_register');
            
            // $data = $request->except(['image']);
            $poster = "";
            if ($request->hasFile('poster')){ //has file itu meminta nama databasenya bukan classnya
                $ip = request()->ip();
                $file = $request->poster;
                $fileName = str_random(40) . '.' . $file->guessClientExtension();;
                // $getPath = 'http://127.0.0.1:8000/nareeadmin/public/img/' . $fileName;
                $destinationPath = "images/event";
                $data['poster'] = '../'. $destinationPath . '/' . $fileName;
                $file -> move($destinationPath,$fileName);
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
