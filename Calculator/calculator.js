function result() {
    return new Function('return ' + number[0] + operate + number[1])();
}

function equal() {
    if(index == 1){
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
    ans=false;
    decimal=false;
    decimalPosition=-1;
    if(!alreadyClicked){
        alreadyClicked = true;
        if(!equal()){
            operate=operation;
            $("#display").text(0);
            index++;
        } else {
            number[0] = result();
            console.log(number[0]);
            number[1] = 0;
            operate=operation;
            if(Number.isInteger(number[0]) && number[0]<=maximumNumber){
                $("#display").text(number[0]);
            } else {
                $("#display").text(number[0].toExponential(6));
            }
        }
    }
}

const maximumNumber=999999999;
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

        if(ans){
            reset();
        }

        if(number[index]<=maximumNumber){
            
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
        if(equal()){
            number[0] = result();
            number[1] = 0;
            index=0;
            ans=true;
            if(Number.isInteger(number[0]) && number[0]<=maximumNumber){
                $("#display").text(number[0]);
            } else {
                $("#display").text(number[0].toExponential(6));
            }
        }
    });
});