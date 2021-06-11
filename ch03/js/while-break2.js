        //숫자 입력 받아서 그 숫자까지 출력하는 프로그램
        var n = 1;
        var value = prompt("원하는 숫자를 입력하세요")

        
        if( value !== null){
            document.write("입력하신 숫자는 " + value + "입니다.<br><br>")  
            //if null 에 추가하면 취소했을때 이 글은 안 보임.

        while( true ){
            
            document.write(n + "<br>");   // n+=1 랑 순서 바뀌면 안됨. 순서 바뀌면 2부터 11까지 입력됨.
            n += 1;
            if( n > value ){
                break;
                 }
            }
         } else{
            document.write("입력이 취소되었습니다.")
        }
        