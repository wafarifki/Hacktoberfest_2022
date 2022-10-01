<?php
echo 'email : ';
$input = fopen("php://stdin", "r");
$email = trim(fgets($input));
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
} else {
    echo "Valid email format";
}
