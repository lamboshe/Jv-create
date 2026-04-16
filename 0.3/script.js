// Create link element
const link = document.createElement('a');
link.href = 'https://www.google.com';
link.textContent = 'Click here to visit Google';
link.target = '_blank'; // Opens in new tab

// Add to the page
document.body.appendChild(link);
