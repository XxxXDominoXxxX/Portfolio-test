function replaceAboutDescription(){
    document.getElementById("aboutDescription").innerHTML="Hello World";
}

function getApolloData() {
    var xhttp = new XMLHttpRequest();
            console.log("I'm here");
            xhttp.open("POST", "http://localhost:8080/GetDBApolloService/getData", true);
            xhttp.setRequestHeader("Content-Type", "text/xml", "charset", "UTF-8");
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                    //document.getElementById("skills").innerHTML = this.responseText;
                    //alert(xhttp.responseXML);
                    console.log(xhttp.responseXML);
                }
            };
            //xhttp.setRequestHeader("charset", "UTF-8");
            //xhttp.send("<net:getData xmlns:net='http://netsshopping.GetDBApolloService/getData>'");
            var xml = "<?xml version='1.0'?><net:getData xmlns:net='http://netsshopping.GetDBApolloService/getData>'/";
            xhttp.send(xml);
            /* xhttp.onload = function() {
            document.getElementById("skills").innerHTML = this.responseText;
            }
            xhttp.open("POST", "<net:getData xmlns:net='http://netsshopping.GetDBApolloService/>'");
            xhttp.send(); */
}