(function(){
    const t=document.querySelector("#text"),s=document.querySelector("#submit"),o=document.querySelector(".show"),f=document.querySelector(".found"),p=27,b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?","!"," "],l=b.length,e=["equivocado","equivocadisimo","mmm...no","nada que ver","efectivamente, no es el código","no digas huevadas","y yo que pensé que eras inteligente","estás 178km cerca","me decepcionas","en serio pensaste que ese era el código???","faltan neuronas acá","pensá antes de poner el código","nah bueno, full errado el código","arrojaba esa","flasheaste mal"];
    
    function c(t){return t.split("").map((c,n)=>{const i=b.indexOf(c);if(i===-1)return c;const x=(i+n+p)%l;return b[x]}).join("")}
    
    function d(t){return t.split("").map((c,n)=>{let i=b.indexOf(c);if(i===-1)return c;if(i-n-p<0)i+=l;const x=(i-n-p)%l;return b[x]}).join("")}
    
    const fn=()=>{
    if(t.value.split(" ").join("")==="")return t.value="",alert("No podes solo incluir espacios en el código");
    const x=c(t.value.toLowerCase());
    if(console.log(x)," DIdHHFGKPkOICG"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://L?QSECKQ.HUT/SbPr165r"),o.appendChild(n)
    }else if("P2S5V8Y!"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/YOtH!gC"),o.appendChild(n)
    }else if(" O3dNf9CiTTXma"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/Pco8TiC"),o.appendChild(n)
    }else if("92IKLMC89 "===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/3RIL7Vy"),o.appendChild(n)
    }else if("PPZZWYcZbfceifh"===x||"WTV"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/vj!kwyL"),o.appendChild(n)
    }else if("K8IIFbXcaX"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/EHLM5Je"),o.appendChild(n)
    }else if("4C36P9"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/K8tYv5 "),o.appendChild(n)
    }else if("9BH9LKH"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/IbK6Qq9"),o.appendChild(n)
    }else if("MDKI! "===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/8JmVWbQ"),o.appendChild(n)
    }else if("99IKJHIIBQQ"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/kibY3Bc"),o.appendChild(n)
    }else if("4DDY_aLPZe"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/MmY aNC"),o.appendChild(n)
    }else if("15IB5L?!OEMKA"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/Ux734PQ"),o.appendChild(n)
    }else if("F6L_HBN.IMc"===x){
    const n=f.cloneNode(!0);n.querySelector(".content").innerHTML=d("8IJGK://E! .CP/M3P5zn1"),o.appendChild(n)
    }else if("BDJ_5_9J B"===x)alert("PKR");else{
    const n=parseInt(Math.random()*e.length);return alert(e[n])}}
    
    s.onclick=fn,t.addEventListener("keydown",n=>{if("Enter"===n.key)return fn()})
    })();
    