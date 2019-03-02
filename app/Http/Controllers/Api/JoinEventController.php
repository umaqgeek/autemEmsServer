<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\JoinEvent;
use App\Models\Event;

class JoinEventController extends Controller
{
    function store(Request $request)
    {
        if (isset($request->code)) {
            $event = Event::where('id', $request->event_id)
                      ->where('code', $request->code)
                      ->where('deleted', 0)
                      ->get();
            if (sizeof($event) > 0) {
                return JoinEvent::create($request->only(['alumni_id', 'event_id']));
            } else {
                return 404;
            }
        } else {
            return 401;
        }
    }

    function listAll(Request $request)
    {
        $joinEvents = JoinEvent::with(array('alumnis', 'events'));
        if (isset($request->event_id)) {
            $joinEvents->where('event_id', $request->event_id);
        }
        return $joinEvents->get();
    }
}
