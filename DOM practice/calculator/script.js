function calculateage(year,callback){
    setTimeout(()=> {
    let age = 2024-year
        callback(age)
},2000)}
birthyear(1988,function(birthyear)
{
    console.log(birthyear)
})