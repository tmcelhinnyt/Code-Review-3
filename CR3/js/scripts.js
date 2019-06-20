//Business Logic
$(document).ready(function() {
    $("form#input").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
// //Loop and Array Begin

output = []
// start with an empty array and push into it using the for loop.  Push a number in when it isn't divisable by 3/5/15.

//     for (var output = number; output =0; output -=1) {
//         console.log(output);
//     }
//     if (output % 3 === 0 && output % 5 === 0) {
//     alert("Ping-Pong!");
//     }
//     else if (output % 5 === 0) {
//         alert("Pong!");
//     }
//     else if (output % 3 === 0) {
//         alert("Ping!");
//     } else
//         alert(output + "!");
// //Loop and Array End

    if (number % 3 === 0 && number % 5 === 0) {
        alert("Ping-Pong!");
    }
    else if (number % 5 === 0) {
        alert("Pong!");
    }
    else if (number % 3 === 0) {
        alert("Ping!");
    } else
        alert(number + "!");

    $("#submit").hide();
    $("#resubmit").show();
    });

//User Interface Logic
    $("button#playAgain").click(function() {
        $("#resubmit").hide();
        $("#submit").show();
    });
});
