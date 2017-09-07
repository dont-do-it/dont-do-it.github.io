'use-strict';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


var serverTime = new Date();
function updateTime() {
    /// Increment serverTime by 1 second and update the html for '#time'
    serverTime = new Date(serverTime.getTime() + 1000);
    $('#time').html(serverTime.toGMTString());
}

$(function() {
    updateTime();
    setInterval(updateTime, 1000);
})

var total2015 = 788000;
var currentYearlyRate = 788000;
var currentDailyRate = currentYearlyRate / 365;

var newYears2015 = new Date('2015-01-01');
var daysSince = Math.ceil((serverTime.getTime() - newYears2015.getTime()) / (1000 * 60 * 60 * 24));
console.log(daysSince)

var deathsNotInclusiveCurrentYear = total2015 * (today.getFullYear() - 2016)
var deathsNotInclusiveCurrentMonth = total2015 * (today.getFullYear() - 2016)


var totalDeaths = total2015 + deathsNotInclusiveCurrentMonth +

console.log(deathsNotInclusiveCurrentYear)

var paragraph = "If you know someone who is thinking about suicide, or someone you think MIGHT be thinking of suicide, do yourself a favor and ask them how they are doing. Worst case scenario, you're asking a friend how their day is. Best case? You might just save a life."
$('#paragraph').text(paragraph)
