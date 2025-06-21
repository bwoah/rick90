document.addEventListener('DOMContentLoaded', function() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    // Handle image clicks
    document.querySelectorAll('figure img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.className = 'modal-content';
            modal.innerHTML = '';
            modal.appendChild(modalImg);
        });
    });

    // Close modal on click
    modal.addEventListener('click', function() {
        this.style.display = 'none';
    });
});
