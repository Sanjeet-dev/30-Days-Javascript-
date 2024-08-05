// Day 10 Event Handling

// Basic Event handling

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


// Mouse Events

//. Task3

