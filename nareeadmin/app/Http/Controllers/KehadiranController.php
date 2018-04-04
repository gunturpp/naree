<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Kehadiran;

class KehadiranController extends Controller
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
			$kehadiran_event = DB::table('kehadiran_event')->count();
        }
        else {
            return 'kamu bukan staff naree';
        }
        // $newss = News::latest()->paginate(5);
        $kehadiran_event = DB::table('kehadiran_event')->latest()->paginate(5);
        return view('kehadiran-event.index',compact('kehadiran_event', 'admins'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('kehadiran-event.create');
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
            'kehadiran' => 'required'
            ]);
            $data = $request->only('kehadiran');
        
        Kehadiran::create($data);
        return redirect()->route('kehadiran-event.index')
            ->with('success','New kehadiran has been created successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $kehadiran_event = Kehadiran::find($id);
        return view('kehadiran-event.show',compact('kehadiran_event'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $kehadiran_event = kehadiran::find($id);
        return view('kehadiran-event.edit',compact('kehadiran_event'));
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
            'kehadiran' => 'required'

            ]);
            $data = $request->only('kehadiran');

        Kehadiran::find($id)->update($data);
        return redirect()->route('kehadiran.index')
            ->with('success','New kehadiran has been created successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Kehadiran::find($id)->delete();
        return redirect()->route('kehadiran.index')
                        ->with('success','kehadiran has been deleted successfully');
    }
}
