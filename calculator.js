$(document).ready(function(){
    var firstNumber=0;
    var secondNumber=0;
    var ans=0;
    var decimal=false;
    var decimalPosition=-1;

    $("td").click(function(){
        if($(this).text() != "C" && $(this).text() != "."){
            if(decimal){
                firstNumber += (parseFloat($(this).text())*(10**decimalPosition));
                decimalPosition--;
                $("#display").text(firstNumber);

            } else {
                firstNumber = firstNumber*10 + parseInt($(this).text());
                $("#display").text(firstNumber);
            }
        }
    });

    $("#decimal").click(function(){
        decimal = true;
    });
});