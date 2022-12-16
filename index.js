var x =Math.floor((Math.random()*4)+1);
    console.log(x);
    document.querySelector("h1").innerHTML="Please tap to button. This game command key is a,s,d and f.";
                        document.querySelector("h1").style.fontFamily="cursive"; 
for(var i =0;i<4;i++){
    
    document.querySelectorAll(".mid")[i].addEventListener("click",function(){
         var asdf = this.innerHTML;
         checkCase(asdf);
         buttonAnimation(asdf)
        });
    
}
document.addEventListener("keypress", function(event) {

    checkCase(event.key);
  
    buttonAnimation(event.key);
  
  });

function checkCase(key){
    var a=1;
    var s=2;
    var d=3;
    var f=4;
    switch(key){
        case "a":
        if(a==x){
            var correctS = new Audio('music/correct.mp3');
            correctS.play();
            document.querySelector("h1").innerHTML="This is right answer";
            document.querySelector("h1").style.fontFamily="cursive";
            document.querySelector(".up").style.height="334px";
            document.querySelector("#myvideo").style.display="block";
            playVid();
             x =Math.floor((Math.random()*4)+1);
            console.log(x);           
            break;
        }
        else{           
            pauseVid(); 
            var correctS2 = new Audio('music/wrong.mp3');
            correctS2.play();
            document.querySelector("h1").innerHTML="Sorry! this is not right answer please try again. Tap to restart game";
            document.querySelector("h1").style.fontFamily="cursive";
            document.querySelector(".up").style.height="89px";
            document.querySelector("#myvideo").style.display="none";
            x =Math.floor((Math.random()*4)+1);
            console.log(x); 
            break;
        }
        case "s":
            if(s==x){
                var correctS = new Audio('music/correct.mp3');
                correctS.play();
                document.querySelector("h1").innerHTML="This is right answer";
                document.querySelector("h1").style.fontFamily="cursive";  
                document.querySelector(".up").style.height="334px";
            document.querySelector("#myvideo").style.display="block";
            playVid();
                 x =Math.floor((Math.random()*4)+1);
                console.log(x);              
                break;  
            }
            else{
                pauseVid();
                var correctS2 = new Audio('music/wrong.mp3');
            correctS2.play();
                document.querySelector("h1").innerHTML="Sorry! this is not right answer please try again. Tap to restart game";
                document.querySelector("h1").style.fontFamily="cursive";
                document.querySelector(".up").style.height="89px";
                document.querySelector("#myvideo").style.display="none";
                x =Math.floor((Math.random()*4)+1);
                console.log(x); 
                break;
            }
        case "d":
        if(d==x){
            var correctS = new Audio('music/correct.mp3');
            correctS.play();
            document.querySelector("h1").innerHTML="This is right answer";
            document.querySelector("h1").style.fontFamily="cursive"; 
            document.querySelector(".up").style.height="334px";
            document.querySelector("#myvideo").style.display="block";
            playVid();
             x =Math.floor((Math.random()*4)+1);
            console.log(x);             
            break;
        }
        else{
            pauseVid();
            var correctS2 = new Audio('music/wrong.mp3');
            correctS2.play();
            document.querySelector("h1").innerHTML="Sorry! this is not right answer please try again. Tap to restart game";
            document.querySelector("h1").style.fontFamily="cursive";
            document.querySelector(".up").style.height="89px";
            document.querySelector("#myvideo").style.display="none";
            x =Math.floor((Math.random()*4)+1);
            console.log(x); 
            break;
        }
        case "f":
        if(f==x){
            var correctS = new Audio('music/correct.mp3');
            correctS.play();
            document.querySelector("h1").innerHTML="This is right answer";
            document.querySelector("h1").style.fontFamily="cursive";    
            document.querySelector(".up").style.height="334px";
            document.querySelector("#myvideo").style.display="block";
            playVid();
             x =Math.floor((Math.random()*4)+1);
            console.log(x);        
            break;
        }   
        else{
            pauseVid();
            var correctS2 = new Audio('music/wrong.mp3');
            correctS2.play();
            document.querySelector("h1").innerHTML="Sorry! this is not right answer please try again. Tap to restart game";
            document.querySelector("h1").style.fontFamily="cursive";
            document.querySelector(".up").style.height="89px";
            document.querySelector("#myvideo").style.display="none";
            x =Math.floor((Math.random()*4)+1);
            console.log(x); 
            break;
        }
}
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
 var vid = document.getElementById("myvideo");
 function playVid(){
    vid.play();
 }
 function pauseVid(){
    vid.muted=false;
 }

