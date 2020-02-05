let page = 0;
let pageMax = 2;
let pageMin = 0;
let pageLoad = false;
let arrowAnimationTimeout;

function nextPage() {
    if(pageLoad == true) {
        if(page < pageMax) page++;
        else if(page == pageMax) page = pageMin;
    
        changePage();
        arrowAnimation();
    }
}

function prevPage() {
    if(pageLoad == true) {
        if(page > pageMin) page--;
        else if(page == 0) page = pageMax;

        changePage();
        arrowAnimation();
    }
}

function arrowAnimation() {
    document.getElementById("arrowLeft").style.animation = "none";
    document.getElementById("arrowRight").style.animation = "none";

    clearTimeout(arrowAnimationTimeout);
    arrowAnimationTimeout = setTimeout(arrowAnimationStart, 5000);
}

function changePage() {
    if((page < pageMin) || (page > pageMax)) page = pageMin;

    pageLoad = false;

    $( "#page" ).fadeOut( 100, function() {
        $( "#page" ).load( "../page/"+page+".html", function (){
            $( "#page" ).fadeIn(100, function () {
                pageLoad = true;
            });
        });
    });
}

function arrowAnimationStart() {
    document.getElementById("arrowLeft").style.animation = "arrowLeft 1s infinite";
    document.getElementById("arrowRight").style.animation = "arrowRight 1s infinite";
}

function logkey(e) {
    if(e.code == "ArrowLeft") prevPage();
    else if(e.code == "ArrowRight") nextPage();
}

document.addEventListener('keydown', logkey);