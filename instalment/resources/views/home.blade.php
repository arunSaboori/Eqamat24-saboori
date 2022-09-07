<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<link href="{{ asset('/css/style.css') }}" rel="stylesheet">

    <title>instalmentLOOK</title>
</head>
<body>
    <div>
        <header class="nav bg-light d-flex justify-content-around">
             <a href="{{ route('service.provider') }}" class="nav-link pt-3">خدمات دهنده</a>
             <h3 class="pt-2 text-muted markWEB">     قسط &nbsp;<img alt="image" src="{{ asset('eye-fill.svg') }}"/>&nbsp;  نگاه  </h3>
            <a href="{{ route('service.receiver') }}" class="nav-link pt-3">خدمات گیرنده </a>
        </header>
        <img src="{{ asset('wallpaperflare.com_wallpaper.jpg') }}"  class="img1 position-absolute img-fluid  ">
        <aside class="text-center vw-100 vh-100 d-flex justify-content-center align-items-center text-light position-relative ">
            <div class="div1"> 
            <h1 class="p-4"> به سایت قسط نگاه خوش امدید </h1>
            <h3>! شما میتوانید در قسط نگاه علاوه بر اشتراک گذاری خدمات و خدمات هم دریافت کنی</h3>
            <button class="btn btn-primary m-3" >اطلاعات بیشتر</button>
           </div>
        </aside>
    </div>
</body>
</html>