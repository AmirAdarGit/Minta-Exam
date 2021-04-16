function clock_angles(hour, minute) {
  hourDegree = 30 * hour;
  hourDegreeWithMinuts = (minute / 60) * 30;
  totalHours = hourDegree + hourDegreeWithMinuts;

  if (minute == 60) {
    minute = 0;
  }

  minuteDegree = 6 * minute;

  theEngle = totalHours - minuteDegree;
  if (theEngle > 180) {
    theEngle = 360 - theEngle;
  }
  return theEngle;
}

console.log("hand angle: (6, 15) = " + clock_angles(6, 15));
