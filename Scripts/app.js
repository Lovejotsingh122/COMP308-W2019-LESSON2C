"use strict";
// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){
    let myFunctionalVariable = 0;

    function Start() {
        console.log(`%c App Started...${myFunctionalVariable}`
    ,"font-size:20px;color:blue;font-weight:italic;");
    }

    window.addEventListener("load", Start);
})();