const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let newinputBox = document.createElement("p");
    let icon = document.createElement("i");
    newinputBox.setAttribute("contenteditable", "true");
    newinputBox.className=("input-box");
    icon.className="bx bxs-trash-alt";
    let newdiv = document.createElement("div");
    newdiv.classList = "newdiv";
    newdiv.appendChild(newinputBox);
    newdiv.appendChild(icon);
    notesContainer.appendChild(newdiv);
    newdiv.style.marginBottom = "40px";
})

notesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "I"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown" , event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
