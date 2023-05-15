const display =document.querySelector(".display");
const button = Array.from(document.querySelectorAll(".button"));

button.map((button)=>{
    button.addEventListener("click",(e)=>{
        
        switch(e.target.innerText){
            case"AC":
                display.innerText="0";
            break;
            case"=":
                display.innerText=eval(display.innerText);
            break;
            case"+/-":
                display.innerText="-";
            break;
            case"%":
                const pass = display.innerText+"/100";
                display.innerText =eval(pass);
            break;
            default:
                if(display.innerText==="0"&& e.target.innerText!=="."|| display.innerText==="🦊"&& e.target.innerText=="."){
                    display.innerText="0";
                    display.innerText=e.target.innerText;}
                else{
                    
                    display.innerText +=e.target.innerText;
                }
                
        }
    });

});
