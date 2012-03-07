function hide_preview(){
    document.getElementById("konten").className = "hidden_preview";
}

function preview(title, link, deskripsi_link, type, image,video){
    var view = document.getElementById("konten");
    view.className = "preview";
    document.getElementById("preview_title").textContent = title.value;
    document.getElementById("preview_date").textContent = getDate();
    var tlink = document.getElementById("preview_content_link");
    var timage = document.getElementById("preview_content_image");
    var tmov = document.getElementById("preview_content_video");
    
    if (type == "link"){
        tlink.textContent = link.value;
        timage.style.display = "none";
        tmov.style.display = "none";
    } else if (type == "image" ) {
        timage.setAttribute("src", image.value);
        tmov.style.display = "none";
        tlink.style.display = "none";
    } else if (type == "video") {
        tmov.setAttribute("data", video.value);
        tmov.firstChild.setAttribute("value", video.value);
        timage.style.display = "none";
        tlink.style.display = "none";
    }
    
}

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}


function getDate() {
    var dTime = new Date();
    return dTime.getDate()+ "-" + dTime.getMonth() + "-" + dTime.getFullYear(); //+ " " + period
 }
 