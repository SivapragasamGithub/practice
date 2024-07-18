// function calculateage(year){
    
//     let age = 2024-year
//         return(age)
// }
// let birthyear = calculateage(1988)

//     console.log(birthyear)


//     function calculateage(year,callback){
//     setTimeout (()=>
//     {
//         let age = 2024-year
//        callback(age)
//     },2000
//     )}
        
//   calculateage(1988,function(age){
//       console.log(age)
//     })

        

// function calculateage(year,callback){
//     setTimeout(()=> {
//     let age = 2024-year
//         callback(age)
// },2000)}
// birthyear(1988,function(birthyear)
// {
//     console.log(birthyear)
// })

let num2 = 1
function countdown(num1,num2,callback){
    setTimeout (()=>
    {   
        let count = num1-num2
       callback(count)
    },1000
    )}
        
  countdown(10,1,function(number1){
      console.log(number1)
      
    })
    // function countdown(num1,num2,callback){
    // setTimeout (()=>
    //     {   
    //         let count = num1-num2
    //        callback(count)
    //     },1000
    //     )}
            
    //   countdown(9,1,function(number1){
    //       console.log(number1)
          
    //     })
    
