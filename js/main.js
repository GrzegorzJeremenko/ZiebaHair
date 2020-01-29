let page = 0;
let pageMax = 2;
let pageMin = 0;

function nextPage() {
    if(page < pageMax) page++;
    else if(page == pageMax) page = pageMin;
 
    changePage();
}

function prevPage() {
    if(page > pageMin) page--;
    else if(page == 0) page = pageMax;

    changePage();
}

function changePage() {
    if((page < pageMin) || (page > pageMax)) page = pageMin;

    if(page != 0) {
        document.getElementById("arrowLeft").style.animation = "none";
        document.getElementById("arrowRight").style.animation = "none";
    }

    $( "#page" ).fadeOut( 100, function() {
        $( "#page" ).load( "../page/"+page+".html", function (){
            $( "#page" ).fadeIn(100);
        });
    });
}

function logkey(e) {
    if(e.code == "ArrowLeft") prevPage();
    else if(e.code == "ArrowRight") nextPage();
}

document.addEventListener('keydown', logkey);