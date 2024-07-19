function calculateAge(year,callback) {
    setTimeout(()=>{
        let age = 2024 - year
        callback(age)
    },2000) 
}

function canvote(age,callback) {
    setTimeout(() => {
        if(age>18){
            callback (true)
        } else{
            callback (false)
        }
    }, 3000);
}
let personYear = 1988
calculateAge(personYear,function(personage)
{
    console.log(personage)
    canvote(personage,function(isEligibleForVote){
        console.log(isEligibleForVote);
    })
    
})

console.log("other Lines")

