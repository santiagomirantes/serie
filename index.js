const text = document.querySelector("#text")
const submit = document.querySelector("#submit")
const show = document.querySelector(".show")
const found = document.querySelector(".found")
const shift = 27
const baseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "?", "!", " "
];
const baseLength = baseArray.length;
const errorMessages = ["equivocado", "equivocadisimo", "mmm...no", "nada que ver", "efectivamente, no es el código", "no digas huevadas", "y yo que pensé que eras inteligente", "estás 178km cerca"]

function encrypt(text) {

         return text
        .split("") 
        .map((char,pos) => {
            const index = baseArray.indexOf(char)
            if (index === -1) {
                return char;
            }
            const newIndex = (index + pos + shift) % baseLength;
            return baseArray[newIndex];
        })
        .join("");
} 

function decrypt(text) {

    return text
   .split("") 
   .map((char,pos) => {
       let index = baseArray.indexOf(char)
       if (index === -1) {
           return char;
       }
       if(index - pos - shift < 0) {
         index += baseLength
       }
       const newIndex = (index - pos - shift)  % baseLength;
       return baseArray[newIndex];
   })
   .join("");
} 

submit.onclick = () => {

    if(text.value.split(" ").join("") === "") {
        text.value = ""
        return alert("No podes solo incluir espacios en el código")
    }


    const encrypted = encrypt(text.value.toLowerCase())

    console.log(encrypted)

    if(encrypted === " DIdHHFGKPkOICG") {
       const clone = found.cloneNode(true)
       clone.querySelector(".content").innerHTML = decrypt('8IJGK://L?QSECKQ.HUT/SbPr165r')

       show.appendChild(clone)
    }
    else{
        const pos = parseInt(Math.random() * errorMessages.length)
        return alert(errorMessages[pos])
    }
}