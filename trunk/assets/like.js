function doLike(){
    if (this.parentNode.valueOf().className == "normal") {
        this.parentNode.valueOf().className = "used";
    }
}
function doUnlike(){
    
}
function sort_by_number_of_like(a,b){
    return Number(a[0].textContent) - Number(b[0].textContent) ;
}

function initRandomLike(lengthPost){
    var like_count = new Array(lengthPost);
    var content = new Array(lengthPost);
    var data = new Array(like_count, content);
    for (var i=1; i<=lengthPost; i++){
        like_count[i-1] = document.getElementById("like_vote"+String(i));
        like_count[i-1].textContent = Math.round(Math.random() * (50000 - 10000) + 10000);
        content[i-1] = document.getElementById("content_"+String(i)).firstChild;
    }
    data.sort(sort_by_number_of_like);
    for (i=1; i<=lengthPost; i++){
        document.getElementById("content_"+String(i)).firstChild = content[i-1];
    }
    
}