// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var image = document.getElementsByTagName('img')[0];
  var audio = document.getElementsByTagName('audio')[0];
  var button = document.getElementsByTagName('button')[0];
  var menu = document.getElementById('horn-select');
  var audimg = document.getElementsByTagName('img')[1];
  var slider = document.getElementById('volume');
  const jsConfetti = new JSConfetti()
  var PC = false;


  menu.addEventListener('input', party);
  button.addEventListener('click', noparty);
  slider.addEventListener('change', yeparty);

  function party(para){
    if(para.target.value == 'party-horn'){
      image.setAttribute('src', 'assets/images/party-horn.svg');
      audio.setAttribute('src', 'assets/audio/party-horn.mp3');
      PC =true;
    }else if(para.target.value == 'car-horn'){
      image.setAttribute('src', 'assets/images/car-horn.svg');
      audio.setAttribute('src','assets/audio/car-horn.mp3');
      PC = false;
    }else if(para.target.value == 'air-horn'){
      image.setAttribute('src', 'assets/images/air-horn.svg');
      audio.setAttribute('src','assets/audio/air-horn.mp3');
      PC = false;
    }else{
      image.setAttribute('src', 'assets/images/no-image.svg');
      PC = false;
    }
  }

    function noparty(){
      audio.play();
      if(PC == true){
        jsConfetti.addConfetti();
      }
    }

    function yeparty(){
      audio.volume = (slider.value)/100.0;
      if(slider.value == 0){
        audimg.setAttribute('src', 'assets/icons/volume-level-0.svg');
      }else if(slider.value < 33){
        audimg.setAttribute('src', 'assets/icons/volume-level-1.svg');
      }else if(slider.value < 67){
        audimg.setAttribute('src','assets/icons/volume-level-2.svg');
      }else{
        audimg.setAttribute('src','assets/icons/volume-level-3.svg');
      }
    }
}
