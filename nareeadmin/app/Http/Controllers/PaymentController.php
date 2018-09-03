<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use DB;
use App\Admin;
use App\Payment;
use Carbon\Carbon;

class PaymentController extends Controller
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
        $waitingPrice = 0;
        $processPrice = 0;
        $confirmedPrice = 0;
        $totalPrice = 0;
        $inWaiting = 0;
        $inProcess = 0;
        $inConfirmed = 0;

        $user = Auth::user();
        $today     = Carbon::now();
		if($user->role=='admin'){
			$payments = DB::table('payments')->count();
        }
        else {
            return 'Sorry, you dont have permission';
        }
        $payments = DB::table('payments')->where('status','process')->latest()->paginate(5);
        for($i=0;$i<count($payments);$i++) {
            // change from created_at to now
            $payments[$i]->created_at = $today->diffForHumans($payments[$i]->created_at);
        }
        $allpayments = DB::table('payments')->latest()->paginate(10);
        for($i=0;$i<count($allpayments);$i++) {
            // change from created_at to now
            $allpayments[$i]->created_at = $today->diffForHumans($allpayments[$i]->created_at);
        }
        
        $registered = DB::table('payments')->count();
        $payment_select = DB::table('payments')->select('total_price','status')->get();
        for($i=0; $i<$payment_select->count(); $i++) {
            $totalPrice += $payment_select[$i]->total_price;

            // sum status and price
            if($payment_select[$i]->status == 'waiting') {
                $inWaiting +=1;
                $waitingPrice += $payment_select[$i]->total_price;
            } else if($payment_select[$i]->status == 'process') {
                $inProcess +=1;
                $processPrice += $payment_select[$i]->total_price;
            } else if($payment_select[$i]->status == 'confirmed') {
                $inConfirmed +=1;
                $confirmedPrice += $payment_select[$i]->total_price;
            }
        }
        // dd($this->totalPrice);
        return view('payment-status.index',
        compact('payments', 'allpayments', 'admins','registered','totalPrice',
        'inWaiting','inProcess','inConfirmed',
        'waitingPrice','processPrice','confirmedPrice'
        ))
        ->with('i', (request()->input('page', 1) - 1) * 5)
        ->with('j', (request()->input('page', 1) - 1) * 10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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
            'status' => 'required'
            ]);
            $data = $request->only('status');
        
        Payment::create($data);
        return redirect()->route('payment-status.index')
            ->with('success','New payment has been created successfully');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $payments = Payment::find($id);
        return view('payment-status.show',compact('payments'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $payments = Payment::find($id);
        return view('payment-status.edit',compact('payments'));
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
        // get id event in  table payment_status
        request()->validate([
            'status' => 'required'
            ]);
            $data = $request->only('status');
        Payment::find($id)->update($data);
        return redirect()->route('payment.index')
            ->with('success','New payment has been created successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Payment::find($id)->delete();
        return redirect()->route('payment.index')
                        ->with('success','payment has been deleted successfully');
    }
}
