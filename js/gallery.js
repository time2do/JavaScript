    //오른쪽 이미지 클릭하면 이미지 넘기기

    var num = 1;//1부터 7까지 이미지 중 첫번째 이미지

    function nextGallery(){  //함수호출: 함수 이름
        num += 1;
        if(num > 7){   //num이 7 넘어갈때 다시 1로 변경
            num = 1;
        }
        document.getElementById("gallery").src = "../images/img" + num + ".jpg";
            //img1.jpg, img2.jpg ...img7.jpg
    }

    
    function prevGallery(){
        num -= 1
        if(num < 1){
            num = 7;
        }
        document.getElementById("gallery").src = "../images/img" + num + ".jpg";
    }
