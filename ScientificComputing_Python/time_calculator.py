def add_time(start, duration, given_day=False):

  week_days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  
  #inputs-formatting
  duration_toadd = duration.split(':')
  starting_giventime = start.split()
  starting_time = starting_giventime[0].split(':')
  days = 1440
  hours = int(starting_time[0])

  if starting_giventime[1] == 'PM' : hours = int(starting_time[0]) + 12

  #calculations      
  starting_minutes = hours * 60 + int(starting_time[1])
  minutes_toadd = int(duration_toadd[0]) * 60 + int(duration_toadd[1])
  total = starting_minutes + minutes_toadd
  num_days = total // days
  count_halfdays = 0

  hours_left = total // 60
  minutes_left = total % 60

  while hours_left >= 12:
    hours_left -= 12
    count_halfdays += 1 

  if given_day:
    initial_day = given_day.strip().lower()
    if initial_day.title() in week_days:
      day_ofweek = week_days.index(initial_day.title())
      final_day = week_days[(day_ofweek + num_days) % 7]
  else:
    final_day = False

  if count_halfdays % 2 == 0 : symbol = 'AM'
  else : symbol = 'PM'

  if hours_left == 0 and symbol == 'AM' : hours_left = 12
  if hours_left == 0 and symbol == 'PM' : hours_left = 12

  #outputs    
  new_time = str(hours_left) + ':' + str(minutes_left).rjust(2, '0') + ' ' + symbol
  
  if num_days == 0:
    if final_day:
      new_time += ', ' + final_day
  elif num_days == 1:
    if final_day:
      new_time += ', ' + final_day + ' (next day)'
    else:
      new_time += ' (next day)'
  else:
    if final_day:
      new_time += ', ' + final_day + ' (' + str(num_days) + ' days later)'
    else:
      new_time += ' (' + str(num_days) + ' days later)'

  return new_time