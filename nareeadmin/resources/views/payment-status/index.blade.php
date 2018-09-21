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
        <h1>Special Event List</h1>
        <div class="event-card-list">
            @foreach ($allSpecialEvent as $evs )
                <div class="col-6">
                <a href="{{ URL::to('/') }}/payment/{{$evs->id}}">
                        <h3>{{$evs->name_event}}</h3>
                        <td><img src="{{ $evs -> poster }}" style="height:250px;width:250px;text-align:center"></td>
                    </a>
                </div>
            @endforeach
        </div>
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
