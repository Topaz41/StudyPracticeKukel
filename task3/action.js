function Button(){
        document.getElementByClass("header").onclick = function(){login()}
    for (var i = 0; i < 200; i++) {

    if (document.getElementById(i) !== null && document.getElementById(i).lastChild !== null && document.getElementById(i).lastChild.lastChild !== null) {
           document.getElementById(i).lastChild.childNodes[2].onclick = function(e){del(e)};
           document.getElementById(i).lastChild.childNodes[1].onclick  = function(e){edit(e)};
        //document.getElementById(i).lastChild.lastChild.addEventListener("click",(i));
    }
}
}
document.getElementById("show").addEventListener("click", show());

function show() {
    let el = document.getElementById("show");
    el.remove();
    dom.create3PhotoPost();
    dom.createShowButton();
    document.getElementById("show").addEventListener("click", show);
}

Button();
function del(e) {
    dom.deletePhotopost(e.target.closest(".post").id);
    Button();
}
function edit(e) {
    dom.editPhotopost(e.target.closest(".post").id);
    Button();
}