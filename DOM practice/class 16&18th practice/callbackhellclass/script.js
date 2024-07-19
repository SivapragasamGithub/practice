function calculateAge(year,callback) {
    setTimeout(()=>{
        let age = 2024 - year
        callback(age)
    },2000)
    
}

let personYear = 1988
calculateAge(personYear,function(birthyear)
{
    console.log(birthyear)
})

console.log("other Lines")

