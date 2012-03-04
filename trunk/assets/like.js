function doLike(){
    var postNumber = this.parentNode.className.toString();
    postNumber = postNumber[postNumber.length-1];
    alert(postNumber);
}
function doUnlike(){
    
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