// here is the code for toggle button functionality for skills  section 

document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillButton = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillList = document.getElementById('skillList') as HTMLUListElement;

    skillList.style.display = 'none';

    // Add the  click event to toggle button
    toggleSkillButton.addEventListener('click', () => {
        if (skillList.style.display === 'none') {
            skillList.style.display = 'block';
            toggleSkillButton.textContent = 'Hide Skills';
        } else {
            skillList.style.display = 'none';
            toggleSkillButton.textContent = 'Show Skills';
        }
    });
});
