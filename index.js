let start_btn = document.querySelector("#start-btn");
let restart_btn = document.querySelector("#restart-btn");
let stop_btn = document.querySelector("#stop-btn");
let sec = document.querySelector("#second");
let min = document.querySelector("#minutes");
let hr = document.querySelector("#hours");
let a = 0;
let b = 0;
let c = 0;
let timer = null;

function Timer(){
       timer = setInterval(()=>{
              a++;
              sec.innerText = a;
              if(a === 60){
                     a = 0;
                     b++;
                     min.innerText = b;
                     
              }
              if(b === 60){
                     b = 0;
                     c++;
                     hr.innerText = c;
                    
              }
              
       },1000)
       return timer;
}

start_btn.addEventListener("click",()=>{
       if(timer) return ;
       timer = Timer();
       
       
})

stop_btn.addEventListener("click",()=>{
       clearInterval(timer);
       timer = null;
})

restart_btn.addEventListener("click",()=>{
       clearInterval(timer);
       timer = null;
       sec.innerText = 0;
       min.innerText = 0;
       hr.innerText = 0;

       a = 0;
       b = 0;
       c = 0;

})