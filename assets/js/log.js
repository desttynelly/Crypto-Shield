

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    document.querySelector(".nav-l").classList.toggle("active")
}






document.querySelector(".goo").addEventListener("click", function(){

    // document.querySelector(".name").classList.add("active")
    // document.querySelector(".email").classList.remove("active")
    // document.querySelector(".password").classList.add("active")

    // window.alert("Signing up............ please wait")

    // document.querySelector(".comm").classList.add("active")

    // window.location = "dashboard"
    // setTimeout(function(){
        
    //     document.querySelector(".comm").classList.remove("active")
    // }, 5000);
})





