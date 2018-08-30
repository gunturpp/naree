<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>title :</strong>
            {!! Form::text('title', null, array('placeholder' => 'title','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>price :</strong>
            {!! Form::number('price', null, array('placeholder' => '100000','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Category :</strong>
            {{ Form::select('category', $category, null, ['class' => 'form-control']) }}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Period Start :</strong>
            {!! Form::date('period_start', null, array('placeholder' => 'Period start','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Period End :</strong>
            {!! Form::date('period_end', null, array('placeholder' => 'Period end','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Company name :</strong>
            {!! Form::text('company_name', null, array('placeholder' => 'Company Name','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Company contact :</strong>
            {!! Form::text('company_contact', '+62', array('placeholder' => 'Company Name','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Url direct :</strong>
            {!! Form::text('url', null, array('placeholder' => 'http://www.website.com','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Province :</strong>
            {{ Form::select('province', $province, null, ['class' => 'form-control']) }}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Status :</strong>
            {!! Form::select('status', array(1 => 'Aktif', 0 => "Tidak Aktif"), 1) !!}
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