/* sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

yourSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!". */

function sharkPontoon (sharkDistance, sharkSpeed, pontoonDistance, yourSpeed, dolphin) {
    let sharkTime = sharkDistance / sharkSpeed;
    let yourTime = pontoonDistance / yourSpeed;

    if (dolphin) {
        sharkTime *= 2;
    }

    if (yourTime < sharkTime) {
        return "Alive!"
    } else {
        return "Shark bait!"    
    }
}

console.log (sharkPontoon(20, 1.5, 4, 0.5, true), "Alive!");
console.log (sharkPontoon(20, 1.5, 4, 0.5, false), "Alive!");
console.log (sharkPontoon(12, 1.5, 4, 0.5, false), "Shark bait!");

