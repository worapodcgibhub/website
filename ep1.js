const box=document.getElementById('box');

function toggleDarkmode(){
    box.classList.toggle("darkmode");

    if(box.classList.contains("darkmode")){
        box.style.color="red";
    }else{
        box.style.color="green";
    }


}

