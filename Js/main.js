
function showPage(pageId, clickedBtn) {

    // Find the requested page
    const targetPage = document.getElementById(pageId);

    // Check if the page exists
    if (!targetPage) {
        console.error("Page not found:", pageId);
        return;
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });

    // Remove active styling from navigation buttons
    document.querySelectorAll('.nav-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Show the selected page
    targetPage.classList.add('active');

    // Highlight the clicked button
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    // Hide header on Home page
    document.body.classList.toggle('home-active', pageId === 'home');
}
