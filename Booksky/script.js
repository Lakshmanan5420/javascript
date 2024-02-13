var show_arrow=document.getElementById("show-arrow")
var overlay=document.getElementById("overlay")
var popupbox=document.getElementById("pop-up-box")

function showarrow(){
    overlay.style.display="block";
    popupbox.style.display="block";

}

function exit(){
    overlay.style.display="none";
    popupbox.style.display="none";
}

// var heading=document.getElementById("heading");
// console.log(heading)


function saved(){
    var heading=document.getElementById("heading").value;
    var title=document.getElementById("titlename").value;
    var description=document.getElementById("description").value;
// console.log(heading)
var container=document.getElementById("container")

    var div=document.createElement("div")
    div.setAttribute("class","booklist")
    div.innerHTML=`<h1>${heading}</h1>
                     <h3>${title}</h3>
                     <p>${description}</p>
                     <buuton class='btn custom-btn' onclick='deletebox(event)'>Delete</button>`
                container.append(div)

}

var booklist=document.getElementById("booklist")
function deletebox(event){
event.target.parentElement.remove();
}