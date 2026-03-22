let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1")
})

const handler2 =  () => {
    console.log("button1 was clicked - handler2")
    // console.log(evt);
    // console.log(evt.type);
};

btn1.addEventListener("click",handler2);
btn1.removeEventListener("click",handler2);
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside a div")
// }


// IN INLINE AND JAVASCRIPT EVENT HANDLE JAVASCRIPT GETS MORE PRIORITY
