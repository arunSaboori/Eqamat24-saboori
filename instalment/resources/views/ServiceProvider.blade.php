<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <link href="{{ asset('/css/serviceprovider.css') }}" rel="stylesheet">

    <title>instalmentLOOK</title>
</head>
<body>
    <a href="{{ route('home') }}" class="btn btn-dark m-5" dir="ltr">بازگشت</a>
     <div class="vw-100 vh-100  d-flex justify-content-center align-items-center text-center container-fluid text-center">
        <div> 
            <form action="{{ route('store.provider') }}" method="POST"> 
                @csrf
        <h2 class="m-5">لطفا فرم زیرا برای ارائه  پر کنید</h2>
        <input type="text" class="form-control my-5 text-center" placeholder="نام کامل" name="fullname">
        <input type="text" class="form-control my-5 text-center" placeholder="شغل یا نوع سرویس" name="job">
        <textarea   cols="30" rows="10" class="form-control my-5  text-center" placeholder="نوع قسط و شرایط" name="instalments"></textarea>
        <input type="tel"  class="form-control my-5 text-center" placeholder="شمارتماس" name="phone_number">
        <button class="btn btn-primary w-25" type="submit">تایید</button>
           </form>
        </div>
    </div>
 </body>
</html>