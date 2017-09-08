'use-strict';

var serverTime = new Date();

function updateDeaths() {
    var total2015Suicides = 788000;
    var currentYearlyRate = 788000;
    var currentRatePerMinute = currentYearlyRate / 365 / 24 / 60;
    serverTime = new Date(serverTime.getTime() + 1000);
    var newYears2015 = new Date("January 1, 2015, 00:00:00")
    var deathsSince = Math.ceil((serverTime.getTime() - newYears2015.getTime()) / 1000 / 60 * currentRatePerMinute);
    var totalDeaths = total2015Suicides + deathsSince;
    $('#deaths').html(totalDeaths + " souls who have commited suicide,");
    return totalDeaths
}

function updateFamily(totalDeaths) {
    var familyMembersAffected = totalDeaths * 3;
    $('#family').html(familyMembersAffected + " spouses, moms, dads, and siblings have lost their loved ones to suicide,");
    return familyMembersAffected;
}

function updateFriends(totalDeaths) {
    var friendsAffected = totalDeaths * 5;
    $('#friends').html(friendsAffected + " people lost their friend to suicide,");
    return friendsAffected;
}

function updateBrokenHearts(totalDeaths, familyTotal, friendsTotal) {
    var brokenHearts = totalDeaths + familyTotal + friendsTotal;
    $('#brokenHearts').html(brokenHearts + " broken hearts because of suicide.");
    return brokenHearts
}

$(function() {
    var newTotal = updateDeaths();
    var newFamilyTotal = updateFamily(newTotal);
    var newFriendsTotal = updateFriends(newTotal);
    var newBrokenHeartsTotal = updateBrokenHearts(newTotal, newFamilyTotal, newFriendsTotal);
    setInterval(updateDeaths, 1000);
    setInterval(updateFamily(updateDeaths()), 1000);
    setInterval(updateFriends(updateDeaths()), 1000);
    setInterval(updateBrokenHearts(newTotal, newFamilyTotal, newFriendsTotal), 1000);
});

var paragraph = "If you know someone who is thinking about suicide, or someone you think MIGHT be thinking of suicide, do yourself a favor and ask them how they are doing. Worst case scenario, you're asking a friend how their day is. Best case? You might just save a life."

$('#paragraph').text(paragraph)



// function updateTime() {
//     serverTime = new Date(serverTime.getTime() + 1000);
//     $('#time').html(serverTime.toGMTString());
// }
//
// $(function() {
//     updateTime();
//     setInterval(updateTime, 1000);
// })
