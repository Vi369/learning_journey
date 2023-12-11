// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log(1, "hanji")
//     }, 1000)
// })

// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("ho gya ji ho gya resolve");
//         resolve();
//     },1000)
// })

// promiseTwo.then(function(){
//     console.log("kya baat hai resolve ho gya hmmmm");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log(3, "resole ho gya kuch data paas kr rahe hai mila ");
//         resolve({username: "vikas", Email: "vikas@example.com"});
//     }, 1000)
// }).then(function(user){
//     console.log("haa mil gya", user);
// });


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "vikas", Email: "vikas@gmail.com"});
//         }
//         else{
//             reject("Error: ye ji sunte ho error aaya hai");
//         }
//     },1000)
// }).then(function(user){
//     console.log(user);
//     return user.username;
//     //for catch this return data we use chaining
// }).then(function(user){
//     console.log(user)
// }).catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("bhaiya hum to chalenge hi chalenge");
// })


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//                 let error = true;
//                 if (!error) {
//                     resolve({username: "vikas", Email: "vikas@gmail.com"});
//                 }
//                 else{
//                     reject("Error: ye ji sunte ho error aaya hai");
//                 }
//             },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive();


async function getAllUsers(){
    const response =await fetch('https://api.github.com/users/vi369');
    try {
        // console.log(response);
        // console.log(typeof response);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("something went wrong pleasee try again later");
        
    }
}

getAllUsers();