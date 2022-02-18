var format = document.getElementById("formatbtn");
format.addEventListener("click", UserInput);

function UserInput()
{
	
	var inputtrim = document.getElementById("mainlink").value;
	var inputlink = inputtrim.trim();
	var linklength = inputlink.length;
	var apitrim = document.getElementById("apikey").value;
	var inputapi = apitrim.trim();
	var apilength = apitrim.length;
	var fileid;
	var streamlink;
	
	if(inputlink.includes("https://drive.google.com/u/0/uc?export=download&confirm=") == true)
	{
    const indexarray = inputlink.split("=");	
	  fileid = indexarray[3];
	  streamlink = "https://www.googleapis.com/drive/v3/files/" + fileid + "?alt=media&key=" + inputapi;  
	  document.getElementById('fileidbtn').disabled = false;
	  document.getElementById('apionlybtn').disabled = false;
	  document.getElementById('copylinkbtn').disabled = false;
	}
	else if(inputlink.includes("/view?usp=sharing") == true)
	{
		var linkfront = inputlink.replace("https://drive.google.com/file/d/","");
		fileid = linkfront.replace("/view?usp=sharing","");
		streamlink = "https://www.googleapis.com/drive/v3/files/" + fileid + "?alt=media&key=" + inputapi;
		document.getElementById('fileidbtn').disabled = false;
	  document.getElementById('apionlybtn').disabled = false;
	  document.getElementById('copylinkbtn').disabled = false;
	}	
	else if(inputlink.includes("https://drive.google.com/uc?id=") == true)
	{
		fileid = inputlink.replace("https://drive.google.com/uc?id=","");
		streamlink = "https://www.googleapis.com/drive/v3/files/" + fileid + "?alt=media&key=" + inputapi;
		document.getElementById('fileidbtn').disabled = false;
	  document.getElementById('apionlybtn').disabled = false;
	  document.getElementById('copylinkbtn').disabled = false;
	}
	else if(inputlink.includes("https://drive.google.com/uc?export=download&id=") == true)
	{
		fileid = inputlink.replace("https://drive.google.com/uc?export=download&id=","");
		streamlink = "https://www.googleapis.com/drive/v3/files/" + fileid + "?alt=media&key=" + inputapi;
		document.getElementById('fileidbtn').disabled = false;
	  document.getElementById('apionlybtn').disabled = false;
	  document.getElementById('copylinkbtn').disabled = false;
	}
	else if(linklength == 0)
	{
		SlimNotifierJs.notification('error', 'Error', 'Please provide a link.', 2500);
	}	
	else
	{
		SlimNotifierJs.notification('error', 'Invalid', 'Please enter a valid GDrive link.', 2500);
	}
	
	var streamapilink = document.getElementById('streamlink');
   streamapilink.value = streamlink;
	
}

var defaultapi = document.getElementById("defaultapibtn");
defaultapi.addEventListener("click", setdefault);
function setdefault()
{

   var defaultclear = document.getElementById('apikey');
   defaultclear.value = "";

   SlimNotifierJs.notification('info', 'Using default API', 'This is an experimental API, it may or may not work as intended.', 4500, false);
	
	var defaultclear = document.getElementById('apikey');
   defaultclear.value = "AIzaSyDMks7dM5NQKbGmEbbHqmGDs7kkv4mQJ_Q";
   
   
}

var copystreamlink = document.getElementById("copylinkbtn");
copystreamlink.addEventListener("click", copylink);
function copylink()
{
	document.getElementById("streamlink").select();
  document.execCommand('copy');
  var textcontrol = document.getElementById("mainlink");
  textcontrol.value = "";
  var textcontrol2 = document.getElementById("apikey");
  textcontrol2.value = "";
  var textcontrol3 = document.getElementById("streamlink");
  textcontrol3.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
  document.getElementById('apionlybtn').disabled = true;
  SlimNotifierJs.notification('success', 'Successful', 'Link copied to clipboard.', 2500, false);
	
}


var fileidcopy = document.getElementById("fileidbtn");
fileidcopy.addEventListener("click", cpfileid);
function cpfileid()
{
	var file = document.getElementById("streamlink").value;
	var file2 = file.replace("https://www.googleapis.com/drive/v3/files/","");
  const indexarray = file2.split("?");	
	var file3 = indexarray[0];
	var dummy = $('<textarea>').val(file3).appendTo('body').select();
	document.execCommand('copy');
   $(dummy).remove();
   var textcontrol = document.getElementById("mainlink");
  textcontrol.value = "";
  var textcontrol2 = document.getElementById("apikey");
  textcontrol2.value = "";
  var textcontrol3 = document.getElementById("streamlink");
  textcontrol3.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
  document.getElementById('apionlybtn').disabled = true;
  SlimNotifierJs.notification('success', 'Successful', 'File ID copied to clipboard.', 2500, false);
}


var apicopy = document.getElementById("apionlybtn");
apicopy.addEventListener("click", cpapi);
function cpapi()
{
	var api = document.getElementById("streamlink").value;
	const indexarray = api.split("?");	
	var api2 = indexarray[1];
	var api3 = api2.replace("alt=media&key=","");
	var dummy = $('<textarea>').val(api3).appendTo('body').select();
	document.execCommand('copy');
   $(dummy).remove();
   var textcontrol = document.getElementById("mainlink");
  textcontrol.value = "";
  var textcontrol2 = document.getElementById("apikey");
  textcontrol2.value = "";
  var textcontrol3 = document.getElementById("streamlink");
  textcontrol3.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
  document.getElementById('apionlybtn').disabled = true;
  SlimNotifierJs.notification('success', 'Successful', 'API Key copied to clipboard.', 2500, false);
}
