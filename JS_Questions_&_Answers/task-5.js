function clockAngles(hour, minute) {
  let hourDegree = 30 * hour;
  let hourDegreeWithMinuts = (minute / 60) * 30;
  let totalHours = hourDegree + hourDegreeWithMinuts;

  if (minute == 60) {
    minute = 0;
  }

  let minuteDegree = 6 * minute;

  let theAngle = totalHours - minuteDegree;
  if (theAngle > 180) {
    theAngle = 360 - theAngle;
  }
  return theAngle;
}

console.log("the angle of the time: (6, 15) = " + clockAngles(6, 15));
console.log("the angle of the time: (1, 5) = " + clockAngles(1, 5));
