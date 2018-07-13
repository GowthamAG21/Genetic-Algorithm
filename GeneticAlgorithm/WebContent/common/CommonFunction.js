function getServerURL(){
	var url="";
    url+=window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    url+=window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
    return url;
}
function showMessageBox(message){
	  document.getElementById("info").innerHTML=message;
	  document.getElementById("info").style.display="block";
	  setTimeout("disablealert()",3000);
}
function disablealert(){
	  document.getElementById("info").style.display="none";
}