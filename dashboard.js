
// document.querySelector("#moon").addEventListener("click", function(){
//     document.querySelector("#moon").classList.add("active");
//     document.querySelector("#sun").classList.add("active");

//     document.querySelector("#moon2").classList.add("active");
//     document.querySelector("#sun2").classList.add("active");

//     document.querySelector("#bclose").classList.add("active");
//     document.querySelector("#wclose").classList.add("active");

//     document.querySelector("#bham").classList.add("active");
//     document.querySelector("#wham").classList.add("active");
    
//     document.querySelector(".front").classList.add("active");

//     document.querySelector(".sidebar").classList.add("highlight");


//     document.querySelector("#lin").classList.add("active");
//     document.querySelector("#lin2").classList.add("active");
//     document.querySelector("#lin3").classList.add("active");


//     document.querySelector(".top-nav").classList.add("active");
//     document.querySelector(".btc").classList.add("active");
//     document.querySelector(".eth").classList.add("active");
//     document.querySelector(".usdt1").classList.add("active");
//     document.querySelector(".usdt2").classList.add("active");
//     document.querySelector(".bnb").classList.add("active");


//     document.querySelector(".chart").classList.add("active");
//     document.querySelector(".analysis").classList.add("active");
//     document.querySelector(".rates").classList.add("active");

//     document.querySelector(".d-chart").classList.add("active");
//     document.querySelector("#d-analysis").classList.add("active");
//     document.querySelector("#d-rates").classList.add("active");
// })






// document.querySelector("#sun").addEventListener("click", function(){
//     document.querySelector("#moon").classList.remove("active");
//     document.querySelector("#sun").classList.remove("active");

//     document.querySelector("#moon2").classList.remove("active");
//     document.querySelector("#sun2").classList.remove("active");

//     document.querySelector("#bclose").classList.remove("active");
//     document.querySelector("#wclose").classList.remove("active");


//     document.querySelector("#lin").classList.remove("active");
//     document.querySelector("#lin2").classList.remove("active");
//     document.querySelector("#lin3").classList.remove("active");



//     document.querySelector("#bham").classList.remove("active");
//     document.querySelector("#wham").classList.remove("active");
    
//     document.querySelector(".front").classList.remove("active");
//     document.querySelector(".sidebar").classList.remove("highlight");
//     document.querySelector(".top-nav").classList.remove("active");
//     document.querySelector(".btc").classList.remove("active");
//     document.querySelector(".eth").classList.remove("active");
//     document.querySelector(".usdt1").classList.remove("active");
//     document.querySelector(".usdt2").classList.remove("active");
//     document.querySelector(".bnb").classList.remove("active");


//     document.querySelector(".chart").classList.remove("active");
//     document.querySelector(".analysis").classList.remove("active");
//     document.querySelector(".rates").classList.remove("active");

//     document.querySelector(".d-chart").classList.remove("active");
//     document.querySelector("#d-analysis").classList.remove("active");
//     document.querySelector("#d-rates").classList.remove("active");
// })






































    // Function to apply dark mode classes
    function applyDarkMode() {

        

        document.querySelector("#moon").classList.add("active");
        document.querySelector("#sun").classList.add("active");
    
        document.querySelector("#moon2").classList.add("active");
        document.querySelector("#sun2").classList.add("active");
    
        document.querySelector("#bclose").classList.add("active");
        document.querySelector("#wclose").classList.add("active");
    
        document.querySelector("#bham").classList.add("active");
        document.querySelector("#wham").classList.add("active");
        
        document.querySelector(".front").classList.add("active");
        document.querySelector(".sidebar").classList.add("highlight");
        document.querySelector(".top-nav").classList.add("active");
        document.querySelector(".btc").classList.add("active");
        document.querySelector(".eth").classList.add("active");
        document.querySelector(".usdt1").classList.add("active");
        document.querySelector(".usdt2").classList.add("active");
        document.querySelector(".bnb").classList.add("active");
    
    
        document.querySelector("#lin").classList.add("active");
        document.querySelector("#lin2").classList.add("active");
        document.querySelector("#lin3").classList.add("active");
    
    
        document.querySelector(".chart").classList.add("active");
        document.querySelector(".analysis").classList.add("active");
        document.querySelector(".rates").classList.add("active");
    
        document.querySelector(".d-chart").classList.add("active");
        document.querySelector("#d-analysis").classList.add("active");
        document.querySelector("#d-rates").classList.add("active");
    }
    
    // Function to remove dark mode classes
    function removeDarkMode() {
        document.querySelector("#moon").classList.remove("active");
        document.querySelector("#sun").classList.remove("active");
    
        document.querySelector("#moon2").classList.remove("active");
        document.querySelector("#sun2").classList.remove("active");
    
        document.querySelector("#bclose").classList.remove("active");
        document.querySelector("#wclose").classList.remove("active");
    
    
        document.querySelector("#lin").classList.remove("active");
        document.querySelector("#lin2").classList.remove("active");
        document.querySelector("#lin3").classList.remove("active");
    
    
        document.querySelector("#bham").classList.remove("active");
        document.querySelector("#wham").classList.remove("active");
        
        document.querySelector(".front").classList.remove("active");
        document.querySelector(".sidebar").classList.remove("highlight");
        document.querySelector(".top-nav").classList.remove("active");
        document.querySelector(".btc").classList.remove("active");
        document.querySelector(".eth").classList.remove("active");
        document.querySelector(".usdt1").classList.remove("active");
        document.querySelector(".usdt2").classList.remove("active");
        document.querySelector(".bnb").classList.remove("active");
    
    
        
    
    
        document.querySelector(".chart").classList.remove("active");
        document.querySelector(".analysis").classList.remove("active");
        document.querySelector(".rates").classList.remove("active");
    
        document.querySelector(".d-chart").classList.remove("active");
        document.querySelector("#d-analysis").classList.remove("active");
        document.querySelector("#d-rates").classList.remove("active");
    }
    
    // Check localStorage on page load to set the initial mode
    if (localStorage.getItem("darkMode") === "enabled") {
        applyDarkMode();
    }




        // Event listener for enabling dark mode
        document.getElementById("moon").addEventListener("click", function() {
            localStorage.setItem("darkMode", "enabled");
            applyDarkMode();
        });
        
        // Event listener for disabling dark mode
        document.getElementById("sun").addEventListener("click", function() {
            localStorage.setItem("darkMode", "disabled");
            removeDarkMode();
        });

            // Event listener for enabling dark mode
    document.getElementById("moon2").addEventListener("click", function() {
        localStorage.setItem("darkMode", "enabled");
        applyDarkMode();
    });
    
    // Event listener for disabling dark mode
    document.getElementById("sun2").addEventListener("click", function() {
        localStorage.setItem("darkMode", "disabled");
        removeDarkMode();
    });






    








// document.querySelector("#moon2").addEventListener("click", function(){
//     document.querySelector("#moon").classList.add("active");
//     document.querySelector("#sun").classList.add("active");

//     document.querySelector("#moon2").classList.add("active");
//     document.querySelector("#sun2").classList.add("active");

//     document.querySelector("#bclose").classList.add("active");
//     document.querySelector("#wclose").classList.add("active");

//     document.querySelector("#bham").classList.add("active");
//     document.querySelector("#wham").classList.add("active");
    
//     document.querySelector(".front").classList.add("active");
//     document.querySelector(".sidebar").classList.add("highlight");
//     document.querySelector(".top-nav").classList.add("active");
//     document.querySelector(".btc").classList.add("active");
//     document.querySelector(".eth").classList.add("active");
//     document.querySelector(".usdt1").classList.add("active");
//     document.querySelector(".usdt2").classList.add("active");
//     document.querySelector(".bnb").classList.add("active");


//     document.querySelector("#lin").classList.add("active");
//     document.querySelector("#lin2").classList.add("active");
//     document.querySelector("#lin3").classList.add("active");


//     document.querySelector(".chart").classList.add("active");
//     document.querySelector(".analysis").classList.add("active");
//     document.querySelector(".rates").classList.add("active");

//     document.querySelector(".d-chart").classList.add("active");
//     document.querySelector("#d-analysis").classList.add("active");
//     document.querySelector("#d-rates").classList.add("active");
// })









// document.querySelector("#sun2").addEventListener("click", function(){
//     document.querySelector("#moon").classList.remove("active");
//     document.querySelector("#sun").classList.remove("active");

//     document.querySelector("#moon2").classList.remove("active");
//     document.querySelector("#sun2").classList.remove("active");

//     document.querySelector("#bclose").classList.remove("active");
//     document.querySelector("#wclose").classList.remove("active");


//     document.querySelector("#lin").classList.remove("active");
//     document.querySelector("#lin2").classList.remove("active");
//     document.querySelector("#lin3").classList.remove("active");


//     document.querySelector("#bham").classList.remove("active");
//     document.querySelector("#wham").classList.remove("active");
    
//     document.querySelector(".front").classList.remove("active");
//     document.querySelector(".sidebar").classList.remove("highlight");
//     document.querySelector(".top-nav").classList.remove("active");
//     document.querySelector(".btc").classList.remove("active");
//     document.querySelector(".eth").classList.remove("active");
//     document.querySelector(".usdt1").classList.remove("active");
//     document.querySelector(".usdt2").classList.remove("active");
//     document.querySelector(".bnb").classList.remove("active");


    


//     document.querySelector(".chart").classList.remove("active");
//     document.querySelector(".analysis").classList.remove("active");
//     document.querySelector(".rates").classList.remove("active");

//     document.querySelector(".d-chart").classList.remove("active");
//     document.querySelector("#d-analysis").classList.remove("active");
//     document.querySelector("#d-rates").classList.remove("active");
// })

document.querySelector("#lin3").addEventListener("click", function(){
    // document.querySelector(".sidebar").classList.add("active")
    window.location = "index.html"
});



document.querySelector("#bham").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.add("active")
    document.querySelector(".d-chart").classList.add("highlight")
});


document.querySelector("#wham").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.add("active")
    document.querySelector(".d-chart").classList.add("highlight")
});



document.querySelector("#bclose").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.remove("active")
    document.querySelector(".d-chart").classList.remove("highlight")
});


document.querySelector("#wclose").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.remove("active")
    document.querySelector(".d-chart").classList.remove("highlight")
});



document.querySelector(".btc").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
    // window.alert("jjjjj")
})

document.querySelector(".eth").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
    // window.alert("jjjjj")
})

document.querySelector(".usdt1").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
    // window.alert("jjjjj")
})

document.querySelector(".usdt2").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
    // window.alert("jjjjj")
})

document.querySelector(".bnb").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
    // window.alert("jjjjj")
})



document.querySelector(".clo").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active")
    document.querySelector(".clo").classList.add("active")

    setTimeout(() => {
    document.querySelector(".clo").classList.remove("active")  
    }, 100);
    // window.alert("jjjjj")
})


// document.querySelector(".all").addEventListener("click", function(){
//     document.querySelector(".sidebar").classList.toggle("active")
// });


// document.querySelector(".upgrade").addEventListener("mouseover", function(){
//     document.querySelector(".forward").classList.add("active")
// });

// document.querySelector(".upgrade").addEventListener("mouseout", function(){
//     document.querySelector(".forward").classList.remove("active")
// })




