// Day 10 Event Handling

// 1.Basic Event handling

// Task1
const btn = document.getElementById("para-changer");
btn.addEventListener("click",()=>{
    document.querySelector("p").textContent = "if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.";
});

// Task2
const image = document.querySelector("img");
image.addEventListener("dblclick",()=>{
 image.classList.toggle("toggle");
})


// 2.Mouse Events

//. Task3
const circle = document.getElementById("circle");
circle.addEventListener("mouseover",()=>{
    circle.style.backgroundColor="cyan";
    circle.style.cursor="pointer";
})
//Task 4
circle.addEventListener("mouseout",()=>{
    circle.style.backgroundColor="white";
})



// 3.Keyboard Events
//Task 5
const input = document.querySelector("input");
input.addEventListener("keydown",(event)=>{
    console.log(input.value);
});

// Task 6
input.addEventListener("keyup",()=>{
    const para = document.querySelector(".input-change");
    para.textContent=input.value;
})


// 4.Form Events

// Task 7
const form = document.querySelector("form");
const submitter = document.querySelector("#submit");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("submit button clicked");
    const formData = new FormData(form,submitter);


    for(const [key,value] of formData){
        const output = `${key}: ${value}\n`;
        console.log(output);
    }

    
})
// Task 8
const dropdown = document.querySelector("#dropdown");
dropdown.addEventListener("change",()=>{
    const selectedValue = dropdown.value;
    document.querySelector("#drop").textContent= `Selected value: ${selectedValue}`;

});

// Event Delegation
// Task 9
const orderedList = document.querySelector("#list");

orderedList.addEventListener("click",(event)=>{
    if(event.target && event.target.matches("li")){
        console.log("child button clicked: "+event.target.textContent);
    }

})

// Task 9
const listItem = document.createElement("li");
listItem.textContent="MongoDB";
listItem.className="newItem";
orderedList.appendChild(listItem);