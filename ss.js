level = 0;

let circle = "images/circle.png";
let cross = "images/cross.png";

let array = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];
let array1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];

let b1, b2, b3, b4, b5, b6, b7, b8, b9;
let c1, c2, c3, c4, c5, c6, c7, c8, c9;

function click() {

    $("#b1").click(function () {
        b1 = $("#b1 img");
        c1 = b1.attr("src");
        if (c1 == false && level % 2 == 0) {
            b1.attr("src", cross);
            c1 = b1.attr("src");
            index = array.indexOf('c1');
            array.splice(index, 1);
            index = array1.indexOf('b1');
            array1.splice(index, 1);
            b1.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b2").click(function () {
        b2 = $("#b2 img");
        c2 = b2.attr("src");
        if (c2 == false && level % 2 == 0) {
            b2.attr("src", cross);
            c2 = b2.attr("src");
            index = array.indexOf('c2');
            array.splice(index, 1);
            index = array1.indexOf('b2');
            array1.splice(index, 1);
            b2.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b3").click(function () {
        b3 = $("#b3 img");
        c3 = b3.attr("src");
        if (c3 == false && level % 2 == 0) {
            b3.attr("src", cross);
            c3 = b3.attr("src");
            index = array.indexOf('c3');
            array.splice(index, 1);
            index = array1.indexOf('b3');
            array1.splice(index, 1);
            b3.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b4").click(function () {
        b4 = $("#b4 img");
        c4 = b4.attr("src");
        if (c4 == false && level % 2 == 0) {
            b4.attr("src", cross);
            c4 = b4.attr("src");
            index = array.indexOf('c4');
            array.splice(index, 1);
            index = array1.indexOf('b4');
            array1.splice(index, 1);
            b4.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b5").click(function () {
        b5 = $("#b5 img");
        c5 = b5.attr("src");
        if (c5 == false && level % 2 == 0) {
            b5.attr("src", cross);
            c5 = b5.attr("src");
            index = array.indexOf('c5');
            array.splice(index, 1);
            index = array1.indexOf('b5');
            array1.splice(index, 1);
            b5.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b6").click(function () {
        b6 = $("#b6 img");
        c6 = b6.attr("src");
        if (c6 == false && level % 2 == 0) {
            b6.attr("src", cross);
            c6 = b6.attr("src");
            index = array.indexOf('c6');
            array.splice(index, 1);
            index = array1.indexOf('b6');
            array1.splice(index, 1);
            b6.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b7").click(function () {
        b7 = $("#b7 img");
        c7 = b7.attr("src");
        if (c7 == false && level % 2 == 0) {
            b7.attr("src", cross);
            c7 = b7.attr("src");
            index = array.indexOf('c7');
            array.splice(index, 1);
            index = array1.indexOf('b7');
            array1.splice(index, 1);
            b7.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b8").click(function () {
        b8 = $("#b8 img");
        c8 = b8.attr("src");
        if (c8 == false && level % 2 == 0) {
            b8.attr("src", cross);
            c8 = b8.attr("src");
            index = array.indexOf('c8');
            array.splice(index, 1);
            index = array1.indexOf('b8');
            array1.splice(index, 1);
            b8.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });

    $("#b9").click(function () {
        b9 = $("#b9 img");
        c9 = b9.attr("src");
        if (c9 == false && level % 2 == 0) {
            b9.attr("src", cross);
            c9 = b9.attr("src");
            index = array.indexOf('c9');
            array.splice(index, 1);
            index = array1.indexOf('b9');
            array1.splice(index, 1);
            b9.css("visibility", "visible");
            level++;
            checkk();
            setTimeout(() => {
                Tcircle();
            }, 100);
        }
    });
}

function Tcircle() {
    let randomnumber1 = Math.floor(Math.random() * array.length);
    c = array[randomnumber1];
    b = array1[randomnumber1];
    $("#" + b + " img").attr("src", circle);
    c = $("#" + b + " img").attr("src");
    index = array.indexOf(c);
    array.splice(index, 1);
    index = array1.indexOf(b);
    array1.splice(index, 1);
    $("#" + b + " img").css("visibility", "visible");
    level++;
    checkk();
    click();
}

click();

function checkk(){

    if($("#b1 img").attr("src")==cross & $("#b2 img").attr("src")==cross & $("#b3 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b4 img").attr("src")==cross & $("#b5 img").attr("src")==cross & $("#b6 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b7 img").attr("src")==cross & $("#b8 img").attr("src")==cross & $("#b9 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b1 img").attr("src")==cross & $("#b4 img").attr("src")==cross & $("#b7 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b2 img").attr("src")==cross & $("#b5 img").attr("src")==cross & $("#b8 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b3 img").attr("src")==cross & $("#b6 img").attr("src")==cross & $("#b9 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b1 img").attr("src")==cross & $("#b5 img").attr("src")==cross & $("#b9 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b3 img").attr("src")==cross & $("#b5 img").attr("src")==cross & $("#b7 img").attr("src")==cross){
        $("#winner").text("CROSS wins!!");
        level=9;
    }
    else if($("#b1 img").attr("src")==circle & $("#b2 img").attr("src")==circle & $("#b3 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b4 img").attr("src")==circle & $("#b5 img").attr("src")==circle & $("#b6 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b7 img").attr("src")==circle & $("#b8 img").attr("src")==circle & $("#b9 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b1 img").attr("src")==circle & $("#b4 img").attr("src")==circle & $("#b7 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b2 img").attr("src")==circle & $("#b5 img").attr("src")==circle & $("#b8 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b3 img").attr("src")==circle & $("#b6 img").attr("src")==circle & $("#b9 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b1 img").attr("src")==circle & $("#b5 img").attr("src")==circle & $("#b9 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else if($("#b3 img").attr("src")==circle & $("#b5 img").attr("src")==circle & $("#b7 img").attr("src")==circle){
        $("#winner").text("CIRCLE wins!!");
        level=9;
    }
    else{
        console.log("no one");
    }

}  
