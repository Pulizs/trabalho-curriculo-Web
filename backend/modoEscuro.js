let mc = false;
let x = document.getElementsByTagName("article");
let body = document.getElementById("body");

function modoClaro(){

    if (mc == false){
      body.style.backgroundColor = "#7B68EE";

        document.getElementById("principal").style.backgroundColor = "#DCDCDC";
        for (let i = 0; i< x.length; i++) {
          x[i].style.backgroundImage = "linear-gradient(#4F4F4F, #C0C0C0)";
           
        }
        
        mc = true;
    }else{
        document.getElementById("principal").style.backgroundColor = "#708090";
        body.style.backgroundColor = "#483D8B";
        for (let i = 0; i< x.length; i++) {
            x[i].style.backgroundImage = "linear-gradient(#2F4F4F, #5F9EA0)";
             
          }
        
        mc = false;
    }

}