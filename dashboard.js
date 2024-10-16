
document.querySelector(".ham").addEventListener("click", function(){
    document.querySelector("#hey").classList.toggle("hey")
})


document.querySelector(".upgrade").addEventListener("mouseover", function(){
    document.querySelector(".forward").classList.add("active")
})

document.querySelector(".upgrade").addEventListener("mouseout", function(){
    document.querySelector(".forward").classList.remove("active")
})



