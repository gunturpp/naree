<!DOCTYPE html>
<html>
@include('dashboard.header')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        kehadiran
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">kehadiran</li>
      </ol>
    </section>
 
    <section class="content">
        <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2>kehadiran list</h2>
                    </div>
                    <div class="pull-right">
                        {{-- <a class="btn btn-success" href="{{ route('kehadiran.create') }}"> Create New kehadiran</a> --}}
                    </div>
                </div>
            </div>

            @if ($message = Session::get('success'))
                <div class="alert alert-success">
                    <p>{{ $message }}</p>
                </div>
            @endif

            <table class="table table-bordered">
                <tr>
                    <th>No</th>
                    <th>id user</th>
                    <th>id event</th>
                    <th>status kehadiran</th>
                </tr>
            @foreach($kehadiran_event as $kehadiran)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $kehadiran->id_user}}</td>
                <td>{{ $kehadiran->id_event}}</td>
                <td>
                <?php
                    if( $kehadiran->kehadiran  == 0)
                    {
                        echo "Tidak Datang";
                    } 
                    else if ( $kehadiran->kehadiran  == 1) 
                    {
                        echo "Pending";
                    }
                    else echo "Hadir";
                    ?>
                </td>
                <td>
                    <a class="btn btn-info" href="{{ route('kehadiran.show',$kehadiran->id) }}">Show</a>
                    <a class="btn btn-primary" href="{{ route('kehadiran.edit',$kehadiran->id) }}">Edit</a>
                    {!! Form::open(['method' => 'DELETE','route' => ['kehadiran.destroy', $kehadiran->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
            </table>
            
            {!! $kehadiran_event->links() !!}
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
