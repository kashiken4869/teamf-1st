// headerのjQuery
$(function () {
    $('.burger_btn').on('click', function () {
      $('.burger_btn').toggleClass('close');
      $('.nav_wrapper').toggleClass('slide_in'); // 書き換え
      $('body').toggleClass('noscroll');
    });
  });




const img = [
    "/img_C/kento.png",
    "/img_C/ponta.png",
    "/img_C/kazunori.png",
    "/img_C/keisiro.png",
    "/img_C/kotoki.png",
    "/img_C/momo.png",
    "/img_C/tuyoshi.png",
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

const detailText = [
    "ロイヤルホストのダブルピースかわいいけんてぃ",
    "タワーtoタワーの決め顔ぽんた",
    "新人ハッカソンの笑うかずのり",
    "ボドゲの告白されるてらし",
    "エアビのダイビングことき",
    "神サイクリングのいけいけモモ",
    "たてもくの寝起きつよちゃん",
]

const feature = [
    "はっきり言う",
    "POSSE課題速い",
    "話してみたい",
    "頭脳派",
    "面白い",
    "お菓子つくれる",
    "アルセウスにドハマリ中",

]





const query = location.search;
const value = query.split('=');
const number = value[1]-1

let contents = ""
contents += `<h1 class="detail_title">${memberName[number]}</h1>`
            +`    <div class="detail_contents">`
            +`        <img class="detail_img" src=${img[number]} alt="">`
            +`        <div class="detail_content">`
            +`            <p class="detail_text">${detailText[number]}</p>`
            +`            <p class="detail_price">¥${price[number]} +tax</p>`
            +`            <div class="detail_info">`
            +`                <p class="detail_feature">feature: ${feature[number]}</p>`
            +`                <p class="detail_color">color:　肌色</p>`
            +`                <p class="detail_material">material:　水35ℓ、炭素20kg、アンモニア4ℓ、石灰1.5kg、リン800g、塩分250ｇ、硝石100g。イオウ80g、フッ素7.5g、鉄5g、ケイ素3g、その他少量の15の元素</p>`
            +`            </div>`
            +`        </div>`
            +`    </div>`


document.getElementById("main").insertAdjacentHTML('beforeend', contents);