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


// Get all elements with the class "modal-trigger"
const modalTriggers = document.querySelectorAll('.modal-trigger');

// Add a click event listener to each trigger
modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        // Get the value of the "data-modal" attribute
        const modalId = trigger.getAttribute('data-modal');
        
        // Use the modalId to open the corresponding modal
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Close modal when clicking outside of the modal content
const modals = document.querySelectorAll('.modal');

modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
  