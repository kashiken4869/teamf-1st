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
// A
'じん',
'こうへい',
'かずき',
'りさ',
'かれん',
'なおき',
'あきら',
'たいき',
// C
"けんてぃ",
"ぽんた",
"かずのり",
"てらし",
"ことき",
"もも",
"つよし",
]


let prize = [99,99999,999,999,99999,99999,99999,99999,  "１億","２億","３億","４億","５億","６億","７億",]

// $(function () {
//   $('.burger_btn').on('click', function () {
//     $('.burger_btn').toggleClass('close');
//     $('.nav_wrapper').toggleClass('slide_in'); // 書き換え
//     $('.nav_wrapper').toggleClass('fade'); // 書き換え
//     $('body').toggleClass('noscroll');
//   });
// });

//ハンバーガーアイコン
$(".menu-btn").click(function () {
  $(this).toggleClass('active');
  $(".topmenu").toggleClass('active');
});

$(".menu-content").click(function () {
  $(".menu-btn").toggleClass('active' , false);
  $(".topmenu").toggleClass('active' , false);
})



let list = document.getElementById('list');
let introduction = document.getElementById('introduction');

var show = 12; //最初に表示する件数
var num = 11;  //clickごとに表示したい件数
var contents = '.list li'; // 対象のlist
$('.more').on('click', function () {
  $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
  if ($(contents + '.is-hidden').length == 0) {
    $('.more').fadeOut();
  }
});

for (let i = 1; i <= names.length; i++) {
  let introduction =
    `<li class="members_a">` +
    `<a href="member1A.html?id=${i}" >` +
    `<div class="img_container">` +
    `<img src="../imgA/iisha${i}.jpg" alt="" class="member_img_a">` +
    `</div>` +
    `<p class="name_a">${names[i-1]}</p>` +
    `<p class="prize_a">¥${prize[i-1]}</p>` +
    `</a>` +
    `</li>`;
  list.insertAdjacentHTML("beforeend",introduction)
  $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');    
}

// for (let i =6; i <24; i+=3 ) {
// $('.name_a').eq(i).addClass('change_color');
// }
// $('.members_a').eq(4).addClass('change_color');

// $(function () {
//   $('.change').on('click', function () {
//     $('.members_a').toggleClass('change_color');
//   });
// });

var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['skyblue', 'pink', 'remon']);//重ねる波の色設定
  // 各キャンバスの初期化
for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
    update();
}

function update() {
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波の重なりを描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.5, 3, 0);//0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか
    drawWave(canvas, color[1], 0.4, 2, 250);
    drawWave(canvas, color[2], 0.2, 1.6, 100);
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for ( let k = yAxis; k <= canvas.width + 10; k += 10) {
        x = t+(-yAxis+k)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(k, unit*y+xAxis);
    }
}

init();


// B's zone



// C's zone
// 配列を作ってjsで繰り返しのhtmlを記述した

// 画像の配列
// const img = [
//   "/img_C/kento.png",
//   "/img_C/ponta.png",
//   "/img_C/kazunori.png",
//   "/img_C/keisiro.png",
//   "/img_C/kotoki.png",
//   "/img_C/momo.png",
//   "/img_C/tuyoshi.png",
// ];
// // 名前の配列
// const memberName = [
//   "けんてぃ",
//   "ぽんた",
//   "かずのり",
//   "てらし",
//   "ことき",
//   "もも",
//   "つよし",
// ]
// // 価格の配列
// const price = [
//   "１億",
//   "２億",
//   "３億",
//   "４億",
//   "５億",
//   "６億",
//   "７億",
// ];

// // 繰り返しのhtml部分
// let contentsC = ""

// for (let i=0; i<memberName.length; i++) {
//   contentsC += `<li id="${i+1}" class="member_C">`
//           +`    <a href="/html/1_C.html?id=${i+1}">`
//           +`        <div class="member_img_wrap_C">`
//           +`          <img class="member_img_C" src="/imgA/iisha${i+9}.png" alt="はにゃ">`
//           +`        </div>`
//           +`        <p class="member_name_C">${memberName[i]}</p>`
//           +`        <p class="member_price_C">¥${price[i]} +tax</p>`
//           +`    </a>`
//           +`</li>`
// };

// // htmlに挿入
// document.getElementById("membersC").insertAdjacentHTML('beforeend', contentsC);


// D's zone