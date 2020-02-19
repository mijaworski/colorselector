//Selected color must be displayed as (a color, HEX, RGB, HSL)
"use strict";

let colorWheel;
let hex;
let hsl;

window.addEventListener("load", startup, false);
const HTML = [];

function startup() {
    colorWheel = document.querySelector("#colorwheel");
    //colorWheel.value = defaultColor;
    HTML.colorSelector = document.querySelector("#colorwheel");
    HTML.colorSquare = document.querySelector("#color");
    colorWheel.addEventListener("input", update);
    HTML.colorSelector.addEventListener("change", displayedColor);
    colorWheel.select();
}

function update(event) {
    var p = document.querySelector("body > div.selector > div");

    if (p) {
        p.style.backgroundColor = event.target.value;
    }
}

function displayedColor() {
    console.log(this.value);
    hex = document.querySelector("#colorwheel").value;
    document.querySelector("#HEX").textContent = "HEX: " + hex;
    //document.getElementById("HEX").innerHTML = `HEX: ` + theInput.value;
    //let theInput = document.getElementById("colorwheel");
    //const hexCode = theInput.value;
    //theInput.addEventListener("input", function() {
    //Changing the HEX code of
    //  document.getElementById("HEX").innerHTML = `HEX: ` + theInput.value;
    theRGB();
    // });
}

function theRGB() {
    let r, g, b;

    console.log(hex);

    r = hex.substring(1, 3);
    g = hex.substring(1, 3);
    b = hex.substring(1, 3);

    console.log(r, g, b);

    r = parseInt(r, 16);
    g = parseInt(b, 16);
    b = parseInt(g, 16);

    console.log(r, g, b);
    //Using theInput.value to get RGB string, which will be divided into three parts

    //const rgbCode = {
    //  r: Number.parseInt(hexCode.substring(1, 2), 16),
    // g: Number.parseInt(hexCode.substring(3, 4), 16),
    // b: Number.parseInt(hexCode.substring(5, 6), 16)
    //};

    document.querySelector("#RGB").innerHTML = `RGB: (${r},${g},${b})`;
    theHSL(r, g, b);

    //theInput(r, g, b);
}

function theHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
        h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / Math.min(l, 1 - l);
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log(h, s, l); // just for testing

    h = Math.round((h * 100) / 100);
    s = Math.round((s * 100) / 100);
    l = Math.round((l * 100) / 100);

    document.querySelector("#HSL").textContent = `HSL: (${h},${s}%,${l}%)`;
}

//document.getElementById("RGB").innerHTML = getTheRGB;

//RGBstringy();

//function getTheHSL() {

//}

//function updateAll(event) {
//  document.querySelectorAll("p").forEach(function(p) {
//    p.style.color = event.target.value;
//});
//}