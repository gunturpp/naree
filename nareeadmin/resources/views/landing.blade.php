<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.official', 'Official Naree') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/landing.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
</head>
<body>
    {{-- nav --}}
    <ul class="nav nav-header">
        <li class="nav-item">
          <a class="nav-link icon-naree" href="/"><img src="images/landingpage/logo.png" style="width: 120px;"></a>
        </li>
      </ul>
    
    {{-- header --}}
    <div class="landing-header">
        <img class="header-img" src="{{asset('images/landingpage/img-header.png')}}">
        <p class="header-title">Semua Kebutuhan Penari Dalam Satu Aplikasi
        <br>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.naree.team">
                <img class="icon-ps" src="{{asset('images/landingpage/playstore.png')}}">
            </a>
        </p>
    </div>
    {{-- content a --}}
    <div class="content-a bg-light">
        <h1 class="primaryColor bold">Naree untuk Para Penari Indonesia</h1>
        <h3 class="sub-content-a" style="font-style: inherit;font-size:1.5rem;">
            Naree adalah aplikasi dengan fitur-fitur seputar tari terlengkap untuk segala kebutuhan menari kamu. Konten tersedia untuk berbagai jenis 
            tari mulai dari breakdance, hiphop, traditional, ballet, jaz, kontemporer, kpop, hingga zumba. Mulai dari upload sertifikat workshop dan prestasi, informasi seputar event-event tari, artikel seputar tari, promo-promo khusus untuk para penari,
            dan masih banyak fitur-fitur seputar tari lainnya yang bisa diakses dari smartphone kamu!
        </h3>
        <img class="content-a-img" src="{{asset('images/landingpage/detail.png')}}">

        <div class="container">
            {{-- <div class="card-naree col-md-4 col-sm-12">
                <img class="card-img" src="images/landingpage/fiturr1.png">
                <p class="achievement"><br>{{$allusers}}<br> DANCERS</p>
                <h3 class="achievement-sub">Upload sertifikat prestasi tari mu di aplikasi Naree, bangun portfolio pencapaianmu dalam menari, dan jadilah penari terbaik di indonesia !</h3>           
            </div> --}}
            <div class="card-naree col-md-4 col-sm-12">
                <img class="card-img" src="images/landingpage/fiturr4.png">
                <p class="users"><br><b>{{$allusers}}</b><br> DANCERS</p>
                <h3 class="users-sub">Penari-penari yang telah bergabung tersebar dibeberapa kota di Indonesia untuk mendapatkan informasi-informasi terkini di Naree.</h3>           
            </div>
            <div class="card-naree col-md-4 col-sm-12"> 
                <img class="card-img" src="images/landingpage/fiturr2.png">
                <p class="newspromo"><br><b>{{$allnews}}</b><br> NEWS & PROMO</p>
                <h3 class="newspromo-sub">Tingkatkan wawasan melalui artikel-artikel terbaru seputar dunia tari dan promosi-promosi khusus untuk para penari di aplikasi Naree.</h3>
            </div>
            <div class="card-naree col-md-4 col-sm-12"> 
                <img class="card-img" src="images/landingpage/fiturr3.png">
                <p class="event"><br><b>{{$allevents}}</b><br> EVENT</p>
                <h3 class="event-sub">Cari informasi seputar event-event tari ga perlu bingung lagi! Kamu bisa temukan berbagai informasi seputar event-event tari di aplikasi Naree.</h3>
            </div>
        </div>
    </div>
        
    {{-- content b --}}
    <div class="content-b">
        <img class="bagan" src="images/landingpage/bagan.png">        
        <div class="content-b-sub">
            <h1>Menari Menjadi Lebih Menyenangkan</h1>
            <br><br>
            <h3>Kamu suka main game? Melalui inovasi terbaru dan Naree, kamu bisa menari lebih menyenangkan seperti bermain game.
            Disini, para penari diberi fitur profile dengan sistem level layaknya sebuah game. Semakin sering kamu berpatisipasi dan check-in di event-event tari, semakin berprestasi kamu, semakin tinggi juga level mu, lho!
            </h3>
        </div>
    </div>
        
    {{-- content c --}}
    <div class="content-c bg-light">
        <div class="col-lg-6 col-sm-12">
            <img class="rumah" src="images/landingpage/rumah.png">        
        </div>
        <div class="col-lg-6 tx-left col-sm-12">
            <h1 class="primaryColor">NAREE CHAMPIONSHIP</h1>
            <br>
            <h3 class="justify">
            <img class="rumah-mobile" src="images/landingpage/rumah.png">        
            <p>Event perlombaan tari tahunan dari Naree dimana para pesertanya adalah penari dengan level-level tertinggi dari setiap kota dan setiap kategori tari di aplikasi Naree.
            Disini para penari tersebut berkompetisi untuk menjadi penari terbaik di kotanya. Penari terbaik dari setiap kota akan berkompetisi untuk menjadi penari terbaik di Indonesia.
            <br><br>
            Semakin giat kamu berlatih tari,semakin berprestasi kamu, maka semakin tinggi kesempatan kamu buat menjadi salah satu peserta Naree Champioship dan menjadi penari terbaik!</h3>
        </div>
    </div>
    {{-- team --}}
    <div style="height:10px;background-color:#95171a"></div>
    <div class="team bg-light">
        <h1 class="cl-black">Our Team</h1>
        <br>
        <div class="flex">
            <div class="col-lg-4 col-md-12">
                <img class="team-persons" src="images/founder/denny.png">
                <h3 class="cl-black"><b>Founder as Chief Executive Officer</b>
                <br>Denny Fadli Fitrianto</h3>
                
            </div>

            <div class="col-lg-4 col-md-12">
                <img class="team-persons" src="images/founder/guntur.jpg">
                <h3 class="cl-black"><b>Founder as Chief Technical Officer</b>
                <br>Guntur Putra Pratama</h3>
            </div>

            <div class="col-lg-4 col-md-12">
                <img class="team-persons" src="images/founder/rafi.jpg">
                <h3 class="cl-black"><b>Founder as Mobile Application Developer</b>
                <br>Thirafi Aufar Idris</h3>
            </div>
        </div>
    </div>
    {{-- content d --}}
    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.naree.team">
    <div class="content-d bg-light">
            <img class="content-d-img" src="images/landingpage/bawah.png">
            <h3 class="footer-tx">Download GRATIS Aplikasi <br> Naree Sekarang Juga !</h3>
        </div>
    </a>
        
                    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
