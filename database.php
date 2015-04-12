
<?php

if (!$link = mysql_connect('localhost', 'root', '')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('Speeds', $link)) {
    echo 'Could not select database';
    exit;
}

$sql    = 'SELECT * FROM Contributor';
$result = mysql_query($sql, $link);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

while ($row = mysql_fetch_assoc($result)) {
    echo $row['Pass'];
    echo '\n';
}

mysql_free_result($result);

?>
