//Day12 Error Handling

// Basic Error Handling with Try-Catch
troublesome();
function troublesome(){
    try{
        throw new Error("Dividing By Zero");
    }catch(err){
        console.log("It is related to mathematics",err.message);

    }
}

ArithmeticIssue(5,0);

function ArithmeticIssue(a,b){
    try{
        let c = a/b;
        if(b===0){
            throw new Error("we don't want infinity");
        }else{
            console.log("The result is",c);
        }
    }catch(err){
        console.log(err.message);
    }finally{
        console.log("operation complete");
    }
}

// Custom Error Objects

class CustomError extends Error{
    constructor(message,code){
        super(message);
        this.name=this.constructor.name;
        this.code = code;
    }
}

function kindOfOperation(){
    const success = false;
    if(!success){
        throw new CustomError("Something went wrong!",450);
    }
    return "opration got successful";
}

try{
    const result = kindOfOperation();
    console.log(result);
}catch(error){
    if( error instanceof CustomError){
        console.error(`CustomError [${error.code}]: ${error.message}`);
    }else{
        console.log("unpexted error: ",error.message);
    }
}finally{
    console.log("operation fulfilled");
    
}

// Error Handling in Promises

// 1. how to resolve issue in promise

function errorInPromises(){
    return new Promise((resolve,reject)=>{
        const success = false;
        if(success){
            resolve("certainly task executed");
        }else{
            reject("something happened!");
        }

    })
}
errorInPromises()
.then((msg)=>console.log(msg))
.catch((err)=>console.log("using catch for issue resolving in promises", err));

// 2. what to do if we counter promise in async function

function randomPromise(){
    return new Promise((resolve,reject)=>{
        const success = Math.random() > 0.5;
        setTimeout(()=>{
            if(success){
                resolve("Promise resolved successfully");
            } else{
                reject(new Error("promise rejected with an error"));
            }
        },1000)
    })
}

async function handlePromise(){
    try{
        const prevFunc = randomPromise();
        const result = await prevFunc;
        console.log(result);
    }catch(err){
        console.log("Caught an error: ", err.message);
    }
}
handlePromise()

// Graceful Error Handling in Fetch
function fetchInvalidData(){
    fetch("https://invalid-url.example.com/data")
    .then((response)=>{
        if(!response.ok){
            throw new Error("HTTP error! ", response.status);
        }
        return response.json();
    })
    .then((data)=> console.log("data received: ",data))
    .catch(error => console.log("Error Caught",error));
}
fetchInvalidData();

// async/await Error Handling

async function fetchNotValidData(){
    try{
        const response = await fetch('https://api.example.com/data');
        if(!response.ok){
            throw new Error(`HTTP issue ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Let's see the error",error);
    }

}
fetchNotValidData();