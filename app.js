const titles = [
    {
     id:0,
     title: "RecipeBookApp"
},
{
    id:1,
    title: "Rock-Paper-Scissors"
},
{
    id:2,
    title: "WeatherApp"
},
{
    id:3,
    title: "ShoppingCart"
},
   

]
const rightArrow = document.querySelector(".fa-arrow-right")
const leftArrow = document.querySelector(".fa-arrow-left")
const projectbox = document.querySelector(".imgs-container")
const projectTitle = document.querySelector(".project-title")
let px = 701
let sum = 0
let pictureNumber = 0


checkTitle()
rightArrow.addEventListener("click", ()=>{
    pictureNumber++
    console.log(pictureNumber)
    sum -= px
    console.log(sum)
   leftArrow.style.visibility = "unset";
    projectbox.style.left = `${sum}px`
    if(sum == -2103){
        rightArrow.style.visibility = "hidden"
    }
    projectTitle.style.opacity ="1"

    
    checkTitle()
 
})

leftArrow.addEventListener("click", ()=>{
    pictureNumber--
    sum += px
    rightArrow.style.visibility = "unset";
    projectbox.style.left = `${sum}px`
    if(sum == 0){
        leftArrow.style.visibility = "hidden"
    }
   
    checkTitle()
    projectTitle.style.opacity ="1"


})



function checkTitle(){
    projectTitle.innerHTML = titles[pictureNumber].title

}

 
   
      
    

   
     
    
  
