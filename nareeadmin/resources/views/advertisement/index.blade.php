<!DOCTYPE html>
<html>
@include('dashboard.header')

<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        advertisement
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">advertisement</li>
      </ol>
    </section>
 
    <section class="content">
        <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2>advertisement list</h2>
                    </div>
                    <div class="pull-right">
                        <a class="btn btn-success" href="{{ route('advertisement.create') }}"> Create New advertisement</a>
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
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Poster</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>End date</th>
                    {{-- <th width="280px">Action</th> --}}
                </tr>
            @foreach($advertisements as $advertisement)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $advertisement->title}}</td>
                <td>
                    <?php
                    if($advertisement->category == 1 ) { echo $categories[0]->category_ads; }
                    if($advertisement->category == 2 ) { echo $categories[1]->category_ads; }
                    ?>
                </td>
                <td>{{ $advertisement->price}}</td>
                <td><img src="{{ $advertisement -> poster }}" style="height:50px;width:50px;text-align:center"></td>
                <td><?php if($advertisement->status == 1) {echo 'Aktif';}
                          else {echo 'Tidak aktif';}
                ?>
                </td>
                <td>{{ $advertisement->created_at}} hari lagi</td>
                <td>{{ $advertisement->period_end}}</td>
                <td>
                    {{-- <a class="btn btn-info" href="{{ route('advertisement.show',$advertisement->id) }}">Show</a> --}}
                    {{-- <a class="btn btn-primary" href="{{ route('advertisement.edit',$advertisement->id) }}">Edit</a> --}}
                    {{-- {!! Form::open(['method' => 'DELETE','route' => ['advertisement.destroy', $advertisement->id],'style'=>'display:inline']) !!} --}}
                    {{-- {!! Form::submit('Delete', ['class' => 'btn btn-danger']) !!} --}}
                    {{-- {!! Form::close() !!} --}}
                </td>
            </tr>
            @endforeach
            </table>
            
            {!! $advertisements->links() !!}
    </section>
</div>

@include('dashboard.footer') 
</body>
</html>
