const transition = document.querySelector(".transition")
document.addEventListener("DOMContentLoaded", function() {
    transition.classList.add("is-active")
    setTimeout(() => {
        transition.classList.remove('is-active')
    }, 500);
  });



