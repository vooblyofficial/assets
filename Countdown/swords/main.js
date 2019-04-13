window.onload = function(){
    var leftX = document.getElementsByClassName('left-x');
    var rightX = document.getElementsByClassName('right-x');
    
    var len = leftX.length;
    var arr = [];
    
    //init our array
    for(var i = 0; i < len; i++){
      arr.push(i);
    }
    
    //var rand = Math.floor(Math.random() * arr.length);
    
  var crossSwords = setInterval(function(){
      
      var rand = arr[Math.floor(Math.random() * arr.length)];
      
      arr.splice( arr.indexOf(rand), 1 );
      
      if(!leftX[rand].classList.contains('left-x-slide-in')){
        leftX[rand].classList.add('left-x-slide-in');
        rightX[rand].classList.add('right-x-slide-in');
      }
      
      
      //check if all our elements have the animation class
      var slideLen = document.getElementsByClassName('right-x-slide-in');
      
      //we want to stop the interval when our animation is complete
      
      if(slideLen.length === rightX.length){
        console.log("done");
        clearInterval(crossSwords);
      }
      
          
    }, 80);
  };