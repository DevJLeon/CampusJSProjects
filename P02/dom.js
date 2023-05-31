document.addEventListener("click", showParagraph);
document.addEventListener("dblclick", hideParagraph);

function showParagraph (){
    document.getElementById("demo").innerHTML = "Ola";
};

function hideParagraph (){
    document.getElementById("demo").innerHTML = "";
};