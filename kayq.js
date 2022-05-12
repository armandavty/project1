function sctoll0(){
    window.scrollTo(0,0)
}
let b2X = 0;
let b2Y = 0;

let media = window.matchMedia("(max-width:500px)");
if(media.matches){
    window.onscroll = function menuFixed1(){
        console.log(window.scrollY)
        document.getElementById("b1-tox1").style = "background:#FFFFFF;box-shadow:0 0 10px 1px #ccc;"


        if(window.scrollY >= 900){
            document.getElementById("b3-h2-id1").style = "transform:translate(0,0);opacity:1;transition:0.6s";
            document.getElementById("b3-p1-id2").style = "transform:translate(0,0);opacity:1;transition:0.8s";
            document.getElementById("b3-p2-id3").style = "transform:translate(0,0);opacity:1;transition:1s";
        }
        if(window.scrollY >= 1130){
            document.getElementById("b4-header-id1").style = "opacity:1;transform:scale(1);transition:0.5s;"
        }
        // block5
        if(window.scrollY >= 5400){
            document.getElementById("block5-id-h2").style = "transform:translate(0,0);opacity:1;transition:0.6s";
            document.getElementById("block5-id-p1").style = "transform:translate(0,0);opacity:1;transition:0.8s";
            document.getElementById("block5-id-p2").style = "transform:translate(0,0);opacity:1;transition:1s";
        }
        if(window.scrollY >= 5870){
        document.getElementById("b6-h1").style = "opacity:1;transform:scale(1);transition:0.5s;"
        document.getElementById("b6-diver").style = "transform: translate(0,0);transition:0.5s;"
        }
        if(window.scrollY >= 6840){
        document.getElementById("b8-h2").style = "opacity:1;transform:scale(1);transition:0.5s;"
     }
     //block4
     if(window.scrollY >= 1480){
        document.getElementById("wine1").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 1920){
        document.getElementById("wine2").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 2345){
        document.getElementById("wine3").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 2800){
        document.getElementById("wine4").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 3275){
        document.getElementById("wine5").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 3705){
        document.getElementById("wine6").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 4130){
        document.getElementById("wine7").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 4580){
        document.getElementById("wine8").style = "transform: translate(0,0);transition:0.5s"
    }
    if(window.scrollY >= 7780){
        document.getElementById("b9-h2").style = "opacity:1;transform:scale(1);transition:0.5s;"
     }
    if(window.scrollY >= 8647){
        document.getElementById("b10-h2").style = "opacity:1;transform:scale(1);transition:0.5s;"
     }


    }

    function b2Click1(){
    if(b2X == 0){
        document.getElementById("b2-slider-id").style = "transform:translate(-130px,0);transition:0.7s"
        document.getElementById("col2-id1").innerHTML = "Merlot"
        document.getElementById("col2-id2").innerHTML = "Merlot is loved for its boisterous black cherry flavors, supple tannins, and chocolatey finish. On the high end, it’s often mistaken with Cabernet Sauvignon."
        b2X++;   
    }
    else if(b2X == 1){
        document.getElementById("b2-slider-id").style = "transform:translate(-260px,0);transition:0.7s" 
        document.getElementById("col2-id1").innerHTML = "Sauvignon Blanc"
        document.getElementById("col2-id2").innerHTML = "The Sauvignon Blanc taste is very different from other white wines, like Chardonnay, because of its green and herbaceous flavors that are quite recognizable."
        b2X = 2;
        b2Y = 1;
    }
}
function b2Click2(){
    if(b2X == 0){
        b2Y = 0;
    }
    else if(b2X == 1){
        document.getElementById("b2-slider-id").style = "transform:translate(0,0);transition:0.7s"
        document.getElementById("col2-id1").innerHTML = "Red Bordeaux"
        document.getElementById("col2-id2").innerHTML = "A red blend with a great taste that’s dominated by Cabernet Sauvignon and Merlot, along with several other grape varieties native to Bordeaux, France."
        b2X--
    }
    else if(b2X == 2){
        document.getElementById("b2-slider-id").style = "transform:translate(-130px,0);transition:0.7s"
        b2X--
    }
}
setInterval(sliderb2,3500)
function sliderb2(){
    if(b2Y == 0){
        b2Click1()
    }
    else if(b2Y ==1){
        b2Click2()
    }
} 


let lan = 0;
function languages(){
    if(lan == 0){
        document.getElementById("block1-ul-click").style = "display:block;"; 
        lan = 1;
    }
    
    else if(lan == 1){
         document.getElementById("block1-ul-click").style = "display:none";
         lan = 0;
    }
}
function en(){
    document.getElementById("li-en").style = "background: #C4A273;color:#fff";
    document.getElementById("li-fr").style = "background: #fff;color:#151515";
    document.getElementById("li-es").style = "background: #fff;color:#151515";
    document.getElementById("langs").innerHTML = "en";
    document.getElementById("block1-ul-click").style = "display:none";
    lan = 1;
}
function fr(){
    document.getElementById("li-en").style = "background: #fff;color:#151515";
    document.getElementById("li-fr").style = "background: #C4A273;color:#fff";
    document.getElementById("li-es").style = "background: #fff;color:#151515";
    document.getElementById("langs").innerHTML = "fr";
    document.getElementById("block1-ul-click").style = "display:none";
    lan = 1;
}
function es(){
    document.getElementById("li-fr").style = "background: #fff;color:#151515";
    document.getElementById("li-es").style = "background: #fff;color:#151515";
    document.getElementById("li-es").style = "background: #C4A273;color:#fff";
    document.getElementById("langs").innerHTML = "es";
    document.getElementById("block1-ul-click").style = "display:none";
   lan = 1;
} 
let b4Med = 0; 
function b4mediaBtn(){
    if(b4Med == 0){
        document.getElementById("b4-mediaIcon").style = "transform:rotate(-180deg);transition:0.4s"
        b4Med = 1;
    }
    else if(b4Med == 1){
        document.getElementById("b4-mediaIcon").style = "transform:rotate(0deg);transition:0.4s"
        b4Med = 0;
    }
}
    
    function b6MefiaF1(){
        document.getElementById("b6-diver").style = "transform:translate(0,0);transition:0.4s"
        
    }
    function b6MefiaF2(){
        document.getElementById("b6-diver").style = "transform:translate(-380px,0);transition:0.4s"
           
    }
    function b6MefiaF3(){
        document.getElementById("b6-diver").style = "transform:translate(-760px,0);transition:0.4s"
        
    }
    
    let menyu = 0;
    let bar = 0;
    function tox1MenyuMEd(){
        if(bar ==0){
            document.getElementById("menyu-media-div1").style = "transform:rotate(43deg);transform-origin:left center;transition:0.4s";
            document.getElementById("menyu-media-div2").style = "transform:scale(0);transition:0.4s";
            document.getElementById("menyu-media-div3").style = "transform:rotate(-43deg);transform-origin:left center;;transition:0.4s";
            
            document.getElementById("media-icon-div1").style = "transform:translate(0,0);transition:0.2s;width:6px;height:6px;margin:3px 0";
            document.getElementById("media-icon-div2").style = "transition:0.2s;width:6px;height:6px;margin:3px 0";
            document.getElementById("media-icon-div3").style = "transform:translate(0,0);transition:0.2s;width:6px;height:6px;margin:3px 0";


            bar = 1;
        }
        else if(bar == 1){
            document.getElementById("menyu-media-div1").style = "transform:rotate(0deg);transform-origin:left center;transition:0.4s";
            document.getElementById("menyu-media-div2").style = "transform:scale(1);transition:0.4s";
            document.getElementById("menyu-media-div3").style = "transform:rotate(0deg);transform-origin:left center;;transition:0.4s";
            bar = 0;
        }
        
        if(menyu == 0){
            document.getElementById("block1-media-click").style = "transform:translate(0,0);transition:0.4s";
            document.getElementById("tox1-icon-menyu").style = "transform:scale(0);top:0px;transition:0.4s";
            

            menyu = 1;
        }
        else{
            document.getElementById("block1-media-click").style = "transform:translate(-268px,0);transition:0.4s";
            menyu = 0;
        }
    }
    let info1 = 0
    function infoMedia(){
        if(info1 == 0){
            document.getElementById("menyu-media-div1").style = "transform:rotate(0deg);transform-origin:left center;transition:0.4s";
            document.getElementById("menyu-media-div2").style = "transform:scale(1);transition:0.4s";
            document.getElementById("menyu-media-div3").style = "transform:rotate(0deg);transform-origin:left center;;transition:0.4s";
        
            document.getElementById("tox1-icon-menyu").style = "transform:scale(1);top:64px;transition:0.4s";
            document.getElementById("block1-media-click").style = "transform:translate(-268px,0);transition:0.4s";
            
            document.getElementById("media-icon-div1").style = "transform:translate(0,18px);transition:0.2s;width:4px;height:4px;margin:5px 0";
            document.getElementById("media-icon-div2").style = "transition:0.2s;width:4px;height:4px;margin:5px 0";
            document.getElementById("media-icon-div3").style = "transform:translate(0,-18px);transition:0.2s;width:4px;height:4px;margin:5px 0";



            info1 = 1;
        }
        else if(info1 == 1){
            document.getElementById("tox1-icon-menyu").style = "transform:scale(0);top:0px;transition:0.4s";
            document.getElementById("media-icon-div1").style = "transform:translate(0,0);transition:0.2s;width:6px;height:6px";
            document.getElementById("media-icon-div2").style = "transition:0.2s;width:6px;height:6px;margin:3px 0";
            document.getElementById("media-icon-div3").style = "transform:translate(0,0);transition:0.2s;width:6px;height:6px";
            info1 = 0;
        }
    }    





    document.getElementById("menyu1-media-li1").style = "background-color:#C4A273;color:#fff";

    function mediaLi1(){
        document.getElementById("menyu1-media-li1").style = "background-color:#C4A273;color:#fff";
        document.getElementById("menyu1-media-li2").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li3").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li4").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li5").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li6").style = "background-color:#fff;color:#151515";
    }
    function mediaLi2(){
        document.getElementById("menyu1-media-li1").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li2").style = "background-color:#C4A273;color:#fff";
        document.getElementById("menyu1-media-li3").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li4").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li5").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li6").style = "background-color:#fff;color:#151515";
    }
    function mediaLi3(){
        document.getElementById("menyu1-media-li1").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li2").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li3").style = "background-color:#C4A273;color:#fff";
        document.getElementById("menyu1-media-li4").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li5").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li6").style = "background-color:#fff;color:#151515";
    }
    function mediaLi4(){
        document.getElementById("menyu1-media-li1").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li2").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li3").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li4").style = "background-color:#C4A273;color:#fff";
        document.getElementById("menyu1-media-li5").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li6").style = "background-color:#fff;color:#151515";
    }
    function mediaLi5(){
        document.getElementById("menyu1-media-li1").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li2").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li3").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li4").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li5").style = "background-color:#C4A273;color:#fff";
        document.getElementById("menyu1-media-li6").style = "background-color:#fff;color:#151515";
    }
    function mediaLi6(){
        document.getElementById("menyu1-media-li1").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li2").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li3").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li4").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li5").style = "background-color:#fff;color:#151515";
        document.getElementById("menyu1-media-li6").style = "background-color:#C4A273;color:#fff";
    }
    



}

else{
window.onscroll = function menuFixed(){
    console.log(window.scrollY);
    if(window.scrollY >= 130){
        document.getElementById("container1").style = "width:100%"
        document.getElementById("b1-tox1").style = "background:#404147;transition: 0.4s;"
        document.getElementById("b1-tox2").style = "position:fixed;width:100%;top:0;background:#404147;border:none;z-index:10;transition: 0.4s;"
    }
    else{

        document.getElementById("container1").style = "width:static;transition: 0.5s;"
        document.getElementById("b1-tox1").style = "transition: 0.2s;"
        document.getElementById("b1-tox2").style = "position:static;transition: 0.2s;"
    }

    if(window.scrollY > 540){
        document.getElementById("scrollBtn").style = "bottom: 40px;transition:0.3s;"
    }
    else{
        document.getElementById("scrollBtn").style = "position:fixed;bottom: -100px;"
    }

// block3
    if(window.scrollY >= 900){
        document.getElementById("b3-h2-id1").style = "transform:translate(0,0);opacity:1;transition:0.6s";
        document.getElementById("b3-p1-id2").style = "transform:translate(0,0);opacity:1;transition:0.8s";
        document.getElementById("b3-p2-id3").style = "transform:translate(0,0);opacity:1;transition:1s";
    }
// block5
    if(window.scrollY >= 3250){
        document.getElementById("block5-id-h2").style = "transform:translate(0,0);opacity:1;transition:0.6s";
        document.getElementById("block5-id-p1").style = "transform:translate(0,0);opacity:1;transition:0.8s";
        document.getElementById("block5-id-p2").style = "transform:translate(0,0);opacity:1;transition:1s";
    }
    if(window.scrollY >= 4148){
        document.getElementById("b6-h1").style = "opacity:1;transform:scale(1);transition:0.5s;"
        document.getElementById("b6-diver").style = "transform: translate(0,0);transition:0.5s;"
        }


    if(window.scrollY >= 1680){
        document.getElementById("b4-header-id1").style = "opacity:1;transform:scale(1);transition:0.5s;"
    }
    
     if(window.scrollY >= 4800){
        document.getElementById("b8-h2").style = "opacity:1;transform:scale(1);transition:0.5s;"
     }
     if(window.scrollY >= 6250){
        document.getElementById("b9-h2").style = "opacity:1;transform:scale(1);transition:0.5s;"
     }
     if(window.scrollY >= 6700){
        document.getElementById("b10-h2").style = "opacity:1;transform:scale(1);transition:0.5s;"
     }
}

let lan = 0;
function languages(){
    if(lan == 0){
        document.getElementById("block1-ul-click").style = "display:block"; 
        lan = 1;
    }
    
    else if(lan == 1){
         document.getElementById("block1-ul-click").style = "display:none";
         lan = 0;
    }
}
function en(){
    document.getElementById("li-en").style = "background: #C4A273;color:#fff";
    document.getElementById("li-fr").style = "background: #fff;color:#151515";
    document.getElementById("li-es").style = "background: #fff;color:#151515";
    document.getElementById("langs").innerHTML = "en";
    document.getElementById("block1-ul-click").style = "display:none";
    lan = 1;
}
function fr(){
    document.getElementById("li-en").style = "background: #fff;color:#151515";
    document.getElementById("li-fr").style = "background: #C4A273;color:#fff";
    document.getElementById("li-es").style = "background: #fff;color:#151515";
    document.getElementById("langs").innerHTML = "fr";
    document.getElementById("block1-ul-click").style = "display:none";
    lan = 1;
}
function es(){
    document.getElementById("li-fr").style = "background: #fff;color:#151515";
    document.getElementById("li-es").style = "background: #fff;color:#151515";
    document.getElementById("li-es").style = "background: #C4A273;color:#fff";
    document.getElementById("langs").innerHTML = "es";
    document.getElementById("block1-ul-click").style = "display:none";
   lan = 1;
}  


// block2

function b2Click1(){
    if(b2X == 0){
        document.getElementById("b2-slider-id").style = "transform:translate(-356px,0);transition:0.7s"
        document.getElementById("col2-id1").innerHTML = "Merlot"
        document.getElementById("col2-id2").innerHTML = "Merlot is loved for its boisterous black cherry flavors, supple tannins, and chocolatey finish. On the high end, it’s often mistaken with Cabernet Sauvignon."
        b2X++;   
    }
    else if(b2X == 1){
        document.getElementById("b2-slider-id").style = "transform:translate(-712px,0);transition:0.7s" 
        document.getElementById("col2-id1").innerHTML = "Sauvignon Blanc"
        document.getElementById("col2-id2").innerHTML = "The Sauvignon Blanc taste is very different from other white wines, like Chardonnay, because of its green and herbaceous flavors that are quite recognizable."
        b2X = 2;
        b2Y = 1;
    }
} 
function b2Click2(){
    if(b2X == 0){
        b2Y = 0;
    }
    else if(b2X == 1){
        document.getElementById("b2-slider-id").style = "transform:translate(0,0);transition:0.7s"
        document.getElementById("col2-id1").innerHTML = "Red Bordeaux"
        document.getElementById("col2-id2").innerHTML = "A red blend with a great taste that’s dominated by Cabernet Sauvignon and Merlot, along with several other grape varieties native to Bordeaux, France."
        b2X--
    }
    else if(b2X == 2){
        document.getElementById("b2-slider-id").style = "transform:translate(-356px,0);transition:0.7s"
        b2X--
    }
} 
setInterval(sliderb2,3500)
function sliderb2(){
    if(b2Y == 0){
        b2Click1()
    }
    else if(b2Y ==1){
        b2Click2()
    }
}
}





function mek(){
    document.getElementById("red").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("all").style="border-color:#c4a273;color:#C4A273"
    document.getElementById("rose").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("white").style="border-color:#D7D7D7;color:#A0A0A0"
 
    document.getElementById("wine1").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine2").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine3").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine4").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine5").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine6").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine7").style="transform:scale(1);transition:0.5s"
    document.getElementById("wine8").style="transform:scale(1);transition:0.5s"
}
function red(){
    document.getElementById("all").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("red").style="border-color:#c4a273;color:#C4A273"
    document.getElementById("rose").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("white").style="border-color:#D7D7D7;color:#A0A0A0"
 
    document.getElementById("wine1").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine2").style="transform:translate(-300px,0px);transition:0.5s"
    document.getElementById("wine3").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine4").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine5").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine6").style="transform:translate(0,-430px);transition:0.5s"
    document.getElementById("wine7").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine8").style="transform:translate(-300px,-430px);transition:0.5s"
}
function rose(){
    document.getElementById("red").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("rose").style="border-color:#c4a273;color:#C4A273"
    document.getElementById("all").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("white").style="border-color:#D7D7D7;color:#A0A0A0"
 

    document.getElementById("red").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("all").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("rose").style="border-color:#c4a273;color:#C4A273"
    document.getElementById("white").style="border-color:#D7D7D7"
    document.getElementById("wine1").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine2").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine3").style="transform:translate(-600px,0);transition:0.5s"
    document.getElementById("wine4").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine5").style="transform:translate(300px,-430px);transition:0.5s"
    document.getElementById("wine6").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine7").style="transform:translate(0,-430px);transition:0.5s"
    document.getElementById("wine8").style="transform:scale(0);transition:0.5s"
}
function white(){
    document.getElementById("red").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("white").style="border-color:#c4a273;color:#C4A273"
    document.getElementById("rose").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("all").style="border-color:#D7D7D7;color:#A0A0A0"
 
    document.getElementById("red").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("all").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("rose").style="border-color:#D7D7D7;color:#A0A0A0"
    document.getElementById("white").style="border-color:#c4a273"
    document.getElementById("wine2").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine3").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine4").style="transform:translate(-600px,0);transition:0.5s"
    document.getElementById("wine5").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine6").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine7").style="transform:scale(0);transition:0.5s"
    document.getElementById("wine8").style="transform:scale(0);transition:0.5s"
}
 
 function inpNul(){
    document.getElementById("inp-email").placeholder= " ";
 }
 function b12click1(){
    document.getElementById("b12-i1").placeholder= " ";
 }
 function b12click2(){
    document.getElementById("b12-i2").placeholder= " ";
 }
 function b12click3(){
    document.getElementById("b12-i3").placeholder= " ";
 }
 
    
    







let b8 = 0;
let y = 0;
function coments1(){
    document.getElementById("b8-b1").style = "opacity:1;";
    document.getElementById("b8-b2").style = "opacity:0.6;";
    if(b8 == 0){
        document.getElementById("b8-fluid1").style = "transform:translate(-396px,0);transition:0.5s"
        document.getElementById("b8-fluid2").style = "transform:translate(-396px,0);transition:0.5s"
        b8++;
    }
    else if(b8 == 1){
        document.getElementById("b8-fluid1").style = "transform:translate(-792px,0);transition:0.5s"
        document.getElementById("b8-fluid2").style = "transform:translate(-792px,0);transition:0.5s"
        b8++;
        
    }
    else{
        document.getElementById("b8-fluid1").style = "transform:translate(-1188px,0);transition:0.5s"
        document.getElementById("b8-fluid2").style = "transform:translate(-1188px,0);transition:0.5s"
        b8 = 3;
        y = 1;
    }
}

function coments2(){
    document.getElementById("b8-b1").style = "opacity:0.6;";
    document.getElementById("b8-b2").style = "opacity:1;";
    if(b8 == 0){
        y = 0;
    }
    else if(b8 == 1){
        document.getElementById("b8-fluid1").style = "transform:translate(0,0);transition:0.5s"
        document.getElementById("b8-fluid2").style = "transform:translate(0,0);transition:0.5s"
        b8--;
    }
    else if(b8 == 2){
        document.getElementById("b8-fluid1").style = "transform:translate(-396px,0);transition:0.5s"
        document.getElementById("b8-fluid2").style = "transform:translate(-396px,0);transition:0.5s"
        b8--;
    }
    else{
        document.getElementById("b8-fluid1").style = "transform:translate(-792px,0);transition:0.5s"
        document.getElementById("b8-fluid2").style = "transform:translate(-792px,0);transition:0.5s"
        b8--;
    }
}
setInterval(slider,2000)
function slider(){
    if(y == 0){
        coments1()
    }
    else if(y == 1){
        coments2()
    }
}

function b9Scroll(){
    document.getElementById("b9-div1").style = "transform:translate(0;430px)";
    // document.getElementById("b9-div2").style = "transform:translate(0;-430px)";
    // document.getElementById("b9-div3").style = "transform:translate(0;-430px)";
}

