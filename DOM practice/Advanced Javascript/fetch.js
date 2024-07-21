fetch("https://restcountries.com/v3.1/all",{
    method:"GET"
})
.then((data)=>{
       return data.json()
})
// .then((result)=>{
//     console.log(result);
// })
.then((result)=>{
    result.forEach(element => {
        let flag = document.createElement("img")
        flag.src = element.flags.png
        document.body.appendChild(flag)
        let languages = document.createElement("language")
        languages.src = element.languages  
        flag.appendChild(languages)  
    });
})
.catch((err)=>{  
    console.log(err);
})