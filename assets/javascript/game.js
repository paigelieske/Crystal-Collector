$(document).ready(function() {
    // creates random target number
    var computerGuess = Math.floor(Math.random() * 101+19);
    $(".randomNumber").text(computerGuess);
    console.log("Target: " + computerGuess);

    // variables for random gem values
    var randomGemOne = Math.floor(Math.random() * 11+1);
    var randomGemTwo = Math.floor(Math.random() * 11+1);
    var randomGemThree = Math.floor(Math.random() * 11+1);
    var randomGemFour = Math.floor(Math.random() * 11+1);

    // variables for gem totals, wins, and losses
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    //game reset after win or loss
    function reset () {
        console.clear();
        computerGuess = Math.floor(Math.random() * 101+19);
        $(".randomNumber").text(computerGuess);
        console.log("Target = " + computerGuess);
        randomGemOne = Math.floor(Math.random() * 11+1);
        randomGemTwo = Math.floor(Math.random() * 11+1);
        randomGemThree = Math.floor(Math.random() * 11+1);
        randomGemFour = Math.floor(Math.random() * 11+1);
        $(".total").text(userTotal=0);
    }
    //win function
    function congrats () {
        wins++;
        $(".totalWins").text("Wins: " + wins);
        alert ("Congratulations - you won!");
        reset();
    }

    //loss function
    function tryAgain () {
        losses++;
        $(".totalLosses").text("Losses: " + losses);
        alert ("You lost - try again");
        reset();
    }

    //adds together the values of each gem click, placing the running total inside the userTotal variable
    //provides instructions one the userTotal matches or surpasses the target
    $("#one").on("click", function () {
        console.log("Green = " + randomGemOne);
        userTotal = randomGemOne + userTotal;
        console.log("New user total = " + userTotal);
        $(".total").text(userTotal);
        if (userTotal === computerGuess) {
            congrats();
        }
        else if (userTotal > computerGuess) {
            tryAgain();
        }
    })

    $("#two").on("click", function () {
        console.log("Purple = " + randomGemTwo);
        userTotal = randomGemTwo + userTotal;
        console.log("New user total = " + userTotal);
        $(".total").text(userTotal);
        if (userTotal === computerGuess) {
            congrats();
        }
        else if (userTotal > computerGuess) {
            tryAgain();
        }
    })

    $("#three").on("click", function () {
        console.log("Red = " + randomGemThree);
        userTotal = randomGemThree + userTotal;
        console.log("New user total = " + userTotal);
        $(".total").text(userTotal);
        if (userTotal === computerGuess) {
            congrats();
        }
        else if (userTotal > computerGuess) {
            tryAgain();
        }
    })

    $("#four").on("click", function () {
        console.log("Yellow = " + randomGemFour);
        userTotal = randomGemFour + userTotal;
        console.log("New user total = " + userTotal);
        $(".total").text(userTotal);
        if (userTotal === computerGuess) {
            congrats();
        }
        else if (userTotal > computerGuess) {
            tryAgain();
        }
    })
})
