document.addEventListener("DOMContentLoaded", function(){
    resizeContentArea();
});
window.addEventListener('resize', resizeContentArea);

// Function to push footer to bottom of page on shorter content pages
function resizeContentArea() {
    setTimeout(() => {
        var mainContentArea = document.querySelector("#content");
        var headerHeight = document.querySelector('#header').offsetHeight;
        var footerHeight = document.querySelector('#footer').offsetHeight;
        var bodyHeight = document.body.offsetHeight;
        var contentHeight = bodyHeight - (headerHeight + footerHeight);
        mainContentArea.style.minHeight = contentHeight + "px";
    }, 300);
}