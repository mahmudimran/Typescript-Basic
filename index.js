"use strict";
// Any, number, string, boolean, object, Array, Tuple, Enum, undefined, null, void, never, unknown
var myName = "imran mahmud";
var age;
age = 33;
var isHungry = false;
var gameDirection = "right";
var studentId = 420;
studentId = "web3-420";
studentId = 22;
var person = {
    name: 'imran mahmud',
    age: 24,
    hobby: 'sleeping'
};
var person2 = {
    name: 'Di Pul',
    age: 26,
};
// Array
var number = [33, 35, 55, 60, 'imran mahmud', true];
var people = [
    {
        name: 'imran mahmud',
        age: 24,
        hobby: 'sleeping'
    },
    {
        name: 'imran mahmud',
        age: 24,
        hobby: 'sleeping'
    },
    {
        name: 'imran mahmud',
        age: 24,
        hobby: 'sleeping'
    }
];
// function
var greeting = function (name) {
    console.log("hello " + name);
};
greeting("imran");
var add = function (a, b) {
    return a + b;
};
var introduce = function (_a) {
    var name = _a.name, age = _a.age, hobby = _a.hobby;
    console.log("hello my name is  " + name + " age " + age + " hobby " + hobby);
};
introduce({
    name: 'imran',
    age: 24,
    hobby: 'codeing'
});
var getArray = function (arr) {
    return arr;
};
getArray(['jdhjhd', 'jfheuhfehf']);
getArray([22, 2, 3,]);
// enum
var Week;
(function (Week) {
    Week["sat"] = "SAT";
    Week["sun"] = "SUN";
    Week["mon"] = "MON";
    Week["tue"] = "TUE";
    Week["wed"] = "WED";
    Week["thu"] = "THU";
    Week["fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.thu);
