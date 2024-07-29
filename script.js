document.getElementById('condolenceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const message = document.getElementById('message').value;

    if(fullName && message) {
        const condolenceMessage = document.createElement('div');
        condolenceMessage.className = 'message';
        condolenceMessage.innerHTML = `<strong>${fullName}</strong><p>${message}</p>`;

        document.getElementById('condolenceMessages').appendChild(condolenceMessage);

        // Clear form fields
        document.getElementById('fullName').value = '';
        document.getElementById('message').value = '';
    }
});
