<?php
  //Load Composer's autoloader
  require '../vendor/autoload.php';
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  // Only work if the form was submitted
  if(isset( $_POST['contact-submit'])) {
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $feedback = isset($_POST['feedback']) ? $_POST['feedback'] : '';

    if($name && $email) {
      //Create an instance; passing `true` enables exceptions
      $mail = new PHPMailer(true);

      try {
          //Server settings
          $mail->SMTPDebug = 0;
          $mail->isSMTP();                                            //Send using SMTP
          $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
          $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
          $mail->Username   = '##USERNAME##@emails.kenyerlingweb.com';                     //SMTP username
          $mail->Password   = '##PASSWORD##';                               //SMTP password
          $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
          $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

          //Recipients
          $mail->setFrom('##USERNAME##@emails.kenyerlingweb.com', 'Kenyerling Web');
          $mail->addAddress('##RECIPIENT##');     //Add a recipient

          //Content
          $mail->isHTML(true);                                  //Set email format to HTML
          $mail->Subject = "I'm interested in your services";
          $mail->Body    = "<strong>Name: </strong>$name<br/><strong>Phone: </strong>$phone<br/><strong>Email: </strong>$email<br/><br/>$feedback";
          $mail->AltBody = "Name: $name, Phone: $phone, Email: $email, $feedback";

          $mail->send();
      } catch (Exception $e) {
          echo "Message could not be sent.";
      }
    }
  }
  else {
    echo "error: you need to submit the form!";
  }

  header("Location: ../thank-you.html");
?>
