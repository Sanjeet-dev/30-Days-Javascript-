//Day 11 Promises and Async/Await

// Understanding Promises

const greet = new Promise((resolve,reject)=>{
    let success=false;
    if(success){
      setTimeout(()=>{
        resolve("Hello World!");
      },5000);
    }
    
    else{

      setTimeout(()=>{
        reject("something happened!");
      },4000);
    }
})

greet
    .then((message)=>{
        console.log(message);
        
    }).catch((error)=>{
        console.log(error);
    });

// Chaining Promises


const promiseChain = new Promise((resolve, reject) => {
    resolve(1);
  });
  
  promiseChain
    .then((result) => {
      console.log(result); // 1
      return result * 2;
    })
    .then((result) => {
      console.log(result); // 2
      return result * 2;
    })
    .then((result) => {
      console.log(result); // 4
    })
    .catch((error) => {
      console.error(error);
    });
  

