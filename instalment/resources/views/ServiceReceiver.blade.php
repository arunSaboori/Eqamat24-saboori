<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <link href="{{ asset('/css/servicereceiver.css') }}" rel="stylesheet">
    <title>instalmentLOOK</title>
</head>
<body>
    <header class="nav bg-light">
        <form action="{{ route('show.receiver') }}"> 
            @csrf
        <a href="{{ route('home') }}" class="btn btn-light">بازگشت</a>
        <p class="d-flex  vw-100  d-flex justify-content-center flex-row align-items-center"> انتخاب دسته بندی:
            <select name="" id="" class="form-control w-25   m-3"> 
                @foreach ($jobs as $job)    
                <option value="{{ $job->id }}">{{ $job->job }}</option>
                @endforeach
      </select>
      </p>
    </form>
     </header>
</body>
</html>