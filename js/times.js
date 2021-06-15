var count = 0; //전역 변수

for(var i =1; i<=100; i++){
    if(i % 3 === 0){
        document.write(i + "."); //3,6,9,12,
        count += 1;   //1,2,3,4...3의 배수 일때마다 +1
    }
    
}
document.write("<p>3의 배수의 개수:" + count + "</p>")
