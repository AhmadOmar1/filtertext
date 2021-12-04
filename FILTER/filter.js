

"use strict";



 (function() {

    window.addEventListener("load" , init);


    function init(){
        let btn = document.getElementById('btn');

        btn.addEventListener('click' ,Filtertext);
    }
    function Filtertext () {
        let txt = document.getElementById("textstyle1").value;
        let message2 = document.getElementById("textstyle2");
          let count = txt.match(/(\w+)/g).length

        if(count > 500)
        {
            let errorMsg = document.getElementById('Errormsg');
            errorMsg.innerHTML = 'Please Enter a Text under 500 words ..!';
        }
        else 
        {
            let texts = txt.replace(/[0-9]/g,' ');
            message2.innerHTML = texts.replace(/[^a-zA-Z]/g, ' ');
            
        }
    
    }

 })();


 








