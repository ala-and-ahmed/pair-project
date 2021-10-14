document.addEventListener('click',song);
function song(){
    document.getElementById('song').play();
    document.removeEventListener('click',song)
}

function cont(){
    var counter =60;
    setInterval(function(){    
        counter--
        if(counter>=0){
            document.getElementById('count').innerHTML = counter
        }if(counter===0){
            document.getElementById('count').innerHTML ='your time is over'
             $('body').append('<audio autoplay><source src="./song/explosion-sound-effect-10-seconds.mp3" type="audio/mp3"> </audio>')
            
        }
       
    },1000);}
    
    