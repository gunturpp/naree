<!DOCTYPE html>
<html>
@include('dashboard.header')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        feedback
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">feedback</li>
      </ol>
    </section>
 
    <section class="content">
        <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2>feedback list</h2>
                    </div>
                    {{--  <div class="pull-right">
                        <a class="btn btn-success" href="{{ route('feedback.create') }}"> Create New feedback</a>
                    </div>  --}}
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
                    <th>komentar</th>
                    <th>tanggal</th>
                    <th width="280px">Action</th>
                </tr>
            @foreach($feedbacks as $feedback)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $feedback->id_user}}</td>
                <td>{{ $feedback->comment}}</td>
                <td>{{ $feedback->created_at}}</td>
                <td>
                    {{--  <a class="btn btn-info" href="{{ route('feedback.show',$feedback->id) }}">Show</a>  --}}
                    {{--  <a class="btn btn-primary" href="{{ route('feedback.edit',$feedback->id) }}">Edit</a>  --}}
                    {{--  {!! Form::open(['method' => 'DELETE','route' => ['feedback.destroy', $feedback->id],'style'=>'display:inline']) !!}  --}}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
            </table>
            
            {!! $feedbacks->links() !!}
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
