document.addEventListener('click',song);
function song(){
    document.getElementById('song').play();
    document.removeEventListener('click',song)
}

function cont(){
    var counter =60;
    var interval = setInterval(function(){    
        counter--
        console.log(counter)
        if(counter>=0){
            document.getElementById('count').innerHTML = "🕐"+ counter +"🕐"
        }if(counter===0){
            clearInterval(interval)
            document.getElementById('count').innerHTML ='your time is over'
             $('body').append('<audio autoplay><source src="./song/10-seconds-basic-introoutro-template.mp3" type="audio/mp3"> </audio>')
        }
       
    },1000);}

var arrOfPhotos= new Array()
arrOfPhotos[0] = new Image()
arrOfPhotos[0].src = "./images/cycy.jfif"
arrOfPhotos[1] = new Image()
arrOfPhotos[1].src = "./images/halim.jfif"
arrOfPhotos[2] = new Image()
arrOfPhotos[2].src = "./images/wala.jfif"
arrOfPhotos[3] = new Image()
arrOfPhotos[3].src = "./images/karmous.jfif"
arrOfPhotos[4] = new Image()
arrOfPhotos[4].src = "./images/saadi.jfif"


    function next(){
        var currentimage = document.getElementById("change")
        console.log( currentimage)
        for(i=0;i<arrOfPhotos.length;i++){
            if(arrOfPhotos[i].src == currentimage.src){
                if(i === arrOfPhotos.length-1){
                    currentimage.src = arrOfPhotos[0].src
                    break;
                }
                currentimage.src = arrOfPhotos[i+1].src
                break;
            }
        }
    }

    function prev(){
        var currentimage = document.getElementById("change")
        console.log( currentimage)
        for(i=0;i<arrOfPhotos.length;i++){
            if(arrOfPhotos[i].src == currentimage.src){
                if(i === 0){
                    currentimage.src = arrOfPhotos[arrOfPhotos.length-1].src
                    break;
                }
                currentimage.src = arrOfPhotos[i-1].src
                break;
            }
        }
    }

document.getElementById("game").style.display = "none"

function yalla(){
    document.getElementById("pre-game").style.display = "none"
    document.getElementById("game").style.display = "block"
}

function ref(){
    document.location.href =("")
}

var check= false
    function bla(){

        if(!check){
            // flip
            check = true
        }
        else{
            // flip
            // check if img1 === img2
            check = false
        }
    }