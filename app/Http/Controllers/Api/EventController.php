<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

use App\Models\Event;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['listAll', 'list']]);
    }

    function store(Request $request)
    {
        $req = $request->all();
        $req['code'] = Str::random(6);
        return Event::create($req);
    }

    function listAll(Request $request)
    {
        $deleted = isset($request->deleted) ? $request->deleted : 1;
        $events = Event::with(array('alumnis'));
        if ($deleted != 'all') {
            $events->where('deleted', $deleted);
        }
        return $events->get();
    }

    function list($id)
    {
        return Event::with(array('alumnis'))->get()->find($id);
    }

    function remove($id)
    {
        Event::findOrFail($id)->delete();
        return 204;
    }
}
