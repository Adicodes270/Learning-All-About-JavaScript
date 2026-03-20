let marks = [97,85,44,37,76,60];
console.log(marks);
console.log(marks.length); //property 

let heroes = ["ironman",'superman',"hulk","spiderman","antman"]
console.log(marks[0]);
marks[0] = 55;

for (let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

for(let hero of heroes){
    console.log(hero.toUpperCase());
}

// sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
let sum = 0
for (let val of marks) {
    sum += val;
}
average = sum//5;
console.log(`avg marks of the class ${average}`);

items = [250,645,300,900,50];

let i = 0;
// let sum2;
// for (let val of items){
//     i++;
//     let offer = val / 10
//     items[i] = items[i] - offer
//     console.log(`value with offer ${items[i]}`)
// }

for ( let i = 0; i < items.length; i++){
    let offer = items[i] / 10
    items[i] -= offer
}


// Array methods

prac = ['aditya','tejash','vaidik'
]

prac.push("divyanshu");
console.log(prac);

prac.pop(prac[0])
console.log(prac);

pracstr = prac.toString();
console.log(pracstr);

let marvel_heroes1 = ['ironman','spiderman','antman'];
let marvel_heroes2 = ['hulk','thor','hawkeye'];

let all_marvel_heroes = marvel_heroes1.concat(marvel_heroes2);
console.log(all_marvel_heroes);

marvel_heroes2.shift();
console.log(marvel_heroes2);
marvel_heroes2.unshift("hulk");
console.log(marvel_heroes2);
 
console.log(marvel_heroes1.slice(0,3));
marvel_heroes1.splice(3,2,101,102);
console.log(marvel_heroes1);

tc = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
tc.shift();
tc.splice(1,1,"Ola")
tc.push("Amazon");
console.log(tc);