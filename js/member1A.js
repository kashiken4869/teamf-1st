'use strict';

let name_title = [
'じん','こうへい','かずき','りさ','かれん','なおき','あきら',
'たいき','じん','こうへい','かずき','りさ','かれん','なおき','あきら','たいき','じん','こうへい','かずき','りさ','かれん','なおき','あきら'
]

let prize = [
99999,95999,949999,399,1999,9,49999,69999,99,9999,999,9,99999,9999,999,99,9,99999,9999,999,99,9,99999
]

let thinking = [
'たのしい','辛い','悲しい','かわいい','面白くない','つまんない','骨折','写真ない',
'たのしい','辛い','悲しい','かわいい','面白くない','つまんない','骨折'
]

let naoki = document.getElementById('naoki')


    function GetQueryString()
{
    var result = {};
    if( 1 < window.location.search.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

            // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }

    // console.log(id)
    return result;
}

let result = GetQueryString()


let text = 
    `<div class="containerA aboutA"> ` +
    `    <h1 class="name_title">${name_title[result["id"]-1]}</h1> ` +
    `    <div class="about_container_a"> ` +
    `        <div class="member_img change-img"> ` +
    `            <img src="../imgA/iisha${result["id"]}.jpg" alt=""> ` +
    `            <img src="../imgA/iisha${result["id"]+11}.jpg" alt=""> ` +
    `            <img src="../imgA/iisha${result["id"]+12}.jpg" alt=""> ` +
    `        </div> ` +
    `        <div class="member_text"> ` +
    `            <p class="text1">${prize[result["id"]-1]}</p> ` +
    `            <p class="text2">${thinking[result["id"]-1]}</p> ` +
    `            <p class="text3"></p> ` +
    `            <dl class="graph_a"> ` +
    `                <dt class="element_a">所持金</dt> ` +
    `                <dd class="number_a">10700円</dd> ` +
    `                <dt class="element_a">お家</dt> ` +
    `                <dd class="number_a">妙蓮寺</dd> ` +
    `                <dt class="element_a">家賃</dt> ` +
    `                <dd class="number_a">70000円</dd> ` +
    `            </dl> ` +
    `        </div> ` +
    `    </div> ` +
    `</div> ` ;
    naoki.insertAdjacentHTML("beforeend",text)

// 画面切り替えアニメーション
// for (let i = 1; i < 4; i++) {
  $(function () {
    var setImg = '.change-img';
    var fadeSpeed = 2000;
    var switchDelay = 3000;

    $(setImg).children('img').css({ opacity: '0' });
    $(setImg + ' img:first').stop().animate({ opacity: '1', zIndex: '20' }, fadeSpeed);

    setInterval(function () {
        $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed).next('img').animate({ opacity: '1' }, fadeSpeed).end().appendTo(setImg);
    }, switchDelay);
});
// }