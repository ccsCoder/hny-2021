const config = {
  selector: '.background',
  maxParticles: 300,
  speed: 0.4,
  sizeVariations: 7,
  color: ['#ffff66', '#ffffb3', '#ffffcc'],
  responsive: [{
    breakpoint: 768,
    options: {
      maxParticles: 200,
      sizeVariations: 5,
    }
  }]
};

let audio = null;

window.onload= function() {
  audio = new Audio('res/forest.mp3');
};

document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('#greet-button').addEventListener('click', e => {
    // start off the audio in the background.
    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // start hiding stuff.
    document.querySelector('.intro-background').style.opacity = 0;
    document.querySelector('.intro-background').addEventListener('transitionend', function() {this.style.display = 'none';});
    Particles.init(config);
  });

  document.querySelector('.mute-audio').addEventListener('click', e => {
     var element = document.querySelector('.mute-audio');
    if(isAudioPlaying(audio)) {
      audio.pause();
      element.textContent = "Unmute"      
    } else {
      audio.play();
      element.textContent = "Mute"            
    }
  });  

});

function isAudioPlaying(audioTrack) { return !audioTrack.paused; }