// Selecting And Manipulating elements

//Task1
console.log("Working fine");
const para = document.getElementById("htmlInfo");
para.textContent = "HTML (HyperText Markup Language) is the standard language for creating webpages, defining structure and content using tags like headings, paragraphs, links, and images.";
//Task2
const div = document.querySelector(".rectangle");
div.style.backgroundColor="lightseagreen";

//Creating and Appending Elements
const newElement = document.createElement("div");
newElement.textContent="DOM manipulation involves using JavaScript to dynamically change HTML elements, attributes, or content to update a webpage's structure and appearance.";
document.body.appendChild(newElement);

const newLi = document.createElement("li");
newLi.textContent="HTML,CSS and Javascript";
document.querySelector("#unorder").appendChild(newLi);

// Removing elements

const ul = document.getElementById("unorder");
console.log(ul.parentNode);
ul.parentNode.removeChild(ul);

const clear = document.querySelector("#removeChild");
const first = clear.firstElementChild;
console.log(first);
console.log(clear.lastElementChild);
if(clear.lastElementChild){
    clear.removeChild(clear.lastElementChild);
}

// Modifying attributes and Classes
const image = document.querySelector("img");
const link = "https://img.freepik.com/free-photo/romantic-people-being-love_23-2151103275.jpg?ga=GA1.1.846564853.1717415745&semt=ais_hybrid";
image.setAttribute("src", link);

const rect = document.querySelector("#rect");
rect.classList.add("active");
setTimeout(function(){
    rect.classList.remove("active");
},2000);

// Event handling
const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    document.querySelector("#htmlInfo").textContent="Understand semantic HTML, the box model, CSS Flexbox/Grid, responsive design, accessibility (ARIA), basic SEO principles, DOM manipulation, and the use of modern HTML5 tags. Familiarize yourself with browser developer tools, performance optimization techniques, and the importance of clean, maintainable code. Stay updated with the latest HTML/CSS standards.";
});
const img = document.querySelector("img");
img.addEventListener("mouseover",()=>{
    img.style.border="2px solid blue";
    img.style.borderRadius="8px";
})


