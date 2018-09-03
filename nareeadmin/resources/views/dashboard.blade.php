<!DOCTYPE html>
<html>
@include('dashboard.header')

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
            <h3>{{$users}}</h3>

              <p>Total Pengguna</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
            <h3>{{$events}}</h3>
            <!-- <h3>53<sup style="font-size: 20px">%</sup></h3> -->
            
              <p>Total Event</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>{{$news}}</h3>

              <p>Total Berita</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{$advertisements}}</h3>

              <p>Total Iklan</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{$feedbacks}}</h3>

              <p>Total Komentar</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{$registered}}</h3>

              <p>Total register COTY</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->

      </div>
      <!-- /.row -->
      <!-- Main row -->
      <div class="row" style="margin:auto; width:400px">
           
      
      </div> <!-- /.row (main row) -->
      {{-- list user --}}
      <div style="padding:20px;margin:20px;border:solid;height:400px;overflow-y:scroll">
          <table class="table table-bordered">
              <tr>
                  <th>Id Akun</th>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Provinsi</th>
              </tr>
          @foreach($userList as $list)
          <tr>
              <td>{{ $list->id }}</td>
              <td>{{ $list->name}}</td>
              <td>{{ $list->username}}</td>
              <td>{{ $list->email}}</td>
              <td>{{ $list->province}}</td>
          </tr>
          @endforeach
          </table>
      </div>
    </section>
    <!-- /.content -->
  </div>

  @include('dashboard.footer') 
</body>
</html>