(function(global){
    'use strict';

    var xhr=new XMLHttpRequest();
    //동기 통신
    xhr.open('get','../data/ajax-desc.txt',false);
    
    //서버요청
    //xhr.send();

    
    var call_btn=document.querySelector('.call');
    var print_area=document.querySelector('.print-area');
    var callAjaxData=function(){
        xhr.send();

        //통신 요청에 따른 응답이 오면 처리
        if(xhr.status===200||xhr.status===304){
            print_area.textContent=xhr.responseText;
        }
        else{
            console.warn('통신 실패');
        }
    };

    call_btn.addEventListener('click',callAjaxData);
})(window);