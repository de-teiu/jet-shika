var DividedImage = function(filePath,unitWidth,unitHeight){
  this.imageData = loadImage(filePath);
  this.unitWidth = unitWidth;
  this.unitHeight = unitHeight;
  this.patternNum = 0;

  this.getPatternCount = function(){
    return (this.imageData.width / this.unitWidth) *  (this.imageData.height / this.unitHeight);
  };

  this.draw = function(x,y,num){
    var xPattern = this.imageData.width / this.unitWidth;
    var startY = Math.floor(num / xPattern) * this.unitHeight;
    var startX = (num % xPattern) * this.unitWidth;

    //console.log(startX,startY);
    image(this.imageData,startX,startY,this.unitWidth,this.unitHeight,x,y,this.unitWidth,this.unitHeight);
  };

  this.blendDraw = function(x,y,num,blendMode){
    var xPattern = this.imageData.width / this.unitWidth;
    var startY = Math.floor(num / xPattern) * this.unitHeight;
    var startX = (num % xPattern) * this.unitWidth;
    //console.log(blendMode);
    blend(this.imageData,startX,startY,this.unitWidth,this.unitHeight,x,y,this.unitWidth,this.unitHeight,blendMode);

  };
};
