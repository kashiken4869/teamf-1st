'use strict';

// A's zone



// B's zone



// C's zone
const img = [
    "./img_C/kento.png",
    "./img_C/ponta.png",
    "./img_C/kazunori.png",
    "./img_C/keisiro.png",
    "./img_C/kotoki.png",
    "./img_C/momo.png",
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
    "２億",
    "３億",
    "４億",
    "５億",
    "６億",
    "７億",
];


let contents = ""

for (let i=img.length-1; i>=0; i--) {
    contents += `<li id="${i+1}" class="member_C">`
            +`    <a href="./html/1_C.html?id=${i+1}">`
            +`        <div class="member_img_wrap_C">`
            +`          <img class="member_img_C" src="${img[i]}" alt="はにゃ">`
            +`        </div>`
            +`        <p class="member_name_C">${memberName[i]}</p>`
            +`        <p class="member_price_C">¥${price[i]} +tax</p>`
            +`    </div>`
            +`</li>`
};


document.getElementById("membersC").insertAdjacentHTML('beforeend', contents);


// D's zone