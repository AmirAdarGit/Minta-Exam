function clock_angles(hour, minute) {
  hourDegree = 30 * hour;
  hourDegreeWithMinuts = (minute / 60) * 30;
  totalHours = hourDegree + hourDegreeWithMinuts;

  if (minute == 60) {
    minute = 0;
  }

  minuteDegree = 6 * minute;

  theAngles = totalHours - minuteDegree;
  if (theAngles > 180) {
    theAngles = 360 - theEngle;
  }
  return theAngles;
}

console.log("The time is: (6, 15) = " + clock_angles(6, 15));
