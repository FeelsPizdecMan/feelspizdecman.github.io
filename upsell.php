<?php
			
			$success_url = './success';
			
			$server = $_SERVER['HTTP_HOST'];
			$theme = $_GET['theme'];
			$name = $_GET['name'];
			if (isset($_GET['phone'])) {$phone = $_GET['phone'];}
			if (empty($phone))
			{
				echo "I can not send!";
				exit;
			}
			
			$ip = $_SERVER['REMOTE_ADDR'];
			
			$mail_header = "MIME-Version: 1.0\r\n";
			$mail_header.= "Content-type: text/html; charset=UTF-8\r\n";
			$mail_header.= "From: Тема <informer@$server>\r\n";
			$mail_header.= "Reply-to: Reply to Name <reply@$server>\r\n";
			
			$to = "pochta@gmail.com"; //заменить почту на свою
			$subject = "Upsell с сайта: $server";
			
			$message = "<strong>Имя:</strong> $name<br><strong>Телефон:</strong> $phone<br><strong>Товар:</strong> $theme  <br><strong>Время заказа:</strong> ".date("m.d.Y H:i:s")." <br><strong>IP покупателя:</strong> $ip   ";
			if (mail($to,$subject,$message,$mail_header))
			echo '';
			else echo 'failed';
		?>