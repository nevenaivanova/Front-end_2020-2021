var dateArr = [];
var numDaysInMonth = [];
var weekend = [];
var merged = [];

var dateCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function addDate() {
    let currDate = new Date(Date.now());
    dateArr.push(currDate);
    console.log(currDate);
}

function changeHour() {
    let newDate = new Date(2018, 11, 8, 21, 0, 0);
    dateArr.push(newDate);
    console.log(newDate);
}

function calcDatesOfMonth() {
    numDaysInMonth = dateArr.map(function (element) {
        return dateCount[element.getMonth()];
    });
    weekend = dateArr.map(function (element) {
        return element.getDay();
    });
}

function convert(date) {
    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
}

function mergedInformation() {
    for (let i = 0; i < dateArr.length; i++) {
        let date = convert(dateArr[i]);
        let hour = dateArr[i].toLocaleString().split(" ")[1];
        let numDays = numDaysInMonth[i];
        let day = weekend[i] == 0 ? "Sunday" : "Saturday";
        let string = `Date: ${date}, hour: ${hour}, ${day}, ${numDays} days`;
        merged.push(string);
    }
    printArray(merged);
}

addDate();
changeHour();
calcDatesOfMonth();
mergedInformation();