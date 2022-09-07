<?php

namespace App\Http\Controllers;

use App\Models\instalment;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    
public function pagePr(){

    return view('ServiceProvider');
}
public function pageRr(){

    return view('ServiceReceiver');
}

public function store(Request $request){
     Instalment::query()->insert([
   'fullname'=>$request->fullname,
   'job'=>$request->job,
   'instalments'=>$request->instalments,
   'phone_number'=>$request->phone_number, 
]);
return redirect()->route('home');
}


public function show(){
$job=Instalment::query()->get()->all();
 return view('ServiceReceiver',["jobs" => $job]);
}



}