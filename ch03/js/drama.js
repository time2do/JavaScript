//나이가 15세 이상이면 "드라마 관람가".아니면 "드라마 관람 불가" 출력

var age = prompt("나이를 입력해주세요")
        
if(age !== null){
    if( age >= 15){  
    document.write("드라마 관람가<br>");
}
else{   //위에 조건 안 맞으면 else
    document.write("드라마 관람 불가<br>");
}

document.write("나이는 " + age + "세 입니다.");
}

else{
document.write("입력이 취소되었습니다.");
}