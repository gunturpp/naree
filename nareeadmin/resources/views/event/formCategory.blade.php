<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Category :</strong>
            {!! Form::text('category', null, array('placeholder' => 'Category Dance','class' => 'form-control')) !!}
        </div>
    </div>

    {{-- <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>id_event :</strong>
            {!! Form::text('id_event', null, array('placeholder' => 'id event','class' => 'form-control')) !!}
        </div>
    </div> --}}

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Person :</strong>
            {!! Form::select('persons', array('1' => 'Solo', '2' => 'Team'), 'Solo') !!}
        </div>
    </div>
    
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Minimal Person :</strong>
            {!! Form::number('min_person', null, array('placeholder' => 'Minimal Dancer','class' => 'form-control')) !!}
        </div>
    </div>


    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>Maximum Person :</strong>
            {!! Form::number('max_person', null, array('placeholder' => 'Maximum Dancer (isi 1 jika solo)','class' => 'form-control')) !!}
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-group">
            <strong>exp :</strong>
            {!! Form::number('exp', null, array('placeholder' => '100','class' => 'form-control')) !!}
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>