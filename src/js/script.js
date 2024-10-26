
function toggleDropdown() {
    const dropdown = document.getElementById("userDropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.user-icon-post-drop')) {
        const dropdown = document.getElementById("userDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
