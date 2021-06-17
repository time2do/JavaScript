//상세 설명 보기 클릭시 텍스트 보이기
function showText(){
    //var text = document.getElementById("desc");
    //text.style.display = "block";
    document.getElementById("desc").style.display="block";

    //var button = document.getElementById("open");
    //button.style.display = "none";
    document.getElementById("open").style.display="none";
}

function hideText(){
    var text = document.getElementById("desc");
    text.style.display = "none";
    var button = document.getElementById("open");
    button.style.display = "block";
}