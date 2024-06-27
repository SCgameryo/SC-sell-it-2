document.getElementById('takePictureBtn').addEventListener('click', function() {
    alert('Feature not implemented in web version');
});

document.getElementById('sellBtn').addEventListener('click', function() {
    let price = document.getElementById('priceInput').value.trim();
    if (price === '') {
        alert('Please enter a price');
        return;
    }

    sendEmail(price);
});

function sendEmail(price) {
    let recipient = 'recipient@example.com'; // Replace with recipient email address
    let subject = 'New Item for Sale';
    let body = `Price: ${price}`;
    let attachmentPath = 'path/to/attachment.jpg'; // Replace with actual path or use file input to select

    // AJAX request to send email
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/sendEmail');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Email sent successfully');
        } else {
            alert('Failed to send email');
        }
    };

    xhr.send(JSON.stringify({ recipient, subject, body, attachmentPath }));
}
