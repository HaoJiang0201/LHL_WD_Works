let talkingCalendar = function(date) {
  // Your code here
  var dataOutput = "";
  var dataDate = date.split("/");
  let year = dataDate[0];
  let month = dataDate[1];
  let day = dataDate[2];
  switch(month)
  {
    case "01": month = "January"; break;
    case "02": month = "February"; break;
    case "03": month = "March"; break;
    case "04": month = "April"; break;
    case "05": month = "May "; break;
    case "06": month = "June"; break;
    case "07": month = "July"; break;
    case "08": month = "August"; break;
    case "09": month = "September"; break;
    case "10": month = "October"; break;
    case "11": month = "November"; break;
    case "12": month = "December"; break;
    default : month = "???"; break;
  }
  dataOutput += month + " ";
  switch(day)
  {
    case "01": day = "1"; break;
    case "02": day = "2"; break;
    case "03": day = "3"; break;
    case "04": day = "4"; break;
    case "05": day = "5"; break;
    case "06": day = "6"; break;
    case "07": day = "7"; break;
    case "08": day = "8"; break;
    case "09": day = "9"; break;
    default : break;
  }
  dataOutput += day;
  switch(day)
  {
    case "01": dataOutput += "st"; break;
    case "02": dataOutput += "nd"; break;
    case "03": dataOutput += "rd"; break;
    case "21": dataOutput += "st"; break;
    case "22": dataOutput += "nd"; break;
    case "23": dataOutput += "rd"; break;
    case "31": dataOutput += "st"; break;
    default : dataOutput += "th";; break;
  }
  dataOutput += ", " + year;
  return dataOutput;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));