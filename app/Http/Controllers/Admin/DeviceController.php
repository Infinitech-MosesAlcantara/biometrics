<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Rats\Zkteco\Lib\ZKTeco;

class DeviceController extends Controller
{
    public function connect() {
        // $zk = new ZKTeco('192.168.1.201');
        // $zk->connect();   
        // $zk->testVoice(); 

        return response(['msg' => "5"]);
    }
}
