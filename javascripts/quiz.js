"use strict";

let Robot = require('./Robots.js');
$("#robotSelect").hide();
$("#robotFight").hide();
$(".playa").hide();
let playerOne = new Robot.Robot();
let playerTwo = new Robot.Robot();


$("#submit").click(function() {
    playerOne.playerName = $('#playerOne').val();
    playerTwo.playerName = $('#playerTwo').val();
    console.log("player One", playerOne);
    console.log("player Two", playerTwo);
    $("#gameStart").hide();
    $("#robotSelect").show();
});

$('.playerOneCards').click(function(event) {
    if (event.target.innerHTML === 'Helocopter') {
        console.log('clickasdf');
        playerOne.prototype = new Robot.HeloCop();
    }
    if (event.target.innerHTML === 'Mini Jet') {
        console.log('clickasdf');
        playerOne.prototype = new Robot.MiniJet();
    }
    if (event.target.innerHTML === 'Organic Ai') {
        console.log('clickasdf');
        playerOne.prototype = new Robot.Person();
    }
    if (event.target.innerHTML === 'Uncle Sam') {
        console.log('clickasdf');
        playerOne.prototype = new Robot.UncleSam();
    }
    if (event.target.innerHTML === 'Mini Tank') {
        console.log('clickasdf');
        playerOne.prototype = new Robot.MiniTank();
    }
    if (event.target.innerHTML === 'Brawler') {
        console.log('clickasdf');
        playerOne.prototype = new Robot.Brawler();
    }
});

$('.playerTwoCards').click(function(event) {
    if (event.target.innerHTML === 'Helocopter') {
        playerTwo.prototype = new Robot.HeloCop();
    }
    if (event.target.innerHTML === 'Mini Jet') {
        playerTwo.prototype = new Robot.MiniJet();
    }
    if (event.target.innerHTML === 'Organic Ai') {
        playerTwo.prototype = new Robot.Person();
    }
    if (event.target.innerHTML === 'Uncle Sam') {
        playerTwo.prototype = new Robot.UncleSam();
    }
    if (event.target.innerHTML === 'Mini Tank') {
        playerTwo.prototype = new Robot.MiniTank();
    }
    if (event.target.innerHTML === 'Brawler') {
        playerTwo.prototype = new Robot.Brawler();
    }
});



$("#fight").click(function() {
    $("#robotSelect").hide();
    $("#robotFight").show();
    $(".playa").show();
    playerOne.prototype.damage = Math.floor(Math.random() * (20 - 11) + 11);
    playerTwo.prototype.damage = Math.floor(Math.random() * (20 - 11) + 11);
    playerOne.playerName = $("#playerOne").val();
    console.log(playerOne.prototype.weapon);
    console.log(playerTwo.prototype.weapon);
    $(".playerCard").html(`<h2 class="playerName">${playerOne.playerName}</h2><h3 class="robotName">Robot Name:${playerOne.prototype.name}</h3><h4 class="weapon">Weapon: ${playerOne.prototype.weapon}</h4><h4 class="damage">Weapon Damage Around:${playerOne.prototype.damage}</h4><h3 class="Health oneHealth">Health:${playerOne.health}</h4>`);
    $(".playerCard2").html(`<h2 class="playerName">${playerTwo.playerName}</h2><h3 class="robotName">Robot Name:${playerTwo.prototype.name}</h3><h4 class="weapon">Weapon: ${playerTwo.prototype.weapon}</h4><h4 class="damage">Weapon Damage Around:${playerTwo.prototype.damage}</h4><h3 class="Health twoHealth">Health:${playerTwo.health}</h4>`);
});

$('#attk').click(function(event) {





    if (event) {
        playerOne.prototype.damage = Math.floor(Math.random() * (20 - 11) + 11);
        playerTwo.prototype.damage = Math.floor(Math.random() * (20 - 11) + 11);
        $("#winnerOut").html(" Player One Damage This Hit--" + playerOne.prototype.damage + " | Player Two Damage This Hit --" + playerTwo.prototype.damage);
        playerOne.health = (playerOne.health) - (playerTwo.prototype.damage);
        $(".oneHealth").html("Health: " + playerOne.health);

        if (playerOne.health > 0) {

            playerTwo.health = (playerTwo.health) - (playerOne.prototype.damage);
            $(".twoHealth").html("Health: " + playerTwo.health);

            if (playerTwo.health <= 0) {
                $('#attk').unbind().disabled = true;
                $('#attk').hide();
                $("#winnerOut").html("K.O.! " + playerOne.playerName + 'Wins!');
                $(".twoHealth").html("Health: 0");
            }


        } else {
            $('#attk').unbind().disabled = true;
            $('#attk').hide();
            $("#winnerOut").html("K.O.! " + playerTwo.playerName + " WINS!");
            $(".oneHealth").html("Health: 0");


        }
    }

});