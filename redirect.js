$ips = array("36.255.86.80");
if(!in_array($_SERVER['REMOTE_ADDR'], $ips))
{
  header("HTTP/1.1 401 Unauthorized");
  exit;
}

location.replace("https://google.com/")