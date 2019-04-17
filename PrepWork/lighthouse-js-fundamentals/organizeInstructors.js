const organizeInstructors = function(instructors) {
  // Put your solution here
  var iOSTeacher = [];
  var WebTeacher = [];
  var BlockchainTeacher = [];
  var NewStucture = {
                      iOS : iOSTeacher,
                      Web : WebTeacher,

                    };

  var info = [];
  for(var i = 0; i < instructors.length; i ++)
  {
    if(instructors[i].course === "iOS")
      info.push({iOS: instructors[i].name});
    if(instructors[i].course === "Web")
      info.push({Web: instructors[i].name});
  }
  return info.toString();
};

var test = {name: [], course: ""};
test.name.push("test1");
console.log(test);
test.name.push("test2");
console.log(test);

// console.log(organizeInstructors([
//   {name: "Samuel", course: "iOS"},
//   {name: "Victoria", course: "Web"},
//   {name: "Karim", course: "Web"},
//   {name: "Donald", course: "Web"}
// ]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));