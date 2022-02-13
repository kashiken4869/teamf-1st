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
    $('.nav_wrapper').toggleClass('fade'); // 書き換え
    $('body').toggleClass('noscroll');
  });
});

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

for (let i = 1; i < 24; i++) {
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

for (let i =1; i <24; i+=3 ) {
$('.members_a').eq(i).addClass('change_color');
}
// $('.members_a').eq(4).addClass('change_color');

// $(function () {
//   $('.change').on('click', function () {
//     $('.members_a').toggleClass('change_color');
//   });
// });




// B's zone



// C's zone



// D's zone