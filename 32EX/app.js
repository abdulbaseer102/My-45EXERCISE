var crrunt_users = ["abdulraqeeb", "AbdulBaseer", "Ajmal Khan", "Zia Khan", "Danial Nagori"];
var new_users = ["abdulraqeeb", "baseer", "ziakhan", "Hazam"];
function MyNameCheck() {
    for (var i = 0; i < crrunt_users.length; i++) {
        if (new_users[i] === "abdulraqeeb") {
            console.log("User Name ".concat(crrunt_users[0], " is Not Availibale try another"));
        }
        if (new_users[i] === "baseer") {
            console.log("User Name ".concat(new_users[1], " is avaylibal"));
        }
    }
}
MyNameCheck();
