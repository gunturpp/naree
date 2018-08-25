<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Payment Status :</strong>
            {{-- {!! Form::text('kehadiran', null, array('placeholder' => 'title','class' => 'form-control')) !!} --}}
            {!! Form::select('status', ['process' => 'Process', 'confirmed' => 'Confirmed']) !!}
        </div>
    </div>

{{--  
    @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif  --}}

    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>