<?php
if (isset($_POST['upload']))
{
    echo "pressed";
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Uploading File</title>
    </head>
    <body>


<form action = "?" method = "POST" enctype ="multipart/form-data">
       <label>Uploading Files</label>
       <p><input type="file" name="file" /></p>
       <p><input type="submit" name="upload" value="Upload Image"></p>
</form>



</body>
</html>