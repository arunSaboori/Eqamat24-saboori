<?php
//fetch connection details from database.php file using require_once(); function
require_once ('database.php');
//check if it work!
echo $connection; //from database.php file
if (isset($_POST['fetch']))
{
    //mysql_query() performs a single query to the currently active database on the server that is associated with the specified link identifier
    $response = mysqli_query($connect, 'SELECT * FROM products');
    echo "<table border='2' align='center'>
<H2 align='center'> Products Table </h2>
<tr>
<th>Product ID</th>
<th>Product Manufacturer</th>
<th>Product Type</th>
<th>Product Series</th>
<th>MPN</th>
<th>Product Function</th>
</tr>";
    while ($fetch = mysqli_fetch_array($response))
    {
        echo "<tr>";
        echo "<td>" . $fetch['id'] . "</td>";
        echo "<td>" . $fetch['Manufacturer'] . "</td>";
        echo "<td>" . $fetch['Module'] . "</td>";
        echo "<td>" . $fetch['Series'] . "</td>";
        echo "<td>" . $fetch['MPN'] . "</td>";
        echo "<td>" . $fetch['Function'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";

    mysqli_close($connect);
}
?>