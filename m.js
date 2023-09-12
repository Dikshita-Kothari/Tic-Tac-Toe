let level=1;
let check1,check2,check3,check4,check5,check6,check7,check8,check9;
let circle="images/circle.png";
let cross="images/cross.png";

 

    $("#b1").click(function(){
        let mark=$("#b1 img");
        check1=mark.attr("src");
        if(check1==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check1=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check1=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b2").click(function(){
        let mark=$("#b2 img");
        check2=$("#b2 img").attr("src");
        if(check2==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check2=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check2=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b3").click(function(){
        let mark=$("#b3 img");
        check3=$("#b3 img").attr("src");
        if(check3==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check3=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check3=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b4").click(function(){
        let mark=$("#b4 img");
        check4=$("#b4 img").attr("src");
        if(check4==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check4=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check4=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b5").click(function(){
        let mark=$("#b5 img");
        check5=$("#b5 img").attr("src");
        if(check5==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check5=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check5=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b6").click(function(){
        let mark=$("#b6 img");
        check6=$("#b6 img").attr("src");
        if(check6==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check6=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check6=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });
    
    $("#b7").click(function(){
        let mark=$("#b7 img");
        check7=$("#b7 img").attr("src");
        if(check7==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check7=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check7=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b8").click(function(){
        let mark=$("#b8 img");
        check8=$("#b8 img").attr("src");
        if(check8==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check8=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check8=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });

    $("#b9").click(function(){
        let mark=$("#b9 img");
        check9=$("#b9 img").attr("src");
        if(check9==false & level!=0){
            if(level%2==0){
                mark.attr("src","images/circle.png");
                check9=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
            else{
                mark.attr("src","images/cross.png");
                check9=mark.attr("src");
                mark.css("visibility","visible");
                level++;
                checkk();
            }
        }
    });
    

    function checkk(){

        if(check1==cross & check2==cross & check3==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check4==cross & check5==cross & check6==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check7==cross & check8==cross & check9==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check1==cross & check4==cross & check7==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check2==cross & check5==cross & check8==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check3==cross & check6==cross & check9==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check1==cross & check5==cross & check9==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check3==cross & check5==cross & check7==cross){
            $("#winner").text("CROSS wins!!");
            level=0;
        }
        else if(check1==circle & check2==circle & check3==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check4==circle & check5==circle & check6==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check7==circle & check8==circle & check9==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check1==circle & check4==circle & check7==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check2==circle & check5==circle & check8==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check3==circle & check6==circle & check9==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check1==circle & check5==circle & check9==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else if(check3==circle & check5==circle & check7==circle){
            $("#winner").text("CIRCLE wins!!");
            level=0;
        }
        else{
            console.log("no one");
        }

    }  
    