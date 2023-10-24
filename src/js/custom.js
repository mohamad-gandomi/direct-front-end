//---------------------------------------------
//
//  Table of Contents
//
//    1. Prouct Quantity For Product Page
//
//---------------------------------------------


//---------------------------------------------
// 1. Prouct Quantity For Product Page
//---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const minusButton = document.querySelector(".quantity-button.minus");
    const plusButton = document.querySelector(".quantity-button.plus");

    if (quantityInput && minusButton && plusButton) {
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
    }
});
