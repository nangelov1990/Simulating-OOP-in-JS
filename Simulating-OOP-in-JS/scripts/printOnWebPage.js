'use strict';

function printOnWebPage(elementId, toBePrinted) {
    document.getElementById(elementId).innerHTML += toBePrinted + '<br>';
}
