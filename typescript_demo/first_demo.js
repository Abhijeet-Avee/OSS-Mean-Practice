var joyStatus = 1;
var DIrections;
(function (DIrections) {
    DIrections[DIrections["UP"] = 0] = "UP";
    DIrections[DIrections["DOWN"] = 1] = "DOWN";
    DIrections[DIrections["LEFT"] = 2] = "LEFT";
    DIrections[DIrections["RIGHT"] = 3] = "RIGHT";
})(DIrections || (DIrections = {}));
if (joyStatus === DIrections.UP) {
    console.log('hello');
}
