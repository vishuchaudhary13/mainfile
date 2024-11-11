document.addEventListener('DOMContentLoaded', (event) => {
    const emailDiv = document.querySelector('.email');
    const emailText = emailDiv.querySelector('p').innerText;

    emailDiv.addEventListener('click', () => {
        window.location.href = `mailto:${emailText}`;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {   
    const callDiv = document.querySelector('.phone'); 
    const phoneNumber = callDiv.querySelector('p').innerText;
    callDiv.addEventListener('click', () => {
        window.location.href = `tel:${phoneNumber}`;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const locationDiv = document.querySelector('.location');
    const locationText = locationDiv.querySelector('p').innerText;

    locationDiv.addEventListener('click', () => {

        window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Select the <p> element with the class "resume"
    const resumeElement = document.querySelector('.resume');

    // Add click event listener to the <p> element
    resumeElement.addEventListener('click', () => {
        // Navigate to the new HTML file
        window.location.href = 'second.html';
    });
});


