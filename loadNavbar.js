// Get document page language
var language = document.documentElement.lang;

// Load navigation bar corresponding to page's language
if (language === "en") {
    $("#navbar").load("navbar.html");
}
else if (language === "es") {
    $("#navbar").load("es/navbar.html");
}

// Get current id of the page
var navItemId = $("#page-index").text();

// After the navbar loads, highlight the item with the current id (section of the website where the user is)
var navItemExists = setInterval(function () {
    if ($("#navbar").find(".nav-item").eq(navItemId).length) {
        $("#navbar").find(".nav-item").eq(navItemId).addClass(" active");
        clearInterval(navItemExists);
    }
}, 100);

var pageName = location.href.split("/").slice(-1); 

// After the navbar loads, change destination of dropdown flag menu to opposite language page
var dropdownExists = setInterval(function () {
    if ($("#navbar").find(".dropdown-menu").find("a").eq(0).length) {
        
        if (language === "en") {
            $("#navbar").find(".dropdown-menu").find("a").eq(0).attr("href", "es/" + pageName);
        } else if (language === "es") {
            $("#navbar").find(".dropdown-menu").find("a").eq(0).attr("href", pageName);
        }
        
        clearInterval(dropdownExists);
    }
}, 100);