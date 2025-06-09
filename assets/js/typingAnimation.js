
document.addEventListener('DOMContentLoaded', function () {
    const typedTextSpan = document.getElementById('typed-text-target');

    if (typedTextSpan) {
        const options = {
            strings: ['solutions numériques.', 'expériences web.', 'applications mobiles.', 'interfaces intuitives.'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true // Default value
        };

        const typed = new Typed('#typed-text-target', options);
    } else {
        console.error('Element with ID "typed-text-target" not found for Typed.js animation.');
    }
});
