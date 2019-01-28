var back;

var shikaImg;
var effectImage;
var speed=50;
var shikaCount=20;

var shika = [];

var effects = [];

function preload(){
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canv");

  back = new Back(speed);
  shikaImg = new DividedImage('./image/' + 'shika' + '.PNG',96,96);
  effectImage = new DividedImage('./image/effect.png',360,360);
}

function setup() {
  frameRate(60);
  shika.length=0;
  shikaCount = (windowWidth*windowHeight/96/96)/3;
  for(var i=0;i<shikaCount;i++){
    var sk = new Shika(shikaImg);
    sk.start(random(windowWidth-96),random(windowHeight-96),2);
    shika.push(sk);
  }
}

function draw(){

  if(effects.length===0){
    var ef = new Effect(effectImage);
    ef.start(random(windowWidth-180),random(windowHeight-180),3);
    effects.push(ef);
  }



  //背景の描画
  back.draw();

  //鹿描画
  shika.sort(function(a,b){
    if(a.y<b.y) return -1;
    if(a.y > b.y) return 1;
    return 0;
  });
  fill(64,64,64,128);
  noStroke();
  shika.forEach(function(value) {
    value.draw();
  });

  //エフェクト描画
  for(var i=0;i<effects.length;i++){
    effects[i].draw();
    if(effects[i].isEnd()){
      effects.splice(i,1);
      i--;
    }
  }
}



//ウィンドウリサイズイベント
var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        console.log('resized');
        //キャンバス再描画
        resizeCanvas(windowWidth, windowHeight);
        setup();
    }, 200);
});
