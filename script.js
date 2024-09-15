const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        notescontainer.innerHTML = notes;
    }
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "img/Delete.png";
    img.className = "input-box-img";
    noteDiv.appendChild(inputBox);
    inputBox.appendChild(img);
    notescontainer.appendChild(noteDiv);

    inputBox.addEventListener("keyup",updateStorage);
})
notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes.document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onKeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if (event.key === "Enter" && document.activeElement.hasAttribute("contenteditable")) {
        event.preventDefault(); // Prevent default behavior of Enter key
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const br = document.createElement("br");
        range.deleteContents();
        range.insertNode(br);
        range.setStartAfter(br);
        range.collapse(true);
    }
})