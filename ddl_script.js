var format = document.getElementById("formatbtn");
format.addEventListener("click", userinput);
function userinput()
{
	var sharelink = document.getElementById("sharelink").value;
	var inputlink = sharelink.trim();
	var linklength = inputlink.length;
	var fileid;
	var downloadlink;
	
	if(linklength == 0)
	{
		SlimNotifierJs.notification('error', 'Error', 'Please provide a link.', 2500);
	}
	else if(inputlink.includes("/view?usp=sharing") == true)
	{
		var linktruncate = inputlink.replace("https://drive.google.com/file/d/","");
		fileid = linktruncate.replace("/view?usp=sharing","");
		downloadlink = "https://drive.google.com/uc?export=download&id=" + fileid;
		document.getElementById('fileidbtn').disabled = false;
		document.getElementById('copylinkbtn').disabled = false;
	}
	else
	{
		SlimNotifierJs.notification('error', 'Invalid', 'Please enter a valid GDrive link.', 2500);
	}
	
	var directdownloadlink = document.getElementById('downloadlink');
   directdownloadlink.value = downloadlink;
	
}



var copyid = document.getElementById("fileidbtn");
copyid.addEventListener("click", fileid);
function fileid()
{
	var file = document.getElementById("downloadlink").value;
	var file2 = file.replace("https://drive.google.com/uc?export=download&id=","");
	var dummy = $('<textarea>').val(file2).appendTo('body').select();
	document.execCommand('copy');
   $(dummy).remove();
   var textcontrol = document.getElementById("sharelink");
  textcontrol.value = "";
  var textcontrol2 = document.getElementById("downloadlink");
  textcontrol2.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
  SlimNotifierJs.notification('success', 'Successful', 'File ID copied to clipboard.', 2500, false);
}



var copylink = document.getElementById("copylinkbtn");
copylink.addEventListener("click", directlinkcopy);
function directlinkcopy()
{
	var mainlink = document.getElementById("downloadlink").value;
	var dummy = $('<textarea>').val(mainlink).appendTo('body').select();
	document.execCommand('copy');
   $(dummy).remove();
    var textcontrol = document.getElementById("sharelink");
  textcontrol.value = "";
  var textcontrol2 = document.getElementById("downloadlink");
  textcontrol2.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
  SlimNotifierJs.notification('success', 'Successful', 'Download link copied to clipboard.', 2500, false);
}