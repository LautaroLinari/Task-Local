const notesContainerEl = document.querySelector(".notesContainer");
const createBtnEl = document.querySelector(".createBtn");

// Cuando se hace clic en el botón crear, agrega una nueva nota en notesContainer
createBtnEl.addEventListener("click",()=>{
    const noteEl = document.createElement("div");
    const pEl = document.createElement("p");
    const imgEl = document.createElement("img");
    noteEl.className = "note";
    imgEl.src = "./assets/icon/delete.png";
    pEl.setAttribute("contenteditable","true")
    noteEl.appendChild(pEl);
    noteEl.appendChild(imgEl);
    notesContainerEl.appendChild(noteEl);
})

notesContainerEl.addEventListener("click",(event)=>{
// Cuando se hace clic en eliminar img, elimina la nota.
    if(event.target.tagName==="IMG"){
        event.target.parentElement.remove();
        updateNotesStorage();
    }
// Cuando se hace clic en el recuadro de la note y se agrega su contenido, esta se almacena automáticamente en localStorage.
    else if(event.target.tagName==="P"){
        noteEls = document.querySelectorAll(".note");
        noteEls.forEach(element => {
            element.onkeyup = function(){
                updateNotesStorage();
            }
        });
    }
})

// Evitar el uso de Enter
document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

// Muestra todas las notas que están en el almacenamiento local.
function showNotes(){
    notesContainerEl.innerHTML = localStorage.getItem("notes");
}

// Actualiza el almacenamiento local.
function updateNotesStorage(){
    localStorage.setItem("notes",notesContainerEl.innerHTML);
    }

// Por defecto.
showNotes();