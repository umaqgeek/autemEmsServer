<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JoinEvent extends Model
{
  protected $fillable = [
      'alumni_id',
      'event_id',
      'join_status'
  ];

  public function alumnis()
  {
      return $this->belongsTo(Alumni::class, 'alumni_id');
  }

  public function events()
  {
      return $this->belongsTo(Event::class, 'event_id');
  }
}
