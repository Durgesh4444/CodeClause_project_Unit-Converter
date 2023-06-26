let open = document.querySelector(".fa-bars")
console.log(open);
let res =document.querySelector(".responsive-navitem")
console.log(res);

let close = document.querySelector(".fa-circle-xmark")
console.log(close);

open.addEventListener("click", ()=>{
res.classList.add('display')
})

close.addEventListener("click", ()=>{

    res.classList.remove('display')
    })