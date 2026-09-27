// Select the text element
const overlayText = document.querySelector(".overlay-text");
const fullPageImage = document.querySelector(".full-page-image");

fullPageImage.addEventListener("click", () => {
    if (overlayText.style.display === "none") {
        overlayText.style.display = "block";
    } else {
        overlayText.style.display = "none";
    }
});