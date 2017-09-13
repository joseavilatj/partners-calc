<?php  
		   $name = $_POST['name'];
		   $email = $_POST['email'];
		   $company = $_POST['company'];
		   $phone = $_POST['phone'];
			$cuerpo .= "Nombre: ".$name."\n"; 
			$cuerpo .= "Email: ".$email."\n"; 
			$cuerpo .= "Empresa: ".$company."\n"; 
			$cuerpo .= "Telefono: ".$phone."\n"; 
            mail("contacto@saintblu.mx","ACII",$cuerpo,$headers);
			header('Location:http://www.saint.mx/herramientacii/form.html');
?> 