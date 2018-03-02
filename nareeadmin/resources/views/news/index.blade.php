<!DOCTYPE html>
<html>
@include('dashboard.header')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        News
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">News</li>
      </ol>
    </section>
 
    <section class="content">
        <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2>News list</h2>
                    </div>
                    <div class="pull-right">
                        <a class="btn btn-success" href="{{ route('news.create') }}"> Create New News</a>
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
                    <th>Judul</th>
                    {{--  <th>Writter</th>  --}}
                    {{--  <th>Password</th>  --}}
                    <th>admin</th>
                    <th>Deskripsi</th>
                    <th>Foto</th>
                    <th width="280px">Action</th>
                </tr>
            @foreach($news as $newss)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $newss->judul_news}}</td>
                <td>{{ $newss->description}}</td>
                {{--  <td>{{ $news->foto}}</td>  --}}
                <td>{{ $newss->created_at}}</td>
                <td><img src="{{ $newss -> image }}" style="height:50px;width:50px;text-align:center"></td>
                <td>
                    <a class="btn btn-info" href="{{ route('news.show',$newss->id) }}">Show</a>
                    <a class="btn btn-primary" href="{{ route('news.edit',$newss->id) }}">Edit</a>
                    {!! Form::open(['method' => 'DELETE','route' => ['news.destroy', $newss->id],'style'=>'display:inline']) !!}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
            </table>
            
            {!! $news->links() !!}
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
