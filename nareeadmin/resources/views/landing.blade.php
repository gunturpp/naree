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
        <h2 class="sub-content-a" style="font-style: inherit;font-size:1.5rem;">
            Naree adalah aplikasi dengan fitur-fitur seputar tari terlengkap untuk segala kebutuhan menari kamu. Konten tersedia untuk berbagai jenis 
            tari mulai dari breakdance, hiphop, traditional, ballet, jaz, kontemporer, kpop, hingga zumba. Mulai dari upload sertifikat workshop dan prestasi, informasi seputar event-event tari, artikel seputar tari, promo-promo khusus untuk para penari,
            dan masih banyak fitur-fitur seputar tari lainnya yang bisa diakses dari smartphone kamu!
        </h2>
        <img class="content-a-img" src="{{asset('images/landingpage/detail.png')}}">

        <div class="row">
            <div class="card-naree col-md-4 col-sm-12">
                <img class="card-img" src="images/landingpage/fiturr1.png">
                <h4 class="achievement">ACHIEVEMENT</h2>
                <p class="achievement-sub">Upload sertifikat prestasi tari mu di aplikasi Naree, bangun portfolio pencapaianmu dalam menari, dan jadilah penari terbaik di indonesia !</p>           
            </div>
            <div class="card-naree col-md-4 col-sm-12"> 
                <img class="card-img" src="images/landingpage/fiturr2.png">
                <h4 class="newspromo">NEWS & PROMO</h2>
                <p class="newspromo-sub">Tingkatkan wawasan melalui artikel-artikel terbaru seputar dunia tari dan promosi-promosi khusus untuk para penari di aplikasi Naree.</p>
            </div>
            <div class="card-naree col-md-4 col-sm-12"> 
            <img class="card-img" src="images/landingpage/fiturr3.png">
            <h4 class="event">EVENT</h2>
                <p class="event-sub">Cari informasi seputar event-event tari ga perlu bingung lagi! Kamu bisa temukan berbagai informasi seputar event-event tari di aplikasi Naree.</p>
            </div>
        </div>
    </div>
        
    {{-- content b --}}
    <div class="content-b">
        <img class="bagan" src="images/landingpage/bagan.png">        
        <div class="content-b-sub">
            <h2>Menari Menjadi Lebih Menyenangkan</h2>
            <br><br>
            <h4>Kamu suka main game? Melalui inovasi terbaru dan Naree, kamu bisa menari lebih menyenangkan seperti bermain game.
            Disini, para penari diberi fitur profile dengan sistem level layaknya sebuah game. Semakin sering kamu berpatisipasi dan check-in di event-event tari, semakin berprestasi kamu, semakin tinggi juga level mu, lho!
            </h4>
        </div>
    </div>
        
    {{-- content c --}}
    <div class=" row content-c bg-light">
        <div class="col-lg-6 col-sm-12">
            <img class="rumah" src="images/landingpage/rumah.png">        
        </div>
        <div class="col-lg-6 tx-left col-sm-12">
            <h1 class="primaryColor">NAREE CHAMPIONSHIP</h1>
            <br>
            <h3 class="justify">
            <img class="rumah-mobile" src="images/landingpage/rumah.png">        
            Event perlombaan tari tahunan dari Naree dimana para pesertanya adalah penari dengan level-level tertinggi dari setiap kota dan setiap kategori tari di aplikasi Naree.
            Disini para penari tersebut berkompetisi untuk menjadi penari terbaik di kotanya. Penari terbaik dari setiap kota akan berkompetisi untuk menjadi penari terbaik di Indonesia.
            <br><br>
            Semakin giat kamu berlatih tari,semakin berprestasi kamu, maka semakin tinggi kesempatan kamu buat menjadi salah satu peserta Naree Champioship dan menjadi penari terbaik!</h3>
        </div>
                            
    </div>
    
    {{-- content d --}}
    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.naree.team">
    <div class="content-d bg-light">
            <img class="content-d-img" src="images/landingpage/bawah.png">
            <p class="footer-tx">Download GRATIS Aplikasi <br> Naree Sekarang Juga !</p>
        </div>
    </a>
        
                    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
