const rightArrow = document.querySelector(".fa-arrow-right")
const leftArrow = document.querySelector(".fa-arrow-left")
const projectbox = document.querySelector(".imgs-container")
let px = 1001
let sum = 0



rightArrow.addEventListener("click", ()=>{
    sum -= px
    console.log(sum)
   leftArrow.style.visibility = "unset";
    projectbox.style.right = `${sum}px`
    if(sum == -3003){
        rightArrow.style.visibility = "hidden"
    }
})

leftArrow.addEventListener("click", ()=>{
    sum += px
    rightArrow.style.visibility = "unset";
    projectbox.style.right = `${sum}px`
    if(sum == 0){
        leftArrow.style.visibility = "hidden"
    }
})