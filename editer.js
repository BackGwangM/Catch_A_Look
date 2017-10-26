var canvas;
var clearEl = $('clear-canvas');
var target;
var width = 20;
var mode;


function all_clear(){
    canvas.clear()
    console.log("전체 지우기 실행");
};

$(function () {
    
    canvas = window._canvas = new fabric.Canvas('c');
    canvas.isDrawingMode= 1;
    canvas.freeDrawingBrush.width = 20;
    
    document.getElementById('pick').addEventListener('click', function (e) {
        target = e.target.id;
        if(target != "pick"){
            $('#choose_color').val(target);
            console.log("색 해쉬 코드 : "+target);
            canvas.freeDrawingBrush.color = target;
        }
    });
    $('#choose_color').change(function(){
        target = $('#choose_color').val();
        console.log("색 해쉬 코드 : "+target);
        canvas.freeDrawingBrush.color = target;
    })
});
/*
function noEvent() {
    if (event.keyCode == 123) {
            return false;
        }
    }
document.onkeydown = noEvent;
*/
