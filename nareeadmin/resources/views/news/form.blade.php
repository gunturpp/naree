<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Title :</strong>
            {!! Form::text('judul_news', null, array('placeholder' => 'Judul Berita','class' => 'form-control')) !!}
        </div>
    </div>
    {{--  <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Writter:</strong>
            {!! Form::text('admin', null, array('placeholder' => 'Name','class' => 'form-control')) !!}
        </div>
    </div>  --}}
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Description:</strong>
            {!! Form::textarea('description', null, array('placeholder' => 'deskripsi','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group {!! $errors->has('image') ? 'has-error' : '' !!}">
            <strong>image:</strong>
            {!! Form::file('image') !!}
            {!! Form::label('image', 'Gambar Harus Memiliki Format ( jpg,jpeg,png )*') !!}
        </div>
    </div>
    <!-- <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>image:</strong>
            {!! Form::file('image', null) !!}
        </div>
    </div> -->

    @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>