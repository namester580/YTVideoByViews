/**
 * Created by CoBLiN on 2016/09/02.
 */
var Nightmare = require('nightmare');
//var nightmare = Nightmare({ show: true });
var request = require('request');
var maxViews = 5;
var link = '';
var strt = function(){
    var nightmare = Nightmare({ show: false });
    console.log('starty');
nightmare
    .goto('http://randomyoutube.net/watch')
    // .exis
    // .wait('.commentMessage')
    .wait('.youtube-player')
    .evaluate(function(){
var lnk =document.querySelector('.youtube-player').src;
        var rt = lnk.replace("embed/", "watch?v=");
         rt = rt.replace("?autoplay=1", "");
        return rt

    }).end()
    .then(function(result){
      //  console.log(result);
link = result;
 rq(result);

    }).catch(function(error){
console.log(error)


    })
}

function rq(r){
    console.log(r)
    var nightmare2 = Nightmare({ show: false });
nightmare2.goto(r)
    .wait('.watch-view-count')
    .evaluate(function(){
var t =document.querySelector('.watch-view-count').innerText.trim()
    t = t.slice(0,t.length-6);
        return t
    }).end()
    .then(function(r){

console.log('max views:' + maxViews)
        console.log('views: ' + parseInt(r))
if (parseInt(r)<=maxViews||r === 'no'||r === 'No'){
    console.log('yes');
    var nightmare = Nightmare({ show: true });
    nightmare.goto(link).then(function(){

console.log(link);


    })

}else
{
st()

  console.log('no try again');
}
    })

}
strt();
function st(){

    strt()


}
