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

var paragraph1 = "If you are thinking of committing suicide, please reconsider. Listed below are resources available for you to find emotional refuge."

$('#paragraph1').text(paragraph1)

var paragraph2 = "If you know someone who is thinking about suicide, or someone you think MIGHT be thinking of suicide, do yourself a favor and ask them how they are doing. Worst case scenario, you're asking a friend how their day is. Best case? You might just save a life."

$('#paragraph2').text(paragraph2)

var paragraph3 = "On June 20th, 2015, I found out that one of my closest friends had commited suicide. Even now when I reread the message, I still shudder in disbelief when I read the words 'Jesse passed away yesterday'. Even though some time has passed, I'm still processing the idea that he is no longer with us, and I think I will be spending the rest of my life wrapping my head around that fact. The most hurtful thing about the whole ordeal is that I actually knew he had suicidal tendencies, and that he was depressed, but didn't do anything about it. And because of that I can't help but to blame myself."

$('#paragraph3').text(paragraph3)

var paragraph4 = "This is why I have dedicated this website to Jesse and everyone who has commited suicide or is thinking about suicide, and from now on I will not let another person slip through my fingers like that. Moreover, I want to be able to spread this message to people all around because chances are you and everyone else knows someone who is suffering in the same way, and I truly believe that it is part of our biological and evolutionary responsibility to help them."

$('#paragraph4').text(paragraph4)

// function updateTime() {
//     serverTime = new Date(serverTime.getTime() + 1000);
//     $('#time').html(serverTime.toGMTString());
// }
//
// $(function() {
//     updateTime();
//     setInterval(updateTime, 1000);
// })
