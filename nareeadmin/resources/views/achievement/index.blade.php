<!DOCTYPE html>
<html>
@include('dashboard.header')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        achievement
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">achievement</li>
      </ol>
    </section>
 
    <section class="content">
        <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2>achievement list</h2>
                    </div>
                    <div class="pull-right">
                        <a class="btn btn-success" href="{{ route('achievement.create') }}"> Create New achievement</a>
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
                        username title scope month year
                    <th>No</th>
                    <th>Username</th>
                    <th>Title</th>
                    <th>Scope</th>
                    <th>Month/Year</th>
                    <th>Created_at</th>
                    <th width="280px">Action</th>
                </tr>
            @foreach($achievements as $achievement)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $achievement->username}}</td>
                <td>{{ $achievement->title}}</td>
                <td>{{ $achievement->scope}}</td>                
                <td>{{ $achievement->month}}/{{ $achievement->year}}</td>
                <td>{{ $achievement->created_at}}</td>
                <td>
                    <a class="btn btn-info" href="{{ route('achievement.show',$achievement->id) }}">Show</a>
                    <a class="btn btn-primary" href="{{ route('achievement.edit',$achievement->id) }}">Edit</a>
                    {!! Form::open(['method' => 'DELETE','route' => ['achievement.destroy', $achievement->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
            </table>
            
            {!! $achievements->links() !!}
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
