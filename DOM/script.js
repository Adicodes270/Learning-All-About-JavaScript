let title = document.getElementById('title');
console.dir(title);

let headings = document.getElementsByClassName('headings');
console.dir(headings);

let buttons = document.getElementsByTagName('button');
console.log(buttons);

// Query Selector

let firstel = document.querySelector("button");
console.log(firstel);
let allel = document.querySelectorAll("button");
console.log(allel);

let firstel2 = document.querySelector(".heading");
console.log(firstel2);
let allel2 = document.querySelectorAll(".heading");
console.log(allel2);

let firstel3 = document.querySelector("#title");
console.log(firstel3);
let allel3 = document.querySelectorAll("#title");
console.log(allel3);

let hello = document.querySelector("h2");
hello.innerText = hello.innerText + " idk what to add";

let boxes = document.querySelectorAll('.box');
let id_boxes = boxes[1].getAttribute("class");
console.log(id_boxes);
boxes[1].setAttribute("id", "box1")
let box1= document.querySelectorAll('#box1');
console.dir(box1)
// let idx=1;
// for(box of boxes){
    
//     box.innerText = `Unique Value ${idx}`;
//     idx++;
// }

const style_box = boxes[1].style;
console.log(style_box);

// JS FOLLOWS CAMEL CASE

boxes[1].style.background = "green";
boxes[1].style.fontSize = "26px";

let para = document.querySelector("p");
let newBtn = document.createElement("button");
let newBtn2 = document.createElement("button");
let newBtn3 = document.createElement("button");
let newBtn4 = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn2.innerText = "Click Me!";
newBtn3.innerText = "Click Me!";
newBtn4.innerText = "Click Me!";
para.append(newBtn3);
para.prepend(newBtn4);
boxes[0].before(newBtn2);
boxes[2].after(newBtn);

para.remove();
// boxes.prepend(newBtn);

// MDN DOCS append child , remove child and learn classlist
