<?php

if(empty($_POST['business'])  ||
   empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$budget = strip_tags(htmlspecialchars($_POST['budget']));
$business = strip_tags(htmlspecialchars($_POST['business']));
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = 'andrew@1926marketing.com';
$email_subject = "Website Contact Form:  $name";
$email_body = "The following information was received from the homepage contact form on http://1926agency.com.\n\n"."\n\nBudget: $budget\n\nBusiness: $business\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: donotreply@1926agency.com\n";
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         

?>