var Shika = function(imgData){
  this.imageData = imgData;
  this.animeSpeed = 0;
  this.x=0;
  this.y=0;
  this.count=0;
  this.start = function(x,y,animeSpeed){
    this.x=x;
    this.y=y;
    this.animeSpeed=animeSpeed;
    this.count=0;
  };

  this.draw = function(){
    var wid = this.imageData.unitWidth;
    var hei = this.imageData.unitHeight;
    this.x+= random(4)-2;
    this.y+= random(4)-2;
    if(this.x<0){
      this.x=0;
    }
    if(this.x>windowWidth-wid){
      this.x=windowWidth-wid;
    }
    if(this.y<0){
      this.y=0;
    }
    if(this.y>windowHeight-hei){
      this.y=windowHeight-hei;
    }

    this.count++;
    if(this.count >= this.imageData.getPatternCount() * this.animeSpeed){
      this.count=0;
    }

    var patternNum = Math.floor(this.count / this.animeSpeed);
    ellipse(this.x+48, this.y+96, 48, 10);
    this.imageData.draw(this.x,this.y,patternNum);
  };
};
