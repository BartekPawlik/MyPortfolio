const titles = [
    {
     id:0,
     title: "RecipeBookApp",
     desc: "The 'Recipe App' project displays Recipes for dishs. I used the fetch function to execute a GET request on api.spoonacular.com and subsequently processed and displayed the data.",
},
{
    id:1,
    title: "Rock-Paper-Scissors",
    desc: `The Rock-Paper-Scissors game let users to choose one of three signs,
           in the meantime "computer" pick random options and dispaly result of points.
           I utilized the Math.random() function and implemented a 'for' loop.
           `,
},
{
    id:2,
    title: "Guess-The-Color",
    desc: `The 'Guess the Color' game involves generating a random RGB value and having the user identify the correct color from six boxes. In this project, 
           I utilized the Math.random() function and implemented if statment.`
},

{
    id:3,
    title: "WeatherApp",
    desc: "The 'Weather App' project displays weather conditions for locations searched by users. I used the fetch function to execute a GET request on api.weatherapi.com and subsequently processed and displayed the data.",
},
{
    id:4,
    title: "ShoppingCart",
    desc: "The 'Shopping Cart' project displays a list of products, allows users to add products to the basket, and calculates the total price. I utilized Local Storage, sourced data from a local JSON database, and performed operations on the DOM.",
},
   

]
const rightArrow = document.querySelector(".fa-angles-right")
const leftArrow = document.querySelector(".fa-angles-left")
const projectbox = document.querySelector(".imgs-container")
const projectTitle = document.querySelector(".project-title")
const descs = document.querySelector('.desc')
const panels = document.querySelectorAll('.card-inner')

let px = 701
let sum = 0
let pictureNumber = 0


checkInfo()
rightArrow.addEventListener("click", ()=>{
    pictureNumber++
    console.log(pictureNumber)
    sum -= px
    console.log(sum)
   leftArrow.style.visibility = "unset";
    projectbox.style.left = `${sum}px`
    if(sum == -2804){
        rightArrow.style.visibility = "hidden"
    }
    projectTitle.style.opacity ="1"

    
    checkInfo()
 
})

leftArrow.addEventListener("click", ()=>{
    pictureNumber--
    sum += px
    rightArrow.style.visibility = "unset";
    projectbox.style.left = `${sum}px`
    if(sum == 0){
        leftArrow.style.visibility = "hidden"
    }
   
    checkInfo()
    projectTitle.style.opacity ="1"


})



function checkInfo(){
    projectTitle.innerHTML = titles[pictureNumber].title
    descs.innerHTML = titles[pictureNumber].desc
    

}
panels.forEach(panel =>{
    panel.addEventListener("click", () =>{
       this.panel = panel

       panel.classList.toggle('is-fliped')
    })
})



 
   
      
    

   
     
    
  
