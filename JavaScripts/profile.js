$(document).ready(function () {
    $(".profile-content").css("padding-top", $(".header-container").height())
})

$(".profile-menu-button").click(function () {
    $(".profile-menu-container").toggleClass("active");
})

$(".select-event").nSelect();

$(".sorting-events").nSelect();