// Toggle project details
function toggleProjectDetails(id) {
    const card = event.currentTarget;
    card.classList.toggle('expanded');
    
    const content = document.getElementById(`expanded-${id}`);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactMenu = document.getElementById('contactMenu');
    const closeContact = document.getElementById('closeContact');
    const backdrop = document.getElementById('backdrop');
    
    contactBtn.addEventListener('click', function() {
        contactMenu.classList.toggle('active');
        backdrop.classList.toggle('active');
    });
    
    closeContact.addEventListener('click', function() {
        contactMenu.classList.remove('active');
        backdrop.classList.remove('active');
    });
    
    backdrop.addEventListener('click', function() {
        contactMenu.classList.remove('active');
        backdrop.classList.remove('active');
    });
});

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
        () => {
            console.log('Copied to clipboard');
            // Optional: Show a notification
        },
        (err) => {
            console.error('Could not copy text: ', err);
        }
    );
}
