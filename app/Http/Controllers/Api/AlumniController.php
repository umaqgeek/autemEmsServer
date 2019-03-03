<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Alumni;
use Illuminate\Support\Facades\Auth;
use Validator;

class AlumniController extends Controller
{
    public $successStatus = 200;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store', 'listAll', 'list', 'login']]);
    }

    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $alumni = Alumni::create($input);
        $success['token'] =  $alumni->createToken('AutemEmsServer')->accessToken;
        $success['name'] =  $alumni->name;
        return response()->json(['success'=>$success], $this->successStatus);
    }

    function listAll()
    {
        return Alumni::all();
    }

    function list($id)
    {
        return Alumni::get()->find($id);
    }

    function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $alumni = Auth::user();
            Auth::logout();
            $success['token'] =  $alumni->createToken('AutemEmsServer')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else {
            return response()->json(['error'=>'Unauthorised'], 401);
        }
    }
}
