/*Use window.onload for executed the code after of load the HTML document*/
 window.onload = () => {

  //Save the button in a variable
  let buttonServe = document.getElementById('button-serve');
  //Save the videos in a variable.
  let cupVideo = document.getElementById('cup');
  let smokeVideo = document.getElementById('cup-smoke');
  //Cup state
  let cupState = 'empty';


  //Squeeze the serve button
  buttonServe.onclick = () => {
    //It will see if the cup is empty

    if (cupState === 'empty') {
      //It is going to play the cup serving.
      playVideo(cupVideo);
      //When finish the first video. It is going to hide.
      cupVideo.onended = () => {
        hideVideo(cupVideo);
        //It is going to show the steaming cup.
        showVideo(smokeVideo);
        //It's going to play the video.
        playVideo(smokeVideo,'loop');
        //It's going to rewind the teapot video serving.
        rewindVideo(cupVideo);
         //Update cup state to full.
        cupState = 'full';
      };
    }
  };



  //Drink button variable
  let buttonDrink = document.getElementById('button-drink');
  //Drink video variable
  let drinkVideo = document.getElementById('cup-drink');

  //Squeeze the drink button
  buttonDrink.onclick = ()=>{
  //It will se if the cup is full.
  if(cupState === 'full'){
  //It is going to hide the cup video steaming.
  hideVideo(smokeVideo);
  //It is going to show the drinking cup.
  showVideo(drinkVideo);
  //It's going to play the video.
  playVideo(drinkVideo);
  //It's going to rewind the cup video steaming.
  rewindVideo(smokeVideo);
  //When finish the video.
  drinkVideo.onended = ()=>{
    //It's going to show the cup video.
    showVideo(cupVideo);
    //It's going to hide the cup video drinking.
    hideVideo(drinkVideo);
    //It's going to rewind the cup video drinking.
    rewindVideo(drinkVideo);
    
  }
  //Update cup state to empty. 
  cupState = 'empty';
  }

  
  }
  
  
  
  
  
  
  




};






//Declarate playVideo function
function playVideo(video,looper){
    if(looper == 'loop'){
        video.loop = true;
    }
    video.play();
}


//Declarate hideVide function
function hideVideo(video){
   video.classList.add('display-none');
}


//Declarate showVideo function
function showVideo(video){
    video.classList.remove('display-none');
}


//Declarate rewindVideo function
function rewindVideo(video){
    video.pause();
    video.currentTime = 0;
}



