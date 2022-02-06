function result() {
    return new Function('return ' + number[0] + operate + number[1])();
}

function equal() {
    if(index == 2){
        return true;
    } else {
        return false;
    }
}

function reset() {
    ans = false;
    number = [0,0];
    index=0;
    decimal=false;
    decimalPosition=-1;
    $("#display").text(number[index]);
}

function operator(operation){
    if(!alreadyClicked){
        alreadyClicked = true;
        index++;
        if(!equal()){
            operate=operation;
            $("#display").text(0);
        } else {
            number[0] = result();
            console.log(number[0]);
            number[1] = 0;
            operate=operation;
            $("#display").text(number[0]);
        }
    }
}

var number=[0,0];
var ans=false;
var decimal=false;
var decimalPosition=-1;
var index=0;
var operate="";
var alreadyClicked=false;


$(document).ready(function(){

    $("td").click(function(){

        alreadyClicked = false;
        
        if(equal()){
            index=1;
            $("#display").text(number[index]);
        }

        if($(this).text() != "C" && $(this).text() != "." ){
            if(decimal){
                number[index] += (parseFloat($(this).text()*(10**decimalPosition)));
                $("#display").text(number[index].toFixed(-decimalPosition));
                decimalPosition--;

            } else {
                number[index] = number[index]*10 + parseInt($(this).text());
                $("#display").text(number[index]);
            }
        }
    });

    $("#decimal").click(function(){
        decimal = true;
        number[index] = parseFloat(number[index]);
    });

    $("#cancel").click(function(){
        reset();
    });

    $("#divide").click(function(){
        operator("/");
    });

    $("#multiply").click(function(){
        operator("*");
    });

    $("#subtract").click(function(){
        operator("-");
    });

    $("#addition").click(function(){
        operator("+");
    });

    $("#equal").click(function(){

    });
});