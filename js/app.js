'use-strict';

var serverTime = new Date();

function updateDeaths(updateFlag) {
    var total2015Suicides = 788000;
    var currentYearlyRate = 788000;
    var currentRatePerMinute = currentYearlyRate / 365 / 24 / 60;
    serverTime = new Date(serverTime.getTime() + 1000);
    var newYears2015 = new Date("January 1, 2015, 00:00:00")
    var deathsSince = Math.ceil((serverTime.getTime() - newYears2015.getTime()) / 1000 / 60 * currentRatePerMinute);
    var totalDeaths = total2015Suicides + deathsSince;
    if(updateFlag) {
        $('#deaths').html(totalDeaths + " souls who have commited suicide,");
    }
    return totalDeaths
}

function updateFamily(totalDeaths, updateFlag) {
    var familyMembersAffected = totalDeaths * 3;
    if(updateFlag) {
        $('#family').html(familyMembersAffected + " spouses, moms, dads, and siblings have lost their loved ones to suicide,");
    }
    return familyMembersAffected;
}

function updateFriends(totalDeaths, updateFlag) {
    var friendsAffected = totalDeaths * 5;
    if(updateFlag) {
        $('#friends').html(friendsAffected + " people lost their friend to suicide,");
    }
    return friendsAffected;
}

function updateBrokenHearts(totalDeaths, familyTotal, friendsTotal, updateFlag) {
    var brokenHearts = totalDeaths + familyTotal + friendsTotal;
    if(updateFlag) {
        $('#brokenHearts').html(brokenHearts + " broken hearts because of suicide.");
    }
    return brokenHearts
}

$(function() {
    var newTotal = updateDeaths(true);
    var newFamilyTotal = updateFamily(newTotal, true);
    var newFriendsTotal = updateFriends(newTotal, true);
    var newBrokenHeartsTotal = updateBrokenHearts(newTotal, newFamilyTotal, newFriendsTotal, true);

    setTimeout(function() {
        setInterval(function() {
            newTotal = updateDeaths(false)
            $('#deaths').html(newTotal);
            //console.log("test")
        }, 1000);
    }, 0);

    setTimeout(function() {
        setInterval(function() {
            newFamilyTotal = updateFamily(newTotal, false)
            $('#family').html(newFamilyTotal);
            //console.log("famtest")
        }, 1000);
    }, 250);

    setTimeout(function() {
        setInterval(function() {
            newFriendsTotal = updateFriends(newTotal, false)
            $('#friends').html(newFriendsTotal);
            //console.log("friendtest")
        }, 1000);
    }, 500);

    setTimeout(function() {
        setInterval(function() {
            newBrokenHeartsTotal = updateBrokenHearts(newTotal, newFamilyTotal, newFriendsTotal, false)
            $('#brokenHearts').html(newBrokenHeartsTotal);
            //console.log("brokenHeartTest")
        }, 1000);
    }, 750);
});

var paragraph1 = "If you are thinking of committing suicide, please take a moment and reconsider. Listed below are resources available for you to find emotional refuge."

$('#paragraph1').text(paragraph1)

var paragraph2 = "If you know someone who is thinking about suicide, or someone you think MIGHT be thinking of suicide, do yourself a favor and ask them how they are doing. Worst case scenario, you're asking a friend how their day is. Best case? You might just save a life."

$('#paragraph2').text(paragraph2)

// function updateTime() {
//     serverTime = new Date(serverTime.getTime() + 1000);
//     $('#time').html(serverTime.toGMTString());
// }
//
// $(function() {
//     updateTime();
//     setInterval(updateTime, 1000);
// })
