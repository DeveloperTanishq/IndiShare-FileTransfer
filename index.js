const dropZone  = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browseBtn = document.querySelector(".browseBtn");

dropZone.addEventListener("dragover", (e)=>{
   e.preventDefault();
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
     }
});


dropZone.addEventListener("dragleave", (e)=>{
    dropZone.classList.remove("dragged");
});

dropZone.addEventListener("drop", (e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    if (files.length) {
        fileInput.files = files;        
    }
});


browseBtn.addEventListener("click", ()=>{
    fileInput.click();
})


const uploadFile = ()=> {

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append(file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        
    }
}