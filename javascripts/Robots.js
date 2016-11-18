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