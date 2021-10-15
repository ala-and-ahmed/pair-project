document.addEventListener('click',song);
function song(){
    document.getElementById('song').play();
    document.removeEventListener('click',song)
}

function cont(){
    var counter =60;
    var interval = setInterval(function(){    
        counter--
      
        if(counter>=0){
            document.getElementById('count').innerHTML = "🕐"+ counter +"🕐"
        }if(document.getElementById("achref").style.opacity == 1 && 
            document.getElementById("fadher").style.opacity == 1 && 
            document.getElementById("wala").style.opacity == 1 && 
            document.getElementById("karmous").style.opacity == 1 && 
            document.getElementById("saadi").style.opacity == 1 && 
            document.getElementById("hana").style.opacity == 1 && 
            document.getElementById("halim").style.opacity == 1 && 
            document.getElementById("cycy").style.opacity == 1 && 
            document.getElementById("halim2").style.opacity == 1 && 
            document.getElementById("fadher2").style.opacity == 1 && 
            document.getElementById("cycy2").style.opacity == 1 && 
            document.getElementById("hana2").style.opacity == 1 && 
            document.getElementById("karmous2").style.opacity == 1 && 
            document.getElementById("saadi2").style.opacity == 1 && 
            document.getElementById("achref2").style.opacity == 1 && 
            document.getElementById("wala2").style.opacity == 1){
                clearInterval(interval)
                document.getElementById('count').innerHTML ='your wooon!!'
        }else if(counter===0){
            clearInterval(interval)
            document.getElementById('count').innerHTML ='your time is over'
             $('body').append('<audio autoplay><source src="./song/10-seconds-basic-introoutro-template.mp3" type="audio/mp3"> </audio>')
        }
       
    },1000);}

var arrOfPhotos= new Array()
arrOfPhotos[0] = new Image()
arrOfPhotos[0].src = "./images/rule0.png"
arrOfPhotos[1] = new Image()
arrOfPhotos[1].src = "./images/rule1.png"
arrOfPhotos[2] = new Image()
arrOfPhotos[2].src = "./images/rule2.png"
arrOfPhotos[3] = new Image()
arrOfPhotos[3].src = "./images/rule3.png"

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
    document.location.href = ("")
}
function ach(){
    $("#achref").css('opacity',1);
    if(x===false){
        $("#achref").css('opacity',0);
        x=true
}
}
function cy(){
    $("#cycy").css('opacity',1);
    if(x===false){
        $("#cycy").css('opacity',0);
        x=true
}
}
function fa(){
    $("#fadher").css('opacity',1);
    if(x===false){
        $("#fadher").css('opacity',0);
        x=true
}
}
function ha(){
    $("#halim").css('opacity',1);
    if(x===false){
        $("#halim").css('opacity',0);
        x=true
}
}
function han(){
    $("#hana").css('opacity',1);
    if(x===false){
        $("#hana").css('opacity',0);
        x=true
}
}
function kar(){
    $("#karmous").css('opacity',1);
    if(x===false){
        $("#karmous").css('opacity',0);
        x=true
}
}
function saa(){
    $("#saadi").css('opacity',1);
    if(x===false){
        $("#saadi").css('opacity',0);
        x=true
}
}
function wa(){
    $("#wala").css('opacity',1);
    if(x===false){
        $("#wala").css('opacity',0);
        x=true
}
}
function ach2(){
    $("#achref2").css('opacity',1);
    if(x===false){
        $("#achref2").css('opacity',0);
        x=true
}
}
function cy2(){
    $("#cycy2").css('opacity',1);
    if(x===false){
        $("#cycy2").css('opacity',0);
        x=true
}
}
function fa2(){
    $("#fadher2").css('opacity',1);
    if(x===false){
        $("#fadher2").css('opacity',0);
        x=true
}
}
function ha2(){
    $("#halim2").css('opacity',1);
    if(x===false){
        $("#halim2").css('opacity',0);
        x=true
}
}
function han2(){
    $("#hana2").css('opacity',1);
    if(x===false){
        $("#hana2").css('opacity',0);
        x=true
}
}
function kar2(){
    $("#karmous2").css('opacity',1);
    if(x===false){
        $("#karmous2").css('opacity',0);
        x=true
}
}
function saa2(){
    $("#saadi2").css('opacity',1);
    if(x===false){
        $("#saadi2").css('opacity',0);
        x=true
}
}
function wa2(){
    $("#wala2").css('opacity',1);
    if(x===false){
        $("#wala2").css('opacity',0);
        x=true
}
}
var x = false
var comp=[]
function bob(e){
    comp.push(e.getAttribute("id"))
    console.log('comp', comp)
    if(comp.length===2){console.log('hi');
        if(comp[0]===comp[1].slice(0,length-1) || comp[0]===comp[1]+"2"){
            document.getElementById(comp[0]).style.opacity = 1; console.log(comp[0].value)
            document.getElementById(comp[1]).style.opacity = 1
            comp=[]            
        }if(comp[0]!==comp[1].slice(0,length-1) || comp[0]!==comp[1]+"2"){
            document.getElementById(comp[0]).style.opacity = 0
            document.getElementById(comp[1]).style.opacity = 0 
            x = false
            comp =[]  
        }
    }
}


function m(){
    $("img.front").attr("src","./images/morgana.jpg")
}
function d(){
    $("img.front").attr("src","./images/Darius_1.jpg")
}








function achref(){
   $("#achref").css('opacity',1);
   $("#achref").animate({
    opacity: '0'
     }, 2000);
}
function achref2(){
    $("#achref2").css('opacity', 1);
    $("#achref2").animate({
     opacity: '0'
     }, 2000);
}
 function wala(){
    $("#wala").css('opacity', 1);
    $("#wala").animate({
     opacity: '0'
     }, 2000);
 }
 function wala2(){
    $("#wala2").css('opacity', 1);
    $("#wala2").animate({
     opacity: '0'
     }, 2000);
 }
 function halim(){
    $("#halim").css('opacity', 1);
    $("#halim").animate({
     opacity: '0'
     }, 2000);
 }
 function halim2(){
    $("#halim2").css('opacity', 1);
    $("#halim2").animate({
     opacity: '0'
     }, 2000);
 }
 function cycy(){
    $("#cycy").css('opacity', 1);
    $("#cycy").animate({
     opacity: '0'
     }, 2000);
 }
 function cycy2(){
    $("#cycy2").css('opacity', 1);
    $("#cycy2").animate({
     opacity: '0'
     }, 2000);
 }
 function fadher(){
    $("#fadher").css('opacity', 1);
    $("#fadher").animate({
     opacity: '0'
     }, 2000);
 }
 function fadher2(){
    $("#fadher2").css('opacity', 1);
    $("#fadher2").animate({
     opacity: '0'
     }, 2000);
 }
 function saadi(){
    $("#saadi").css('opacity', 1);
    $("#saadi").animate({
     opacity: '0'
     }, 2000);
 }
 function saadi2(){
    $("#saadi2").css('opacity', 1);
    $("#saadi2").animate({
     opacity: '0'
     }, 2000);
 }
 function karmous(){
    $("#karmous").css('opacity', 1);
    $("#karmous").animate({
     opacity: '0'
     }, 2000);
 }
 function karmous2(){
    $("#karmous2").css('opacity', 1);
    $("#karmous2").animate({
     opacity: '0'
     }, 2000);
}
 function hana(){
    $("#hana").css('opacity', 1);
    $("#hana").animate({
     opacity: '0'
     }, 2000);
 }function hana2(){
    $("#hana2").css('opacity', 1);
    $("#hana2").animate({
     opacity: '0'
     }, 2000);
 }





 
 //***************************

// var check= false
//     function bla(){

//         if(!check){
//             // flip
//             check = true
//         }
//         else{
//             // flip 
//             // check if img1 === img2
//             check = false
//         }
//     }

    // function v(){
    //     $(".achref").css("transform","rotateY(180deg)");
    // }

//     function Card(id,name,pic)
// {
// 	var o = {}
// 	o.id=id;
// 	o.name=name;
// 	o.pic=pic
// 	return o;
// }

// var card = [
// 		{
// 			name: "achref",
// 			img: "src=''",
// 			id: 1,
// 		},
// 		{
// 			name: "css3",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
// 			id: 2
// 		},
// 		{
// 			name: "html5",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
// 			id: 3
// 		},
// 		{
// 			name: "jquery",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
// 			id: 4
// 		}, 
// 		{
// 			name: "javascript",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
// 			id: 5
// 		},
// 		{
// 			name: "node",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
// 			id: 6
// 		},
// 		{
// 			name: "photoshop",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
// 			id: 7
// 		},
// 		{
// 			name: "python",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
// 			id: 8
// 		},
// 		{
// 			name: "rails",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
// 			id: 9
// 		},
// 		{
// 			name: "sass",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
// 			id: 10
// 		},
// 		{
// 			name: "sublime",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
// 			id: 11
// 		},
// 		{
// 			name: "wordpress",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
// 			id: 12
// 		},		{
// 			name: "php",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
// 			id: 1,
// 		},
// 		{
// 			name: "css3",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
// 			id: 2
// 		},
// 		{
// 			name: "html5",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
// 			id: 3
// 		},
// 		{
// 			name: "jquery",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
// 			id: 4
// 		}, 
// 		{
// 			name: "javascript",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
// 			id: 5
// 		},
// 		{
// 			name: "node",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
// 			id: 6
// 		},
// 		{
// 			name: "photoshop",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
// 			id: 7
// 		},
// 		{
// 			name: "python",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
// 			id: 8
// 		},
// 		{
// 			name: "rails",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
// 			id: 9
// 		},
// 		{
// 			name: "sass",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
// 			id: 10
// 		},
// 		{
// 			name: "sublime",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
// 			id: 11
// 		},
// 		{
// 			name: "wordpress",
// 			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
// 			id: 12
// 		},
		
		
// 	];


// function render ()
// {
// 	console.log("reder show")
//    for (var i = 0 ; i<card.length;i++) {
//    	 console.log("this is for loop")
//    	   $(".container").append('<div id="card"> <p>'+card[i].name+'</p><img src="'+card[i].img+'"></div>');
   	   
//    }

// }


// var bob=["url1","url2","",""]
// var bob1=["url1","url2","",""]

// function finder(){
//     for (var i=0 ; i<bob.length;i++) {
//         if(bob[i]===bob1[i]){
//             $(".achref").attr("https://clipground.com/images/verified-tick-png-6.png")
//         }
//     }
// }

// $(".imgsss").onclick(finder())