<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Advertisement;
use App\Province;
use App\AdvertisementCategory;
use Carbon\Carbon;

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
        $today = Carbon::now();
        if($user->role=='admin'){
			$advertisements = DB::table('advertisements')->count();
        }
        else {
            return 'kamu bukan staff naree';
        }
        
        $advertisements = DB::table('advertisements')->latest()->paginate(5);
        for($i=0;$i<count($advertisements);$i++) {
            // day off now to end
            $period_end[$i] = Carbon::parse($advertisements[$i]->period_end);
            $advertisements[$i]->created_at = $period_end[$i]->diffInDays($today);
            
        }
        $categories = AdvertisementCategory::all();
        return view('advertisement.index',compact('advertisements', 'admins','categories'))
            ->with('i', (request()->input('page', 1) - 1) * 5);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $province = Province::pluck('name', 'id');
        $category = AdvertisementCategory::pluck('category_ads','id');
        return view('advertisement.create', compact('province','category'));
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
            'title' => 'required|max:100',
            'company_name' => 'required|max:100',
            'category' => 'required',
            'company_contact' => 'required|max:100',
            'period_start' => 'required',
            'period_end' => 'required',
            'price' => 'required',
            'province' => 'required|max:30',
            ]);
            $data = $request->only('title','company_name','category','url','company_contact','period_start','period_end','price','status','province');
            
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
            // dd(base64_decode($he));

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
        $province = Province::pluck('name', 'id');
        $category = AdvertisementCategory::pluck('category_ads','id');
        return view('advertisement.edit',compact('advertisements','province','category'));
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
            'title' => 'required|max:100',
            'category' => 'required',
            'company_name' => 'required|max:100',
            'company_contact' => 'required|max:100',
            'period_start' => 'required',
            'period_end' => 'required',
            'price' => 'required',
            'province' => 'required|max:30',
            ]);
            $data = $request->only('title','company_name','category','url','company_contact','period_start','period_end','price','status','province');            

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
