// here is the code for toggling skills visibility
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsList = document.getElementById('skillsList');
    // Initially hide the skills list
    skillsList.style.display = 'none';
    // Add click event to toggle button
    toggleSkillsBtn.addEventListener('click', function () {
        if (skillsList.style.display === 'none') {
            // If the skills are hidden,  make them show
            skillsList.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        }
        else {
            // If the skills are visible, make them hide
            skillsList.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    });
});
