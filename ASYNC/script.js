// // console.log("one");
// // console.log("two");
// // console.log("three");

// // function hello() {
// //     console.log("hello");
// // }

// // setTimeout(() => {
// //     console.log("hello");
// // }, 4000);

// // console.log("three");
// // console.log("four");


// function sum (a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }

// calculator(1,2,sum);

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello,4000);

// // Nesting 

// let age = 19;

// if (age>= 18) {
//     if (age>= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child")
// }

// function getData(dataId,getNextData) {
//     setTimeout(() => {

//         console.log("data",dataId)
//         if (getNextData){
//             getNextData();
//         }

//     }, 2000);
//     console.log(`data with ${dataId}`);
// }

// getData(1 , () => {
//     getData(2 , () => {
//         getData(
//             3);
//     })
// });


const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("I have a promise");
    // resolve("Finished");
    resolve("success");
    });
}

promise = getPromise();

promise.then( (res) => {
    console.log("promise fulfilled",res);
});

promise.catch( (err) => {
    console.log("promise was rejected",err);
});

function asyncFunc() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        },3000)
    })
}

function asyncFunc2() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        },3000)
    })
}



// console.log("fetching data1")
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2")
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     }) 
// }) 

console.log("fetching data1....");
asyncFunc().then((res) => {
    console.log("fetching data2....");
    asyncFunc2().then((res) => {})
})


function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000)
  
    })
}

async function WeatherData() {
    await api();
    await api();
}

// function getData(dataId, getNextData) {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {

//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }

//         }, 2000);
//     });
  
// }