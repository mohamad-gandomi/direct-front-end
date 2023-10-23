//---------------------------------------------
//
//  Table of Contents
//
//    1. Close Other Tabs When One Tab Opens
//
//---------------------------------------------


//---------------------------------------------
// 1. Close Other Tabs When One Tab Opens
//---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const minusButton = document.querySelector(".quantity-button.minus");
    const plusButton = document.querySelector(".quantity-button.plus");

    minusButton.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value) || 0;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value) || 0;
        quantityInput.value = currentValue + 1;
    });
});
