<?php

define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', $_ENV['MYSQL_USER']);
define('MYSQL_PASS', $_ENV['MYSQL_PASS']);
define('MYSQL_DB', '23b_icom');

$db = new PDO('mysql:host='.MYSQL_HOST.';dbname='.MYSQL_DB.';charset=UTF-8', MYSQL_USER, MYSQL_PASS);

?>
