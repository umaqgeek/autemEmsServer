<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'title',
      'eventDate',
      'start',
      'end',
      'address',
      'latitude',
      'longitude',
      'deleted',
      'code',
      'alumni_id'
  ];

  public function alumnis()
  {
      return $this->belongsTo(Alumni::class, 'alumni_id');
  }
}
