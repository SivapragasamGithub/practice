// function calculateage(year) {
//     let myPromise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let age = year - 204
//             resolve(age)
//         }, 2000);
//     })
//     return myPromise
// }

// calculateage(1988).then(function (resolvedata) {
//     console.log(resolvedata)
// }).catch(function (rejectdata) {
//     console.log(rejectdata);
// })


function calculateage(year) {
    let myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let age = 2024-year
            if (age > 18) {
                resolve("yes they can vote")
            } else {
                reject("no they cant vote")
            }
        }, 2000)
    })
    return myPromise
}
console.log("do something");
calculateage(1988).then(function (resolvedata) {
    console.log(resolvedata)
}).catch(function (rejectdata) {
    console.log(rejectdata);
})
console.log("yes i am doing");