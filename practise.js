
let count =0;

const btns  = document.querySelectorAll('.btn');
const values = document.getElementById("value")

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const  styles = e.currentTarget.classList;
      
        if(styles.contains("decrease")){
         count--;
        }
       else if(styles.contains("increase")){
         count++;
        }
        else{
         count=0;
        }
        values.textContent = count
          if(count<0){
            values.style.color='red' 
          }
          else if(count>0){
            values.style.color='green' 
          }
          else{
            values.style.color='#222' 
          }
    })
})