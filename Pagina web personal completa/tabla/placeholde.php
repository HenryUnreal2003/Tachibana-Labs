<?php
$servername = "localhost";
$username = "root"; // Usuario por defecto en XAMPP
$password = "";     // Contraseña vacía por defecto en XAMPP
$dbname = "DB_clientes";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$Nombre = $_POST["Nombre"];
$Email = $_POST["Email"];
$Telefono = $_POST["Telefono"];

$verificar_material = mysqli_query($conn,"SELECT * FROM tabla_de_clientes WHERE Nombre = '$Nombre'");

if (mysqli_num_rows($verificar_material) > 0) {
    echo '<script>    
         alert("El registro ya existe");
         window.history.go(-1);
        </script>';  
    exit;
}else if(empty($Nombre) || empty($Email) || empty($Telefono)){
    echo '<script>    
         alert("Por favor, rellene TODOS los campos");
         window.history.go(-1);
        </script>';  
    exit;   
}

$Resultado = mysqli_query($conn, "INSERT INTO tabla_de_clientes VALUES (NULL,'$Nombre', '$Email', $Telefono)");


if (!$Resultado) {
    echo '<script> 
            alert("Error de registro");
            window.history.go(-1);
        </script>';
} else {
    echo '<script> 
            alert("Registro realizado correctamente");
            window.location.replace("../../index.html");
        </script>';   
}
// Cerrar consultas
mysqli_close($conexion);

?>