// $(window).ready(function () {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//         $(".right-column").appendTo(".modile-blog-menu")
//     } else {
//         $(".right-column").appendTo(".blog-content")
//     }
// }).resize(function () {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//         $(".right-column").appendTo(".modile-blog-menu")
//     } else {
//         $(".right-column").appendTo(".blog-content")
//     }
// })

$(".mobile-nav-button").click(function () {
    $(".mobile-nav-button").toggleClass("oppened");
        if ($(".mobile-nav-button").has("oppened")) {
        $(".blog-menu-wrapper").height($(".blog-menu-wrapper").get(0).scrollHeight + "px")
        } else {
            $(".blog-menu-wrapper").height(0)
        }
})

