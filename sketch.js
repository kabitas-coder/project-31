const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Mater.Body;

var rain;

// function preload(){}
    


function setup(){
   createCanvas (600,1000);
    engine = Engine.create();
    world = engine.world;

    rain = new Rain(900,10,5,5);
}

function draw(){
    
}   

