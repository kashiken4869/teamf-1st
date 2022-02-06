'use strict';

// A's zone



// B's zone



// C's zone
const img = [
    "./img_C/tuyoshi.png",
    "./img_C/tuyoshi.png",
    "./img_C/tuyoshi.png",
    "./img_C/tuyoshi.png",
    "./img_C/tuyoshi.png",
    "./img_C/tuyoshi.png",
    "./img_C/tuyoshi.png",
];
const memberName = [
    "けんてぃ",
    "ぽんた",
    "かずのり",
    "てらし",
    "ことき",
    "もも",
    "つよし",
]
const price = [
    "１億",
    "１億",
    "１億",
    "１億",
    "１億",
    "１億",
    "１億",
];
const a = {
    
}

let contents = ""
console.log(img.length)
for (let i=img.length-1; i>=0; i--) {
    contents += `<li class="member_C">`
            +`    <a href="./">`
            +`        <img class="member_img_C" src="${img[i]}" alt="はにゃ">`
            +`        <p class="member_name_C">${memberName[i]}</p>`
            +`        <p class="member_price_C">${price[i]} + tax</p>`
            +`    </a>`
            +`</li>`
};


document.getElementById("membersC").insertAdjacentHTML('beforeend', contents);


// D's zone