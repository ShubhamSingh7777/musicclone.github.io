var progressBar = document.getElementById("progressBar");
var masterPlay = document.getElementById("masterPlay");
var audio = new Audio('music/a.mp3');
var audio1 = new Audio('music/a1.mp3');
var audio2 = new Audio('music/a2.mp3');
var audio3 = new Audio('music/a3.mp3');
var audio4 = new Audio('music/a4.mp3');
var audio5 = new Audio('music/a5.mp3');
function shubham1() {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-play');
        document.getElementById("masterPlay").classList.add('fa-circle-pause');
        document.getElementById("pa").classList.remove('fa-circle-play');
        document.getElementById("pa").classList.add('fa-circle-pause');
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
        document.getElementById("pa2").classList.remove('fa-circle-pause');
        document.getElementById("pa2").classList.add('fa-circle-play');
        document.getElementById("pa3").classList.remove('fa-circle-pause');
        document.getElementById("pa3").classList.add('fa-circle-play');
        document.getElementById("pa4").classList.remove('fa-circle-pause');
        document.getElementById("pa4").classList.add('fa-circle-play');
        document.getElementById("pa5").classList.remove('fa-circle-pause');
        document.getElementById("pa5").classList.add('fa-circle-play');

    }
    else {
        audio.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa").classList.remove('fa-circle-pause');
        document.getElementById("pa").classList.add('fa-circle-play');
    }
}
audio.addEventListener('timeupdate', () => {
    var time = parseInt((audio.currentTime / audio.duration) * 100);
    document.getElementById("progressBar").value = time;
    if(time==100)
    {
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
    };
})

function shubham2() {
    if (audio1.paused || audio1.currentTime <= 0) {
        audio1.play();
        audio.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-play');
        document.getElementById("masterPlay").classList.add('fa-circle-pause');
        document.getElementById("pa").classList.remove('fa-circle-play');
        document.getElementById("pa").classList.add('fa-circle-pause');
        document.getElementById("pa2").classList.remove('fa-circle-pause');
        document.getElementById("pa2").classList.add('fa-circle-play');
        document.getElementById("pa3").classList.remove('fa-circle-pause');
        document.getElementById("pa3").classList.add('fa-circle-play');
        document.getElementById("pa4").classList.remove('fa-circle-pause');
        document.getElementById("pa4").classList.add('fa-circle-play');
        document.getElementById("pa5").classList.remove('fa-circle-pause');
        document.getElementById("pa5").classList.add('fa-circle-play');
        document.getElementById("pa1").classList.remove('fa-circle-play');
        document.getElementById("pa1").classList.add('fa-circle-pause');
    }
    else {
        audio1.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
    }
}
audio1.addEventListener('timeupdate', () => {
    var time = parseInt((audio1.currentTime / audio1.duration) * 100);
    document.getElementById("progressBar").value = time;
    if(time==100)
    {
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
    };
})

function shubham3() {
    if (audio2.paused || audio2.currentTime <= 0) {
        audio2.play();
        audio1.pause();
        audio.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-play');
        document.getElementById("masterPlay").classList.add('fa-circle-pause');
        document.getElementById("pa2").classList.remove('fa-circle-play');
        document.getElementById("pa2").classList.add('fa-circle-pause');
        document.getElementById("pa").classList.remove('fa-circle-pause');
        document.getElementById("pa").classList.add('fa-circle-play');
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
        document.getElementById("pa4").classList.remove('fa-circle-pause');
        document.getElementById("pa4").classList.add('fa-circle-play');
        document.getElementById("pa5").classList.remove('fa-circle-pause');
        document.getElementById("pa5").classList.add('fa-circle-play');
    }
    else {
        audio2.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa2").classList.remove('fa-circle-pause');
        document.getElementById("pa2").classList.add('fa-circle-play');
    }
}
audio2.addEventListener('timeupdate', () => {
    var time = parseInt((audio2.currentTime / audio2.duration) * 100);
    document.getElementById("progressBar").value = time;
    if(time==100)
    {
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
    };
})

function shubham4() {
    if (audio3.paused || audio3.currentTime <= 0) {
        audio3.play();
        audio1.pause();
        audio2.pause();
        audio.pause();
        audio4.pause();
        audio5.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-play');
        document.getElementById("masterPlay").classList.add('fa-circle-pause');
        document.getElementById("pa3").classList.remove('fa-circle-play');
        document.getElementById("pa3").classList.add('fa-circle-pause');
        document.getElementById("pa").classList.remove('fa-circle-pause');
        document.getElementById("pa").classList.add('fa-circle-play');
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
        document.getElementById("pa2").classList.remove('fa-circle-pause');
        document.getElementById("pa2").classList.add('fa-circle-play');
        document.getElementById("pa4").classList.remove('fa-circle-pause');
        document.getElementById("pa4").classList.add('fa-circle-play');
        document.getElementById("pa5").classList.remove('fa-circle-pause');
        document.getElementById("pa5").classList.add('fa-circle-play');
    }
    else {
        audio3.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa3").classList.remove('fa-circle-pause');
        document.getElementById("pa3").classList.add('fa-circle-play');
    }
}
audio3.addEventListener('timeupdate', () => {
    var time = parseInt((audio3.currentTime / audio3.duration) * 100);
    document.getElementById("progressBar").value = time;
    if(time==100)
    {
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
    };
})

function shubham5() {
    if (audio4.paused || audio4.currentTime <= 0) {
        audio4.play();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio.pause();
        audio5.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-play');
        document.getElementById("masterPlay").classList.add('fa-circle-pause');
        document.getElementById("pa4").classList.remove('fa-circle-play');
        document.getElementById("pa4").classList.add('fa-circle-pause');
        document.getElementById("pa3").classList.remove('fa-circle-pause');
        document.getElementById("pa3").classList.add('fa-circle-play');
        document.getElementById("pa").classList.remove('fa-circle-pause');
        document.getElementById("pa").classList.add('fa-circle-play');
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
        document.getElementById("pa2").classList.remove('fa-circle-pause');
        document.getElementById("pa2").classList.add('fa-circle-play');
        document.getElementById("pa5").classList.remove('fa-circle-pause');
        document.getElementById("pa5").classList.add('fa-circle-play');
    }
    else {
        audio4.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa4").classList.remove('fa-circle-pause');
        document.getElementById("pa4").classList.add('fa-circle-play');
    }
}
audio4.addEventListener('timeupdate', () => {
    var time = parseInt((audio4.currentTime / audio4.duration) * 100);
    document.getElementById("progressBar").value = time;
    if(time==100)
    {
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
    };
})

function shubham6() {
    if (audio5.paused || audio5.currentTime <= 0) {
        audio5.play();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-play');
        document.getElementById("masterPlay").classList.add('fa-circle-pause');
        document.getElementById("pa5").classList.remove('fa-circle-play');
        document.getElementById("pa5").classList.add('fa-circle-pause');
        document.getElementById("pa3").classList.remove('fa-circle-pause');
        document.getElementById("pa3").classList.add('fa-circle-play');
        document.getElementById("pa").classList.remove('fa-circle-pause');
        document.getElementById("pa").classList.add('fa-circle-play');
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
        document.getElementById("pa2").classList.remove('fa-circle-pause');
        document.getElementById("pa2").classList.add('fa-circle-play');
        document.getElementById("pa4").classList.remove('fa-circle-pause');
        document.getElementById("pa4").classList.add('fa-circle-play');
    }
    else {
        audio5.pause();
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa5").classList.remove('fa-circle-pause');
        document.getElementById("pa5").classList.add('fa-circle-play');
    }

}
function pause() {
    if (audio.played || audio.currentTime <= 0) {
        audio.pause();

        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("pa").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
        document.getElementById("pa").classList.add('fa-circle-play');
    }
   
    if (audio1.played || audio1.currentTime <= 0) {
        audio1.pause();
        document.getElementById("pa1").classList.remove('fa-circle-pause');
        document.getElementById("pa1").classList.add('fa-circle-play');
    }
    
    if (audio2.played || audio2.currentTime <= 0) {
        audio2.pause();
              document.getElementById("pa2").classList.remove('fa-circle-pause');
          document.getElementById("pa2").classList.add('fa-circle-play');
    }
   
    if (audio3.played || audio3.currentTime <= 0) {
        audio3.pause();
              document.getElementById("pa3").classList.remove('fa-circle-pause');
          document.getElementById("pa3").classList.add('fa-circle-play');
    }
    
    if (audio4.played || audio4.currentTime <= 0) {
        audio4.pause();
              document.getElementById("pa4").classList.remove('fa-circle-pause');
          document.getElementById("pa4").classList.add('fa-circle-play');
    }
    
    if (audio5.played || audio5.currentTime <= 0) {
        audio5.pause();
              document.getElementById("pa5").classList.remove('fa-circle-pause');
          document.getElementById("pa5").classList.add('fa-circle-play');
    }
}



audio5.addEventListener('timeupdate', () => {
    var time = parseInt((audio5.currentTime / audio5.duration) * 100);
    document.getElementById("progressBar").value = time;
    if(time==100)
    {
        document.getElementById("masterPlay").classList.remove('fa-circle-pause');
        document.getElementById("masterPlay").classList.add('fa-circle-play');
    };
})

// progressBar.addEventListener('change',()=>{
//     //  audioElement.currentTime = (document.getElementById("progressBar").value * audioElement.duration)/100;
//    alert("hejkao");

//   })

function vikas() {
    audio.currentTime = document.getElementById("progressBar").value * audio.duration / 100;
    audio1.currentTime = document.getElementById("progressBar").value * audio1.duration / 100;
    audio2.currentTime = document.getElementById("progressBar").value * audio2.duration / 100;
    audio3.currentTime = document.getElementById("progressBar").value * audio3.duration / 100;
    audio4.currentTime = document.getElementById("progressBar").value * audio4.duration / 100;
    audio5.currentTime = document.getElementById("progressBar").value * audio5.duration / 100;
   // console.log(audio.currentTime);
}


// function kii(){
//     console.log("khhhkk");
// }

// if(audio.ended)
// {
//     kii()
// }



//kiii();
// if (audio5.played) {
//     // document.getElementById("masterPlay").classList.remove('fa-circle-pause');
//     // document.getElementById("masterPlay").classList.add('fa-circle-play');
//     // document.getElementById("pa").classList.remove('fa-circle-pause');
//     // document.getElementById("pa").classList.add('fa-circle-play');
//     kiii();
//     //   console.log("sdhadhj");
// }
// function kiii() {
//     console.log("sdhadhj");
// }

