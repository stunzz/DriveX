function getUserInput() {
	
	var sharelink;
	var fileid;
	var inputlink = document.getElementById("sharelink").value;
	var downloadlink = inputlink.trim();
	var charlength = downloadlink.length;
	var linkindex;
	
	if(downloadlink.includes("https://drive.google.com/uc?id=") == true)
	{
	fileid = downloadlink.replace("https://drive.google.com/uc?id=","");	
	sharelink = "https://drive.google.com/file/d/" + fileid + "/view?usp=sharing";
	document.getElementById('copylinkbtn').disabled = false;
	document.getElementById('fileidbtn').disabled = false;
	}
	else if(downloadlink.includes("https://drive.google.com/uc?export=download&id=") == true)
	{
	fileid = downloadlink.replace("https://drive.google.com/uc?export=download&id=","");	
	sharelink = "https://drive.google.com/file/d/" + fileid + "/view?usp=sharing";
	document.getElementById('copylinkbtn').disabled = false;
	document.getElementById('fileidbtn').disabled = false;
	}
	else if(charlength == 0)
	{
	SlimNotifierJs.notification('error', 'Error', 'It seems the textbox is empty.', 2500);
	}
	else if(downloadlink.includes("https://drive.google.com/u/0/uc?export=download&confirm=") == true)
	{
	linkindex = document.getElementById("sharelink").value;
   const myArray = linkindex.split("=");	
	fileid = myArray[3];	
	sharelink = "https://drive.google.com/file/d/" + fileid + "/view?usp=sharing";
	document.getElementById('copylinkbtn').disabled = false;
	document.getElementById('fileidbtn').disabled = false;
	}
	else{
		var textcontrol5 = document.getElementById("sharelink");
  textcontrol5.value = "";
  SlimNotifierJs.notification('error', 'Error', 'Invalid link.', 2500);
	}

   var textbox3 = document.getElementById('downloadlink');
   textbox3.value = sharelink;
}

function clipboard(){
  document.getElementById("downloadlink").select();
  document.execCommand('copy');
  var textcontrol = document.getElementById("sharelink");
  textcontrol.value = "";
  var textcontrol2 = document.getElementById("downloadlink");
  textcontrol2.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
  SlimNotifierJs.notification('success', 'Successful', 'Link copied to clipboard.', 2500, false);
}

function fileidcopy(){
	
	var file = document.getElementById("downloadlink").value;
	var file2 = file.replace("https://drive.google.com/file/d/","");
	var file3 = file2.replace("/view?usp=sharing","");
	var dummy = $('<textarea>').val(file3).appendTo('body').select();
	document.execCommand('copy');
   $(dummy).remove();
   var textcontrol3 = document.getElementById("sharelink");
  textcontrol3.value = "";
  var textcontrol4 = document.getElementById("downloadlink");
  textcontrol4.value = "";
  document.getElementById('fileidbtn').disabled = true;
  document.getElementById('copylinkbtn').disabled = true;
   SlimNotifierJs.notification('success', 'Successful', 'File ID copied to clipboard.', 2500, false);
}

var format = document.getElementById("formatbtn");
format.addEventListener("click", getUserInput);

var copybtn = document.getElementById("copylinkbtn");
copybtn.addEventListener("click", clipboard);

var fileidbtn = document.getElementById("fileidbtn");
fileidbtn.addEventListener("click", fileidcopy);

var input = document.getElementById("sharelink");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("formatbtn").click();
  }
});

