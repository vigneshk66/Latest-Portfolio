// nav bar
var sidemenu=document.getElementById("sidemenu");
var a= document.querySelector('ul');

a.addEventListener('click',()=>{
    sidemenu.style.right="-200px";
})

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}