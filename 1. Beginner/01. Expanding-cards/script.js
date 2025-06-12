// Select all elements with the class "panel" and store them in a NodeList called panels
const panels = document.querySelectorAll('.panel');

// This function removes the 'active' class from all panels
// It's used to reset the state before activating a new one
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Loop through each panel and add a click event listener
// When a panel is clicked:
// 1. Remove the 'active' class from all panels (so only one is active at a time)
// 2. Add the 'active' class to the clicked panel
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
