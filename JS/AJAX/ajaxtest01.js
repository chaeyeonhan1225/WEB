const btn = document.getElementById("requestBtn");
btn.addEventListener('click',function(){
const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
          document.getElementById("text").innerHTML = xhr.responseText;
      }
  };
  
  xhr.open('GET', "./text.txt",true);
  xhr.send();
});