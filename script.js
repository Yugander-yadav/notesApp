// taking input from the textarea Element 

var addBtn=document.querySelector("#submitNotes") // submit notes button 

addBtn.addEventListener('click',()=>{

let notesInput=document.querySelector(".notesInput")  // text Area 
let notes=localStorage.getItem('notes') // notes key in the localStorage

if(notes==null)
{
    notesObj=[]
}else{
    notesObj=JSON.parse(notes)
}
console.log(notesInput.value)
notesObj.push(notesInput.value)
localStorage.setItem("notes",JSON.stringify(notesObj));
console.log(localStorage.getItem("notes"))
showNotes()
})


showNotes=function(){
  
  

console.log("hello world")
    
notesContainer=document.querySelector(".notesContainer")
notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}else{
    notesObj=JSON.parse(notes)
    let html="";
    notesObj.forEach((value,index)=>
    {
        
        html+=`<div class="card">
        <div class="card-header">
          <h2 class="notesTitle">Note${index+1}</h2>
        </div>
        <div class="card-body">
          <p class="card-text">${value}</p>
        
        <button id=${index} class="btn btn-secondary" onclick="deleteNote(this.id)">Delete</button>
          </div> </div>`
    
    
    }
    
    
    )
    notesContainer.innerHTML=html;
}
}

function deleteNote(index){
    console.log("hello world");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes)
        
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes()
    
}

showNotesBtn=document.querySelector("#showNotes")


showNotesBtn.addEventListener('click',()=>{
showNotes()})


let searchBtn=document.querySelector("#searchButton")
let searchTxt=document.querySelector("#search")
searchTxt.addEventListener("input",()=>{

let inputVal=searchTxt.value;
let noteCards=document.getElementsByClassName('card');
Array.from(noteCards).forEach((e)=>{
    let cardTxt=e.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)){
        e.style.display="block"
        console.log(e.getElementsByTagName("p")[0])
    }else{
        e.style.display="none"
    }
})

})
