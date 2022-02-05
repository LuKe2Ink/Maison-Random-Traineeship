
var number=[0,0];
var ans=0;
var decimal=false;
var decimalPosition=-1;
var index=0;

$(document).ready(function(){

    $("td").click(function(){
        if($(this).text() != "C" && $(this).text() != "."){
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
        number = [0,0];
        index=0;
        decimal=false;
        decimalPosition=-1;
        $("#display").text(number[index]);
    });

    $("#divide").click(function(){

    });

    $("#multiply").click(function(){
    });

    $("#subtract").click(function(){
    });

    $("#addition").click(function(){
    });

    $("#equal").click(function(){
    });
});