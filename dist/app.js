(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function Robot(){
	this.health = Math.floor(Math.random() * (95 - 50) + 50);
	this.playerName = "";
}
function Drone(){
	this.legs = false;
	this.weapon = "Napalm";
	this.exterior = "Carbon Fiber";
	
}

Drone.prototype = new Robot();

function HeloCop(){
	this.weapon="Exploding Napalm";
	this.name="Helocopter";


}

HeloCop.prototype = new Drone();

function MiniJet(){
	this.weapon = "Mini Missles";
	this.name="Mini Jet";

}

MiniJet.prototype = new Drone();

function Ai(){
	this.exterior = "Aluminum";
	
}

Ai.prototype = new Robot();

function Person(){
	this.weapon = "Super Punch";
	this.name="Randal";

}

Person.prototype = new Ai();

function UncleSam() {
	this.weapon= "Freedom Spears";
	this.name= "Uncle Sam";
}

UncleSam.prototype = new Ai();
function FourWheels(){
	this.weapon = "Flaming Axe";
	this.exterior= "Steel";
	
}

FourWheels.prototype = new Robot();

function MiniTank(){
	this.name="Mini Tank";
	this.weapon="Mini Cannon";
}

MiniTank.prototype = new FourWheels();


function Brawler(){
	this.name="Brawler";
	this.weapon="Face Spikes";
}

Brawler.prototype = new FourWheels();

module.exports = {Robot , Drone , Ai , FourWheels , HeloCop , MiniJet, Person , UncleSam , MiniTank , Brawler};
},{}],2:[function(require,module,exports){
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
},{"./Robots.js":1}]},{},[2]);
