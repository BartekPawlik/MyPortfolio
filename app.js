const titles = [
    {
        id: 0,
        title: "RecipeBookApp",
        desc: "The 'Recipe App' project displays Recipes for dishs. I used the fetch function to execute a GET request on api.spoonacular.com and subsequently processed and displayed the data.",
    },
    {
        id: 1,
        title: "Rock-Paper-Scissors",
        desc: `The Rock-Paper-Scissors game let users to choose one of three signs,
           in the meantime "computer" pick random options and dispaly result of points.
           I utilized the Math.random() function and implemented a 'for' loop.
           `,
    },
    {
        id: 2,
        title: "Guess-The-Color",
        desc: `The 'Guess the Color' game involves generating a random RGB value and having the user identify the correct color from six boxes. In this project, 
           I utilized the Math.random() function and implemented if statment.`
    },

    {
        id: 3,
        title: "WeatherApp",
        desc: "The 'Weather App' project displays weather conditions for locations searched by users. I used the fetch function to execute a GET request on api.weatherapi.com and subsequently processed and displayed the data.",
    },
    {
        id: 4,
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
const arrowUp = document.querySelector(".arrow")
const pickImg = document.querySelector('.pick-img')
const imgs = document.querySelectorAll('.show-img')
const rightSide = document.querySelectorAll('.right-side')



let px = 0
let sum = 0
let pictureNumber = 0

function mediaPx(){
    const x = window.matchMedia("(max-width: 600px)")

if (x.matches){
    px = 251
}else{
    px = 701
}

}
mediaPx()


checkInfo()



// rightArrow.addEventListener("click", () => {
//     addAnimation()
//     pictureNumber++
//     console.log(pictureNumber)
//     sum -= px
//     console.log(sum)
//     leftArrow.style.visibility = "unset";
//     projectbox.style.left = `${sum}px`
//     if (pictureNumber == 4) {
//         rightArrow.style.visibility = "hidden"
//         projectTitle
//     }
//     checkInfo()
//     timeOut()

// })

// leftArrow.addEventListener("click", () => {
//     addAnimation()
//     pictureNumber--
//     sum += px
//     console.log(px)

//     rightArrow.style.visibility = "unset";
//     projectbox.style.left = `${sum}px`
//     if (sum == 0) {
//         leftArrow.style.visibility = "hidden"
//     }
//     checkInfo()
//     timeOut()
// })

rightArrow.addEventListener("click",()=> {
    addAnimation()
    pictureNumber++
       leftArrow.style.visibility = "unset";
        imgs[pictureNumber].classList.add('pick-img')
        if (pictureNumber == 4) {
                rightArrow.style.visibility = "hidden"
                 projectTitle
                rightSide.forEach(side =>{
                    side.style.right = "100%"
                })
                console.log(pictureNumber)
             
        }
        checkInfo()
        timeOut()
})

leftArrow.addEventListener("click" ,()=>{
    addAnimation()
    pictureNumber--
    rightArrow.style.visibility = "unset";
    imgs[pictureNumber + 1].classList.remove('pick-img')
        if (pictureNumber == 0) {
        leftArrow.style.visibility = "hidden"
    }
    checkInfo()
    timeOut()
})


function checkInfo() {

    projectTitle.innerHTML = titles[pictureNumber].title
    descs.innerHTML = titles[pictureNumber].desc



}

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        this.panel = panel

        panel.style.transform = panel.style.transform === "rotateY(180deg)" ? '' : 'rotateY(180deg)';
    })
})

function addAnimation() {
    projectTitle.classList.add('animation')
    descs.classList.add('animation')
}

function timeOut() {
    setTimeout(() => {
        projectTitle.classList.remove("animation")
        descs.classList.remove('animation')
    }, 1000);
}

arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

// Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            console.log(entry.isIntersecting)

        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const contactPage = document.querySelector('.contact-btn')
const transition = document.querySelector(".transition")


contactPage.addEventListener("click", e => {
    e.preventDefault()
    transition.classList.add("is-active")
    setTimeout(() => {
        transition.classList.remove('is-active')
    }, 800);

    setTimeout(() => {
        window.location = "http://127.0.0.1:5501/Contactpage/contact.html"
    }, 600);
})

const burger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
burger.addEventListener("click", ()=>{
 menu.classList.toggle("burger-run")


})



const section = document.querySelectorAll('.section')
section.forEach(sec => {
    sec.addEventListener('click', ()=>{
        menu.classList.remove("burger-run")
       
        
    })
})