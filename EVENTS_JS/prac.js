const toggleButton = document.querySelector(".toggle-button");



toggleButton.addEventListener("click", () =>{

    let mode = toggleButton.getAttribute("current-value");
    if (mode==="light"){
        toggleButton.setAttribute("current-value", "dark")
        document.body.style.backgroundColor="white";
    }
    else if (mode==="dark"){
        toggleButton.setAttribute("current-value", "light")
        document.body.style.backgroundColor="black";
    }
        
    
});


