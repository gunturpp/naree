<!DOCTYPE html>
<html>
@include('dashboard.header')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        payment
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">payment</li>
      </ol>
    </section>
 
    <section class="content">
        <div class="row">
            <div style="background-color:#3c8dbc; padding:20px;color:#ffffff">
                <h4>User registered : <b>{{$registered}}</b><br>
                    In waiting : <b>{{$inWaiting}}</b> | 
                    In process: <b>{{$inProcess}}</b> | 
                    In confirmed : <b>{{$inConfirmed}}</b><br><br>
                    waiting price : <b>Rp{{ number_format($waitingPrice, 2, ',', '.') }}</b> | 
                    process price : <b>Rp{{ number_format($processPrice, 2, ',', '.') }}</b> | 
                    confirmed price : <b>Rp{{ number_format($confirmedPrice, 2, ',', '.') }}</b><br>

                    Total price : <b>Rp{{ number_format($totalPrice, 2, ',', '.') }}</b><br>
                </h4>
            </div>

            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>payment list</h2>
                </div>
                <div class="pull-right">
                    {{-- <a class="btn btn-success" href="{{ route('payment.create') }}"> Create New payment</a> --}}
                </div>
            </div>
        </div>

            @if ($message = Session::get('success'))
                <div class="alert alert-success">
                    <p>{{ $message }}</p>
                </div>
            @endif
            {{-- list payment status == process --}}
            <h1><b>List payment in process by admin</b></h1>
            <table class="table table-bordered">
                <tr>
                    <th>No</th>
                    <th>id user</th>
                    <th>id event</th>
                    <th>invoice</th>
                    <th>total price</th>
                    <th>nota</th>
                    <th>status payment</th>
                    <th>time registration</th>
                    <th>action</th>
                </tr>
                @foreach($payments as $payment)
                <tr>
                    <td>{{ ++$i }}</td>
                    <td>{{ $payment->id_user}}</td>
                    <td>{{ $payment->id_event}}</td>
                    <td>{{ $payment->invoice}}</td>
                    <td>{{ $payment->total_price}}</td>
                    <td><a href="https://nareeapp.com/<?php echo $payment->nota ?>">{{ $payment->nota}}</a></td>
                    <td>{{ $payment->status}}</td>
                    <td>{{ $payment->created_at}}</td>
                    <td>
                        {{-- <a class="btn btn-info" href="{{ route('payment.show',$payment->id) }}">Show</a> --}}
                        <a class="btn btn-primary" href="{{ route('payment.edit',$payment->id) }}">Edit</a>
                        {!! Form::open(['method' => 'DELETE','route' => ['payment.destroy', $payment->id],'style'=>'display:inline']) !!}
                        {{-- {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!} --}}
                        {!! Form::close() !!}
                    </td>
                </tr>
                @endforeach
            </table>
            {!! $payments->links() !!}

            {{-- list all status payment--}}
            <h1><b>List all payment</b></h1>
            <table class="table table-bordered">
                <tr>
                    <th>No</th>
                    <th>id user</th>
                    <th>id event</th>
                    <th>invoice</th>
                    <th>total price</th>
                    <th>nota</th>
                    <th>status payment</th>
                    <th>time registration</th>
                </tr>
                @foreach($allpayments as $allpayment)
                <tr>
                    <td>{{ ++$j }}</td>
                    <td>{{ $allpayment->id_user}}</td>
                    <td>{{ $allpayment->id_event}}</td>
                    <td>{{ $allpayment->invoice}}</td>
                    <td>{{ $allpayment->total_price}}</td>
                    <td><a href="https://nareeapp.com/<?php echo $allpayment->nota ?>">{{ $allpayment->nota}}</a></td>
                    <td>{{ $allpayment->status}}</td>
                    <td>{{ $allpayment->created_at}}</td>
                    <td>
                        {{-- <a class="btn btn-info" href="{{ route('payment.show',$allpayment->id) }}">Show</a> --}}
                        {{-- <a class="btn btn-primary" href="{{ route('payment.edit',$allpayment->id) }}">Edit</a> --}}
                        {!! Form::open(['method' => 'DELETE','route' => ['payment.destroy', $allpayment->id],'style'=>'display:inline']) !!}
                        {{-- {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!} --}}
                        {!! Form::close() !!}
                    </td>
                </tr>
                @endforeach
            </table>
            {!! $allpayments->links() !!}
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
