document.addEventListener('DOMContentLoaded', function () {
    const primaryColorInput = document.getElementById('primaryColor');
    const secondaryColorInput = document.getElementById('secondaryColor');
    const fontSizeInput = document.getElementById('fontSize');
    const fontStyleSelect = document.getElementById('fontStyle');
    const boldCheckbox = document.getElementById('bold');
    const italicCheckbox = document.getElementById('italic');

    primaryColorInput.addEventListener('input', function () {
        document.documentElement.style.setProperty('--primary-color', this.value);
    });

    secondaryColorInput.addEventListener('input', function () {
        document.documentElement.style.setProperty('--secondary-color', this.value);
    });

    fontSizeInput.addEventListener('input', function () {
        document.documentElement.style.setProperty('--font-size', this.value + 'px');
    });

    fontStyleSelect.addEventListener('change', function () {
        document.documentElement.style.setProperty('--font-family', this.value);
    });

    boldCheckbox.addEventListener('change', function () {
        document.documentElement.style.setProperty('--font-weight', this.checked ? 'bold' : 'normal');
    });

    italicCheckbox.addEventListener('change', function () {
        document.documentElement.style.setProperty('--font-style', this.checked ? 'italic' : 'normal');
    });
});
