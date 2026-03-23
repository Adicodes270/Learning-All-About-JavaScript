const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector("body");


toggleButton.addEventListener("click", () => {

    body.classList.toggle('dark');

    
    const isDark = body.classList.contains('dark');
    toggleButton.setAttribute("current-value", isDark ? "dark" : "light");


});


