function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");
    var paragraph = document.querySelector(".about-text p");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        paragraph.classList.remove("expanded");
        paragraph.classList.add("collapsed");
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        paragraph.classList.remove("collapsed");
        paragraph.classList.add("expanded");
    }
}
