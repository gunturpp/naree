<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>title :</strong>
            {!! Form::text('title', null, array('placeholder' => 'title','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>scope :</strong>
            {!! Form::text('scope', null, array('placeholder' => 'Internasional/Nasional/Regional','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Month :</strong>
            
            {!! Form::selectMonth('month', 1, ['class' => 'field']) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Year :</strong>
            
            {!! Form::selectYear('year', 1970, 2018) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>exp :</strong>
            {!! Form::number('exp', null, array('placeholder' => '100','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group {!! $errors->has('poster') ? 'has-error' : '' !!}">
            <strong>Poster :</strong>
            {!! Form::file('poster') !!}
            {!! Form::label('poster', 'Gambar Harus Memiliki Format ( jpg,jpeg,png )*') !!}
        </div>
    </div>

    <!-- <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Foto:</strong>
            {!! Form::file('foto', null) !!}
        </div>
    </div> -->
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