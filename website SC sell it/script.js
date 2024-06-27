document.getElementById('takePictureBtn').addEventListener('click', function() {
    // Replace with actual implementation to take picture (if using a camera API)
    alert('Taking picture...');
});

document.getElementById('sellBtn').addEventListener('click', function() {
    let price = document.getElementById('priceInput').value.trim();
    if (price === '') {
        alert('Please enter a price');
        return;
    }

    let recipient = 'recipient@example.com'; // Replace with actual recipient email
    let subject = 'New Item for Sale';
    let body = `Price: ${price}`;

    // Simulate sending email (replace with actual backend code for sending emails)
    alert(`Sending email to ${recipient} with price: ${price}`);

    // Clear input after selling
    document.getElementById('priceInput').value = '';
});
