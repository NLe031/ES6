"use strict";


var a = 'Test 1';

var b = 'Test 2';

console.log('Logged: ${a}');

function testVar() {
    var a = 30;
    console.log('Function Logged: ${a}');

    if (true) {
        var a = 50;

        console.log('Block Logged: ${a}');
    }
    console.log("here: "+a);
}
testVar();
console.log('END Logged: ${a}');