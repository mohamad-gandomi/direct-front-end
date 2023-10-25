//---------------------------------------------
//
//  Table of Contents
//
//    1. Prouct Quantity For Product Page
//    2. Dark & Light
//
//---------------------------------------------

jQuery(document).ready(function ($) {

    //---------------------------------------------
    // 1. Prouct Quantity For Product Page
    //---------------------------------------------

    var quantityInput = $("#quantity");

    if (quantityInput.length) {
        // Handle the plus button click
        $(".quantity-button.plus").on('click', function () {
            var currentValue = parseInt(quantityInput.val());
            console.log(currentValue)
            if (!isNaN(currentValue)) {
                quantityInput.val(currentValue + 1);
            }
        });

        // Handle the minus button click
        $(".quantity-button.minus").on('click', function () {
            var currentValue = quantityInput.val();
            console.log(currentValue)
            if (!isNaN(currentValue) && currentValue > 1) {
                quantityInput.val(currentValue - 1);
            }
        });
    }

    //---------------------------------------------
    // 2. Dark & Light
    //---------------------------------------------

    const toggleButton = $("#mode-toggle");
    const html = $("html");

    // Check if the user has a preferred color scheme (light or dark) set in their browser
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Initialize the mode based on user preference
    // if (!prefersDarkMode) {
    //     html.attr("data-bs-theme", "light");
    //     toggleButton.removeClass("icon-sun-bulk text-secondary");
    //     toggleButton.addClass("icon-moon-bulk text-primary");
    // } else {
    //     html.attr("data-bs-theme", "dark");
    //     toggleButton.removeClass("icon-moon-bulk text-primary");
    //     toggleButton.addClass("icon-sun-bulk text-secondary");
    // }

    // Function to toggle between dark and light modes
    toggleButton.on("click", function () {
        if (html.attr("data-bs-theme") == "light") {
            html.attr("data-bs-theme", "dark");
            toggleButton.removeClass("icon-moon-bulk text-primary");
            toggleButton.addClass("icon-sun-bulk text-secondary");
        } else {
            html.attr("data-bs-theme", "light");
            toggleButton.removeClass("icon-sun-bulk text-secondary");
            toggleButton.addClass("icon-moon-bulk text-primary");
        }
    });

});