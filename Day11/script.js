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
        reject("success rejected!");
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


// Async/Await
async function myFunction() {
    let promise = new Promise((resolve, reject) => {
      let retrieve = false;
      if(retrieve){
        setTimeout(() => {
            resolve("retrieval successful!");
        },1000);
      }else{
        setTimeout(() => {
            reject("unable to fetch anything")
        }, 500);
      }
    });
  
    try{
        let result = await promise;
        console.log(result);
    }catch(error){
        console.log(error);
        
    }
  }
  console.log(myFunction());

  // Fetching Data from an API

  async function fetchData(){
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    let data = await response.json();
    console.log(data);
    }
    catch(err){console.log("fetch unsuccessful", err.message)}

  }
  console.log(fetchData());

  //Concurrent Promises

  async function fetchData2(){
    let [res1, res2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()),
        fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json())
    ]);
    console.log(`posts result: ${res1}\n todos results: ${res2}`);
  }

  let data = fetchData2();
  console.log(data);

// promise.race
const promises = [
    new Promise((resolve)=>setTimeout(()=>resolve("one"),100)),
    new Promise((resolve)=> setTimeout(()=>resolve("two"),500))
];

Promise.race(promises)
.then((val)=>console.log(val))
.catch((err)=>{
    console.log(err);
})
  