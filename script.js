$(document).ready(function() {
    console.log("Floyd Period Tracker loaded successfully!");

    // Smooth scrolling for navbar links
    $(".nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        $(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
    });

    // Hover effect on app download buttons
    $(".buttons img").on("mouseenter mouseleave", function() {
        $(this).toggleClass("hover-scale");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector("#photoCarousel"), {
        interval: 3000, // Ganti gambar setiap 3 detik
        pause: "hover", // Berhenti saat mouse hover
        wrap: true, // Ulang kembali ke foto pertama setelah foto terakhir
    });
});
function playVideo() {
    document.querySelector(".video-thumbnail").style.display = "none";
    document.getElementById("video-container").style.display = "block";
}