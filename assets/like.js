function post_comment(){
    var prev= document.getElementById("marker");
    
    var acomment = document.createElement("div");
    acomment.setAttribute("class", "acomment");
    
    var child1 = document.createElement("img");
    child1.setAttribute("src", "images/yaoming.jpg");
    child1.setAttribute("class", "profpic");
    child1.setAttribute("alt", "image");
    acomment.appendChild(child1);
    
    var child2 = document.createElement("div");
    child2.setAttribute("class", "pelengkap");
    var child21 = document.createElement("h2");
    child21.textContent = "Anonymous";
    child2.appendChild(child21);
    var child22 = document.createElement("p");
    child22.textContent = getDate();
    child2.appendChild(child22);
    
    acomment.appendChild(child2);
    
    var child3 = document.createElement("p");
    var text = document.getElementById("text");
    
    child3.textContent = text.value;
    acomment.appendChild(child3);
    
    document.getElementById("komentar").insertBefore(acomment, prev);
    
}

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

    }
}
function initRandomLikeMax(lengthPost){
    var data = new Array(lengthPost);
    for (var i=1; i<=lengthPost; i++){
        data[i-1] = new Array(2);
        data[i-1][0] = document.getElementById("like_vote"+String(i));
        data[i-1][0].textContent = Math.round(Math.random() * (100000) - 50000);

    }
}

function initRandomSortedLike(lengthPost){
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

function changeCSS(){
    var css = document.getElementById("CSS");
    css.setAttribute("href", "Main2.css");
}