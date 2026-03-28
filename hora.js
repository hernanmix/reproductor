function toDate(dStr, format) {
  var now = new Date();
  if (format == "h:m") {
    var hour = parseInt(dStr.substr(0, dStr.indexOf(":")));
    var rest = dStr.substr(dStr.indexOf(":") + 1).toLowerCase();
    var minute = parseInt(rest);

    // detectar am/pm
    var ap = "";
    if (rest.indexOf("am") > -1) ap = "am";
    if (rest.indexOf("pm") > -1) ap = "pm";

    // ajustar hora según am/pm
    if (ap == "pm" && hour < 12) hour += 12;
    if (ap == "am" && hour == 12) hour = 0;

    now.setHours(hour);
    now.setMinutes(minute);
    now.setSeconds(0);
    return now;
  }
  return "Invalid Format";
}
