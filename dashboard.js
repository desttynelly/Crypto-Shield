
document.querySelector("#moon").addEventListener("click", function(){
    document.querySelector("#moon").classList.add("active");
    document.querySelector("#sun").classList.add("active");

    document.querySelector("#bham").classList.add("active");
    document.querySelector("#wham").classList.add("active");
    
    document.querySelector(".front").classList.add("active");
    document.querySelector(".top-nav").classList.add("active");
    document.querySelector(".btc").classList.add("active");
    document.querySelector(".eth").classList.add("active");
    document.querySelector(".usdt1").classList.add("active");
    document.querySelector(".usdt2").classList.add("active");
    document.querySelector(".bnb").classList.add("active");

    // document.querySelector("#trade-img").classList.toggle("active");
    // document.querySelector("#trade-imgg").classList.toggle("active");
    // document.querySelector("#trade-imggg").classList.toggle("active");
    // document.querySelector("#trade-imgggg").classList.toggle("active");
    // document.querySelector("#trade-imggggg").classList.toggle("active");


    document.querySelector(".chart").classList.add("active");
    document.querySelector(".analysis").classList.add("active");
    document.querySelector(".rates").classList.add("active");

    document.querySelector(".d-chart").classList.add("active");
    document.querySelector("#d-analysis").classList.add("active");
    document.querySelector("#d-rates").classList.add("active");
})






document.querySelector("#sun").addEventListener("click", function(){
    document.querySelector("#moon").classList.remove("active");
    document.querySelector("#sun").classList.remove("active");

    document.querySelector("#bham").classList.remove("active");
    document.querySelector("#wham").classList.remove("active");
    
    document.querySelector(".front").classList.remove("active");
    document.querySelector(".top-nav").classList.remove("active");
    document.querySelector(".btc").classList.remove("active");
    document.querySelector(".eth").classList.remove("active");
    document.querySelector(".usdt1").classList.remove("active");
    document.querySelector(".usdt2").classList.remove("active");
    document.querySelector(".bnb").classList.remove("active");

    // document.querySelector("#trade-img").classList.toggle("active");
    // document.querySelector("#trade-imgg").classList.toggle("active");
    // document.querySelector("#trade-imggg").classList.toggle("active");
    // document.querySelector("#trade-imgggg").classList.toggle("active");
    // document.querySelector("#trade-imggggg").classList.toggle("active");


    document.querySelector(".chart").classList.remove("active");
    document.querySelector(".analysis").classList.remove("active");
    document.querySelector(".rates").classList.remove("active");

    document.querySelector(".d-chart").classList.remove("active");
    document.querySelector("#d-analysis").classList.remove("active");
    document.querySelector("#d-rates").classList.remove("active");
})



document.querySelector(".upgrade").addEventListener("mouseover", function(){
    document.querySelector(".forward").classList.add("active")
})

document.querySelector(".upgrade").addEventListener("mouseout", function(){
    document.querySelector(".forward").classList.remove("active")
})




