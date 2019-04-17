let calculateChange = function(total, cash) {
  // Your code here
  var changeString = "{ ";
  var changeNum = cash - total;
  var units = changeNum;
  while(units > 0)
  {
    if(units >= 2000)
    {
      changeString += "twenty: " + Math.trunc(units/2000);
      units = units - Math.trunc(units/2000)*2000;
    }
    else
    {
      if(units >= 1000)
      {
        changeString += "units: " + Math.trunc(units/1000);
        units = units - Math.trunc(units/1000)*1000;
      }
      else
      {
        if(units >= 500)
        {
          changeString += "five: " + Math.trunc(units/500);
          units = units - Math.trunc(units/500)*500;
        }
        else
        {
          if(units >= 200)
          {
            changeString += "twoDollar: " + Math.trunc(units/200);
            units -= Math.trunc(units/200)*200;
          }
          else
          {
            if(units >= 100)
            {
              changeString += "dollar: " + Math.trunc(units/100);
              units = units - Math.trunc(units/100)*100;
            }
            else
            {
              if(units >= 25)
              {
                changeString += "quarter: " + Math.trunc(units/25);
                units = units - Math.trunc(units/25)*25;
              }
              else
              {
                if(units >= 10)
                {
                  changeString += "dime: " + Math.trunc(units/10);
                  units = units - Math.trunc(units/10)*10;
                }
                else
                {
                  if(units >= 5)
                  {
                    changeString += "nickel: " + Math.trunc(units/5);
                    units = units - Math.trunc(units/5)*5;
                  }
                  else
                  {
                    if(units >= 1)
                    {
                      changeString += "penny: " + Math.trunc(units);
                      units = 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if(units > 0)
    {
      changeString += ", ";
    }
  }


  return changeString + " }";
};
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
