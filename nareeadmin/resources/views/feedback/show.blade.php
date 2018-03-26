@extends('layout')

@section('content')

<div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    {{--  <div class="pull-right" style="margin-top:15px;">
                        <a class="btn btn-primary" href="{{ route('feedback.index') }}"> Back</a>
                    </div>  --}}
                    <div class="col-lg-12">
                        <center><h1 class="page-header">feedback Data Detail</h1></center>
                    </div>
            </div>
            {{--  <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('homestays.index') }}"> Back</a>
            </div>  --}}
        </div>
    </div>

    <div style="width: 80%; margin: auto;">
      	<table class="table centered">

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>username :</strong>
                        {{ $feedbacks->id}}
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>komentar :</strong>
                        {{ $feedbacks->comment}}
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>tanggal :</strong>
                        {{ $feedbacks->created_at}}
                    </div>
                </div>

            </div>
        </table>
    </div>

@endsection