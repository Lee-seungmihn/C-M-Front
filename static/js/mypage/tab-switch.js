// Tab switching for mypage
document.addEventListener("DOMContentLoaded", function () {
    const careerTab = document.querySelector(".user-profile-tab-carrer-wrap");
    const postsTab = document.querySelector(".user-profile-tab-mypost");
    const savedTab = document.querySelector(".user-profile-tab-save-wrap");

    const careerContent = document.querySelector('[data-tab="career"]');
    const postsContent = document.querySelector('[data-tab="posts"]');

    function switchTab(activeTab, tabName) {
        // Remove active class from all tabs
        careerTab.classList.remove("active");
        postsTab.classList.remove("active");
        savedTab.classList.remove("active");

        // Add active class to clicked tab
        activeTab.classList.add("active");

        // Hide all content
        if (careerContent) careerContent.style.display = "none";
        if (postsContent) postsContent.style.display = "none";

        // Show selected content
        if (tabName === "career" && careerContent) {
            careerContent.style.display = "block";
        } else if (tabName === "posts" && postsContent) {
            postsContent.style.display = "block";
        }
    }

    // Set initial tab (career)
    switchTab(careerTab, "career");

    // Tab click events
    careerTab.addEventListener("click", () => switchTab(careerTab, "career"));
    postsTab.addEventListener("click", () => switchTab(postsTab, "posts"));
    savedTab.addEventListener("click", () => switchTab(savedTab, "saved"));
});
