'use strict';

// A's zone

//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1000).fadeOut('slow');//ローディング画面を1秒（1000ms）待機してからフェードアウト
  $("#splash_logo").delay(900).fadeOut('slow');//ロゴを0.9秒（900ms）待機してからフェードアウト
});

// $(function () {
//     $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
//         $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
//     })
// });

// $(".openbtn2").click(function () {
//     $(this).toggleClass('active');
// });

const names = [
'じん',
'こうへい',
'かずき',
'りさ',
'かれん',
'なおき',
'あきら',
'たいき',
'じん',
'こうへい',
'かずき',
'りさ',
'かれん',
'なおき',
'あきら',
'たいき',
'じん',
'こうへい',
'かずき',
'りさ',
'かれん',
'なおき',
'あきら'
]

let prize = [99,99999,999,999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999,99999
]

$(function () {
  $('.burger_btn').on('click', function () {
    $('.burger_btn').toggleClass('close');
    $('.nav_wrapper').toggleClass('slide_in'); // 書き換え
    $('body').toggleClass('noscroll');
  });
});

let list = document.getElementById('list')
let introduction = document.getElementById('introduction')

var show = 12; //最初に表示する件数
var num = 11;  //clickごとに表示したい件数
var contents = '.list li'; // 対象のlist
$('.more').on('click', function () {
  $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
  if ($(contents + '.is-hidden').length == 0) {
    $('.more').fadeOut();
  }
});

for (let i = 1; i < 24; i++) {
  let introduction =
    `<li class="members_a">` +
    `<a href="member1A.html?id=${i}" >` +
    // `<input type="button" href="member1A.html" id="id01" value="" onclick="GetQueryString(this);">` +
    `<img src="../imgA/iisha${i}.jpg" alt="" class="member_img_a">` +
    `<p class="name_a">${names[i-1]}</p>` +
    `<p class="prize_a">¥${prize[i-1]}</p>` +
    `</a>` +
    `</li>`;
  list.insertAdjacentHTML("beforeend",introduction)
  $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');    
}


// B's zone



// C's zone
// 配列を作ってjsで繰り返しのhtmlを記述した

// 画像の配列
const img = [
  "/img_C/kento.png",
  "/img_C/ponta.png",
  "/img_C/kazunori.png",
  "/img_C/keisiro.png",
  "/img_C/kotoki.png",
  "/img_C/momo.png",
  "/img_C/tuyoshi.png",
];
// 名前の配列
const memberName = [
  "けんてぃ",
  "ぽんた",
  "かずのり",
  "てらし",
  "ことき",
  "もも",
  "つよし",
]
// 価格の配列
const price = [
  "１億",
  "２億",
  "３億",
  "４億",
  "５億",
  "６億",
  "７億",
];

// 繰り返しのhtml部分
let contentsC = ""

for (let i=img.length-1; i>=0; i--) {
  contentsC += `<li id="${i+1}" class="member_C">`
          +`    <a href="/html/1_C.html?id=${i+1}">`
          +`        <div class="member_img_wrap_C">`
          +`          <img class="member_img_C" src="${img[i]}" alt="はにゃ">`
          +`        </div>`
          +`        <p class="member_name_C">${memberName[i]}</p>`
          +`        <p class="member_price_C">¥${price[i]} +tax</p>`
          +`    </a>`
          +`</li>`
};

// htmlに挿入
document.getElementById("membersC").insertAdjacentHTML('beforeend', contentsC);


// D's zone