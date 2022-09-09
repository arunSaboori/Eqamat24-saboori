<?php

namespace App\Http\Controllers;

use App\Models\instalment;
use Illuminate\Http\Request;

class ServiceController extends Controller
{

    public function provider(){

        return view('ServiceProvider');
    }
    public function receiver(){

        $jobs=Instalment::query()->get()->all();
         return view('ServiceReceiver',compact('jobs'));
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





}
