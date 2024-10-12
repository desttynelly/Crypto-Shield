

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    document.querySelector(".nav-l").classList.toggle("active")
}


document.querySelector(".go").addEventListener("click", function(e){
        e.preventDefault()
    document.querySelector(".name").classList.add("active")
    document.querySelector(".email").classList.add("active")



    let name = document.querySelector("#Username").value;
    // console.log(name)

    let show = document.querySelector(".show");

    show.innerHTML = "Hello " + name
})


document.querySelector(".back").addEventListener("click", function(){

    document.querySelector(".name").classList.remove("active")
    document.querySelector(".email").classList.remove("active")
})


document.querySelector(".go2").addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(".name").classList.add("active")
    document.querySelector(".email").classList.remove("active")
    document.querySelector(".password").classList.add("active")
})

document.querySelector(".back2").addEventListener("click", function(){

    document.querySelector(".name").classList.add("active")
    document.querySelector(".email").classList.add("active")
    document.querySelector(".password").classList.remove("active")
})




document.querySelector(".go3").addEventListener("click", function(e){

    e.preventDefault()
    // document.querySelector(".name").classList.add("active")
    // document.querySelector(".email").classList.remove("active")
    // document.querySelector(".password").classList.add("active")

    // window.alert("Signing up............ please wait")

    document.querySelector(".comm").classList.add("active")

    setTimeout(function(){
        document.querySelector(".comm").classList.remove("active")
    }, 2000);
})










