let menu = [$(".modal-menu"), $('.menu-button')];

$('.menu-button').click(function openMenu() {
    $(menu).toggleClass("opened");
    $(menu).toggleClass("active");
})

$(document).ready(function paddingMenu() {
    $(".modal-menu").css("padding-top", $(".header-container").height())
})


// $('#my-element').datepicker([options])

// Доступ к экземпляру объекта
$('#my-element').data('datepicker')

let ModalEnterButtons = $(".modal-enter-choose");
let ModalEnterContent = $(".modal-enter-content-wrapper", ".modal-register-content-wrapper")

$(".modal-enter-choose").click(function chooseform() {
    $(".modal-enter-choose").removeClass("active");
    $(this).addClass("active");
    if ($(ModalEnterButtons[0]).hasClass("active")) {
        $(".modal-enter-content-wrapper").height($(".modal-enter-content-wrapper").get(0).scrollHeight + "px");
        $(".modal-register-content-wrapper").height(0);
    }
    if ($(ModalEnterButtons[1]).hasClass("active")) {
        $(".modal-register-content-wrapper").height($(".modal-register-content-wrapper").get(0).scrollHeight + "px")
        $(".modal-enter-content-wrapper").height(0)
    }
})

$("#open-enter-form").click(function openEnterModal() {
    $(".modal-enter-wrapper").addClass("oppened");
    $(ModalEnterButtons[0]).addClass("active");
    $(".modal-enter-content-wrapper").height($(".modal-enter-content-wrapper").get(0).scrollHeight + "px");
})

$(".close-modal").click(function closeModal() {
    $(".modal-enter-wrapper").removeClass("oppened");
    $(".modal-enter-choose").removeClass("active");
    $(".modal-register-content-wrapper").height(0);
    $(".modal-enter-content-wrapper").height(0)
})