var Effect = function(imgData){
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
    this.count++;
    var patternNum = Math.floor(this.count / this.animeSpeed);
    this.imageData.draw(this.x,this.y,patternNum);
  };

  this.isEnd = function(){
    //console.log(this.count , this.imageData.patternNum , this.animeSpeed);
    if(this.count > this.imageData.getPatternCount() * this.animeSpeed){
      return true;
    }
    return false;
  };

};
