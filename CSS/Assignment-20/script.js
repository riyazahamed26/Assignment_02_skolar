// JavaScript for Dynamic Buttons
document.addEventListener('DOMContentLoaded', function() {
    const onOffButton = document.getElementById('on-off-button');
    const switchButton = document.getElementById('switch-button');
    const scrollButton = document.getElementById('scroll-button');
    const toggleButton = document.getElementById('toggle-button');
    const expandingButton = document.getElementById('expanding-button');
    const floatingButton = document.getElementById('floating-button');

    // ON/OFF Button
    onOffButton.addEventListener('click', function() {
        this.innerText = this.innerText === 'ON' ? 'OFF' : 'ON';
        this.classList.toggle('btn-on'); // Example toggle class
    });

    // Switch Button
    switchButton.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    // Scroll Button
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle Button
    let toggleState = false;
    toggleButton.addEventListener('click', function() {
        toggleState = !toggleState;
        if (toggleState) {
            this.innerText = 'ON';
            this.style.backgroundColor = '#28a745'; // Green
        } else {
            this.innerText = 'OFF';
            this.style.backgroundColor = '#dc3545'; // Red
        }
    });

    // Expanding Button (example interaction)
    expandingButton.addEventListener('mouseenter', function() {
        this.style.width = '200px';
    });

    expandingButton.addEventListener('mouseleave', function() {
        this.style.width = 'auto';
    });

    // Floating Button (example interaction)
    floatingButton.addEventListener('click', function() {
        alert('Floating button clicked!');
    });
});
