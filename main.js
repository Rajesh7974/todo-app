let input = document.querySelector("input");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let body = document.querySelector("body")

body.style.backgroundImage = "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 0%), url(pexels-sebastiaan-stam-1097456.jpg)";
// body.style.backgroundColor ="black"
body.style.backgroundOrigin = "content-box"
// body.style.backgroundPosition = " center";
body.style.backgroundSize = "100%"
body.style.backgroundRepeat ="repeat"


const todo = (event) => {
    event.preventDefault();

    let li = document.createElement("li")
    li.className = "list-group-item mt-3 border border-primary";
    li.style.backgroundColor = "transparent";
    li.style.color = "white";
    li.innerText = input.value;

    let btndanger = document.createElement("button");
    btndanger.className = "btn btn-danger btn-sm rounded-1 float-end";
    btndanger.innerText = "delete";

    

    li.appendChild(btndanger);
    ul.appendChild(li);
    

    form.reset();
}
form.addEventListener("submit" , todo);


const deletetodo = (e) => {
    if (e.target.className.includes("btn-danger")) {
        if (window.confirm("Are You Sure")) {
            ul.removeChild(e.target.parentElement);
        }
    }
};

ul.addEventListener("click" , deletetodo);