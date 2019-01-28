var Back = function(speed){
  this.grassImage = loadImage( './image/' + 'grass' + '.png');
  this.grassX = windowWidth - this.grassImage.width;
  this.grassY = 0;
  this.speed = speed;

  this.draw = function(){
    background(128, 255, 255);

    this.grassX+=this.speed;
    if(this.grassX>=windowWidth){
      this.grassX = windowWidth - this.grassImage.width;
    }
    if(this.grassX>=0){
      image(this.grassImage,this.grassX,this.grassY,this.grassImage.width,windowHeight);
      image(this.grassImage,this.grassX - this.grassImage.width,this.grassY,this.grassImage.width,windowHeight);
    }else{
      image(this.grassImage,this.grassX,this.grassY,this.grassImage.width,windowHeight);
    }
  };
};
