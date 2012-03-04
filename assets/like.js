function doLike(postNumber){
    var d = document.getElementById("like_vote"+String(postNumber));
    if (hasClass(d, "no_vote")) {
        d.textContent = Number(d.textContent)+1;
        removeClass(d, "no_vote");
        addClass(d,"good_vote");
    } else if (hasClass(d,"bad_vote")){
        d.textContent = Number(d.textContent)+1;
        removeClass(d, "bad_vote");
        addClass(d,"no_vote");
    } else if (hasClass(d,"good_vote")){
        
    }
}
function doUnlike(postNumber){
    var d = document.getElementById("like_vote"+String(postNumber));
    if (hasClass(d, "no_vote")) {
        d.textContent = Number(d.textContent)-1;
        removeClass(d, "no_vote");
        addClass(d,"bad_vote");
    } else if (hasClass(d,"bad_vote")){
        
    } else if (hasClass(d,"good_vote")){
        d.textContent = Number(d.textContent)-1;
        removeClass(d, "good_vote");
        addClass(d,"no_vote");
    }
}
function sort_by_number_of_like(a,b){
    
    return Number(b[0].textContent) - Number(a[0].textContent);
}

function initRandomLike(lengthPost){
    var data = new Array(lengthPost);
    for (var i=1; i<=lengthPost; i++){
        data[i-1] = new Array(2);
        data[i-1][0] = document.getElementById("like_vote"+String(i));
        data[i-1][0].textContent = Math.round(Math.random() * (50000 - 10000) + 10000);
        data[i-1][1] = document.getElementById("content_"+String(i)).firstChild.nextSibling;
        data[i-1][1] = document.getElementById("content_"+String(i)).removeChild(data[i-1][1]);
    }
    
    data.sort(sort_by_number_of_like);
    for (i=1; i<=lengthPost; i++){
        document.getElementById("content_"+String(i)).appendChild(data[i-1][1]);
    }
    
}

function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {
	if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
	if (hasClass(ele,cls)) {
    	var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
}