var btn = $(".btn");

var popup = $(".popup");

var overlay = $(".overlay");

btn.on("click", function(e) {
    popup.addClass("active");
    overlay.addClass("visible");
});

overlay.on("click", function(e) {
    popup.removeClass("active");
    overlay.removeClass("visible");
});