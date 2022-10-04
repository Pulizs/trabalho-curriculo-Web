let mc = false;
let x = document.getElementsByTagName("article");
let body = document.getElementById("body");

function modoClaro(){

    if (mc == false){
      body.style.backgroundColor = "#7B68EE";
        document.getElementById("principal").style.backgroundColor = "#DCDCDC";
        for (let i = 0; i< x.length; i++) {
          x[i].style.backgroundColor = "#A9A9A9";
           
        }
        
        mc = true;
    }else{
        document.getElementById("principal").style.backgroundColor = "#708090";
        body.style.backgroundColor = "#483D8B";
        for (let i = 0; i< x.length; i++) {
            x[i].style.backgroundColor = "#2F4F4F";
             
          }
        
        mc = false;
    }

}