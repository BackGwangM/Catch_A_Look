
var i = 0;

function want_room(){
    var make_room = document.getElementById("add_room");
    var darkly = document.getElementById("darkly");
    make_room.classList.remove("hidden");
    darkly.classList.remove("hidden");
}

function close_popup(){
    var make_room = document.getElementById("add_room");
    var darkly = document.getElementById("darkly");
    make_room.classList.add("hidden");
    darkly.classList.add("hidden");
}


