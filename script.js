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

/* 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("content1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */
