function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const intro = document.getElementById("intro");
const skills = document.getElementById("skills");
const works = document.getElementById("works");

intro.addEventListener('click', () =>{
    scrollToElement('#intro-section');
});

skills.addEventListener('click', () => {
    scrollToElement('#skills-section');
});

works.addEventListener('click', () => {
    scrollToElement('#works-section');
});
