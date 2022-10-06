
function setDimension(  height, width){

document.getElementById("container").style.height= height
document.getElementById("container").style.width= width
}

setDimension("30vh","80vw");
function changeColor(id){

if(id=="one"){
    return document.getElementById("one").style.backgroundColor= "#d5aaff"
}
else if(id == "two"){
    return document.getElementById("two").style.backgroundColor= "#b28dff"
}else{
  return  document.getElementById("three").style.backgroundColor= "#c5a3ff"

}


}

changeColor("one");
changeColor("two");
changeColor("three");





