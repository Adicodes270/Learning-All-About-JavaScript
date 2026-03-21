function myFunc(name, n){
    console.log(`Yo ${name}` * n);
}

// name = prompt("Enter your name:");
myFunc("Aditya", 5);

function sum(a,b){
    //local variables wouldnt work beyond this scope
    c = a + b;
    return c;
}

function mul(a,b) {
    c = a * b
    console.log(c);
}
val = sum(11,22);
console.log(val);
mul(10,20);


const sumarrowfunc = (a,b) => {
    console.log(a+b);
}

const mulfunc = (a,b) => {
    return a+b;
}

const printhello = () => {
    console.log("Print")
}

sumarrowfunc(10,20);

mulfunc(10,20);

let count1=0;
function vowelcounter(words){
    const words_lowered = words.toLowerCase();
    for (const char of words_lowered){

        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count1++;
        }
        
        
    }
    return count1;
}


let no_vowels = vowelcounter("HELLO");
console.log(no_vowels);

let count2;
const countvow = (words) => {
    const words_lowered = words.toLowerCase();
    for (const char of words_lowered){

        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count2++;
        }
        
        
    }
    return count2;
}


let arr = [1,2,3,4,5];
arr.forEach(function printVal(val,idx){ // value at each idx
    console.log(val,idx,arr);
})

arr.forEach(function square(n){
    console.log(n*n);
});

const newarr = arr.map((val) => {
    return val*val;
});


const evenarr = arr.filter((val) => {
    return val%2==0;
})

const final = arr.reduce((res,curr) => {
    return res+curr;
})

const marksarr = [90,85,92,95,83,45];

const newmarks = marksarr.filter((val) => {
    return val>90
})

let n = prompt("enter a number :");
let numberarr = [];

for(let i=1; i <=n; i++){
    numberarr[i-1] = i;
}

let sum5 = arr.reduce((prev,curr) =>{
    return prev+curr;
});


let mul5 = arr.reduce((prev,curr) =>{
    return prev*curr;
});