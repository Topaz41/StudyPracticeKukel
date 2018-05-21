function Button() {
    //document.getElementById("add_button").onclick = function(){addbutton()}
    document.getElementById("logout_but").onclick = function() {
        login()
    }
    for (var i = 0; i < 200; i++) {

        if (document.getElementById(i) !== null && document.getElementById(i).lastChild !== null && document.getElementById(i).lastChild.lastChild !== null) {
            document.getElementById(i).lastChild.childNodes[2].onclick = function(e) {
                del(e)
            };
            document.getElementById(i).lastChild.childNodes[1].onclick = function(e) {
                edit(e)
            };
            document.getElementById(i).lastChild.childNodes[0].onclick = function(e) {
                like(e)
            };
            document.getElementById("show").onclick = function() {
                show()
            };
            //document.getElementById(i).lastChild.lastChild.addEventListener("click",(i));
        }
    }
}


function show() {
    let el = document.getElementById("show");
    el.remove();
    dom.create3PhotoPost();
    dom.createShowButton();
    Button();
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

function like(e) {
    dom.likePhotopost(e.target.closest(".post").id);
    Button();
}

function login() {
    dom.clearMain();
    dom.createError();
    dom.createButton();
    document.getElementById("ret_button").onclick = function() {
        retMain()
    }
}

function retMain() {
    dom.createMain();
    Button();
}

//function addbutton() {
//    dom.clearMain();

//    dom.createButton();
//}