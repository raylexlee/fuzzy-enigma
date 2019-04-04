const proxyurl = "http://127.0.0.1:8080/";
const url = "http://podcast.rthk.hk/podcast/item_all.php?pid=287&lang=zh-CN"; // site that doesn’t send Access-Control-*
const reBody = new XRegExp('^.*<body[^>]*>(.*)<\\/body>.*$','s')
const reScript = new XRegExp('<script[^>]*>.*?<\\/script>','gs')
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/http://esda.wyk.edu.hk/status/staff.html
.then(response => response.text())
.then(function(contents) {  
    const responseText = contents.replace(reBody, '$1').replace(reScript, '');
    console.log(responseText)})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
