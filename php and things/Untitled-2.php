<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $price = $_POST['price'];
    $photo = $_FILES['photo'];

    $to = 'scurry1531@gmail.com';
    $subject = 'New Item for Sale';
    $message = 'Price: $' . $price . "\n";
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: webmaster@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Process the photo
    $uploadDir = 'uploads/';
    $photoPath = $uploadDir . basename($photo['name']);
    if (move_uploaded_file($photo['tmp_name'], $photoPath)) {
        $message .= 'Photo: ' . $photoPath . "\n";

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo 'Email sent successfully!';
        } else {
            echo 'Failed to send email.';
        }
    } else {
        echo 'Failed to upload photo.';
    }
} else {
    echo 'Invalid request.';
}
?>
