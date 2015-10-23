//*********************************************//
//FUNCAO AJAX COMPATIVEL COM VARIOS NAVEGADORES//
//*********************************************//
function ajax(url) {
	var xmlhttp;
	var d = new Date();
	url += "&t=" + d.getTime();
	if (window.XMLHttpRequest) {// compatibilidade com IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}// IF 
	else {// compatibilidade com IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}// ELSE
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function ()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var retorno = xmlhttp.responseText;
			////////////////////////////
			//FUNCAO COM O RETORNO//////
			////////////////////////////
		}
	}
}
