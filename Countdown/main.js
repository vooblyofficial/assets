window.onload = () => {
    let scenes = document.querySelectorAll('.scene');
    let transition = document.querySelector('.transition');
    let i = 0;
   
      var interval = setInterval(() => {
        //[0, 1, 2]
          scenes[i].style.zIndex = i;

        
        if(i == scenes.length - 1){
          //reset
          scenes.forEach((div) => {
            div.style.zIndex = -1;
          });
          i = 0;
        } else {
          i++;
        }

      }, 11000);
    
  }