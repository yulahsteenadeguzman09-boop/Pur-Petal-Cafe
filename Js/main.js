
document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll(".nav-btn");

    function showPage(pageId, clickedBtn) {

        // Hide all pages
        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        // Remove active button styling
        buttons.forEach(function (button) {
            button.classList.remove("active");
        });

        // Find and display selected page
        const selectedPage = document.getElementById(pageId);

        if (!selectedPage) {
            console.error("Page not found: " + pageId);
            return;
        }

        selectedPage.classList.add("active");
        clickedBtn.classList.add("active");

        // Hide header on Home page
        document.body.classList.toggle("home-active", pageId === "home");
    }

    // Attach click events to navigation buttons
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const pageId = button.getAttribute("data-page");
            showPage(pageId, button);
        });
    });

});
