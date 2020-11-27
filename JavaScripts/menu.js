let menu = [$(".modal-menu"), $('.menu-button')];

$('.menu-button').click(function openMenu() {
    $(menu).toggleClass("opened");
    $(menu).toggleClass("active");
})

$(document).ready(function paddingMenu() {
    $(".modal-menu").css("padding-top", $(".header-container").height())
})




  