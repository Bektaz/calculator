//default screen
document.getElementById('screenpar').innerHTML = '0';
//define global variables
var content;
var isPressable = true;
var isClronceActive;
var isClrActive = true;
var isCalculateexecuted = false;
var isclroncefor1sttime = true;
var isDotPressable = false;
var toglepmactive = false;
var togglepm = true;
var isSoundon = true;
var st;
var k = 0;
var ar = [0,undefined,0];
//for pressing numbers
function clicknums(num, bt){
  playSound();       
  if(!isCalculateexecuted){
      function btnpress(){
            clroncefor1sttime();
            isclroncefor1sttime = false;
            toglepmactive = true;
            if(document.getElementById('screenpar').innerHTML[0]==='0'){
                if(document.getElementById('screenpar').innerHTML[1]==='.'){
                  isPressable = true;
                }else{
                  isPressable = false;
                }
              }
            if(typeof ar[1] === 'undefined') {
                  if(isPressable){
                    content = document.createTextNode(num);         
                    document.getElementById("screenpar").appendChild(content);                
                    ar[0] = Number(document.getElementById('screenpar').innerHTML);
                    isClronceActive = true;
                    isDotPressable = true;
                  };
            }
            else {
                  if(isPressable){
                    clronce();
                    isClronceActive = false;
                    content = document.createTextNode(num);         
                    document.getElementById("screenpar").appendChild(content);
                    ar[2] = Number(document.getElementById('screenpar').innerHTML);
                    ar[3] = eval(ar[0]+ar[1]+ar[2]);
                  };
            }
            k++;
            if(k>10){
              isPressable = false;
            }      
      }
      btnpress();
  }else{
    clraftercalculateexecution();
    isClrActive = false;
    btnpress();
  }
}
//operators
function operators(ops){
  playSound();    
  isPressable = true;
  ar[1] = ops;
  if(typeof ar[3] !== 'undefined' && !isCalculateexecuted){
    ar[0] = ar[3];
    document.getElementById('screenpar').innerHTML = ar[0];    
    isClronceActive = true;
  }else if(typeof ar[3] !== 'undefined' && isCalculateexecuted){
    ar[0] = ar[4];
    document.getElementById('screenpar').innerHTML = ar[0];    
    isClronceActive = true;
    isCalculateexecuted = false;
  }
  sliceto11();
}
//calculation
function calculate(){
  playSound();    
  toglepmactive = false;
  if(ar[1]==='+'){
    ar[0]+=ar[2];
    document.getElementById('screenpar').innerHTML = ar[0];
    ar[4] = ar[0];
    isClronceActive = true;
    isCalculateexecuted = true;
    isClrActive = true;
  }
  if(ar[1]==='-'){
    ar[0]-=ar[2];
    document.getElementById('screenpar').innerHTML = ar[0];
    ar[4] = ar[0];
    isClronceActive = true;
    isCalculateexecuted = true;
    isClrActive = true;    
  }
  if(ar[1]==='*'){
    ar[0]*=ar[2];
    document.getElementById('screenpar').innerHTML = ar[0];
    ar[4] = ar[0];
    isClronceActive = true;
    isCalculateexecuted = true;
    isClrActive = true;    
  }
  if(ar[1]==='/'){
    ar[0]/=ar[2];
    document.getElementById('screenpar').innerHTML = ar[0];
    ar[4] = ar[0];
    isClronceActive = true;
    isCalculateexecuted = true;
    isClrActive = true;  
  }
  st = document.getElementById('screenpar').innerHTML;
  sliceto11();
}
//calculate sqrt
function calsqrt(){
  playSound();    
  document.getElementById('screenpar').innerHTML = Math.sqrt(Number(document.getElementById('screenpar').innerHTML));
  sliceto11();
}
//calculate percent
function calpercent(){
  playSound();    
  if(typeof ar[1] !== 'undefined'){
    ar[2] = Number((ar[2]*ar[0])/100);
    document.getElementById('screenpar').innerHTML = ar[2];
    ar[3] = eval(ar[0]+ar[1]+ar[2]);
    sliceto11();
  }
}
//dot button press
function adddot(){
  playSound();    
  if(!isCalculateexecuted){
    if(typeof ar[1] === 'undefined') {
      if(isDotPressable){
        content = document.createTextNode('.');         
        document.getElementById("screenpar").appendChild(content);                
        ar[0] = Number(document.getElementById('screenpar').innerHTML);
        isDotPressable = false;
      };
    }else{
      if(isDotPressable){
        content = document.createTextNode('.');         
        document.getElementById("screenpar").appendChild(content);                
        ar[2] = Number(document.getElementById('screenpar').innerHTML);
        isDotPressable = false;
      };
    }  
  }
}
//delete button function
function del(){
  playSound();
  if(!isCalculateexecuted){
    if(typeof ar[1] === 'undefined') {
      var list = document.getElementById('screenpar');  
      list.removeChild(list.childNodes[list.childNodes.length-1]);                
      ar[0] = Number(document.getElementById('screenpar').innerHTML);
    }else{
      var list = document.getElementById('screenpar');  
      list.removeChild(list.childNodes[list.childNodes.length-1]);                
      ar[2] = Number(document.getElementById('screenpar').innerHTML);
    }  
  }
}
//toggle plus & minus
function togleplusminus(){ 
  playSound();    
  var minustext = document.createTextNode("-");  
  var plustext = document.createTextNode(" ");
  var list = document.getElementById("screenpar"); 
  if(toglepmactive && togglepm){
      if(list.innerHTML[0]===' '){
        list.replaceChild(minustext, list.childNodes[0]);
      }else{
        list.insertBefore(minustext, list.childNodes[0]);      
      };
      togglepm = false;
  }else if(toglepmactive && !togglepm){
      list.replaceChild(plustext, list.childNodes[0]);
      togglepm = true;
  }  
  if(!isCalculateexecuted){
    if(typeof ar[1] === 'undefined') {               
      ar[0] = Number(document.getElementById('screenpar').innerHTML);
    }else{                
      ar[2] = Number(document.getElementById('screenpar').innerHTML);
    }  
  }
}
//helper functions
function clr(){
  playSound();
  ar = [];
  document.getElementById('screenpar').innerHTML = '0';
  isPressable = true;
  isClronceActive = true;
  isClrActive = true;
  isCalculateexecuted = false;
  isclroncefor1sttime = true;
  isDotPressable = false;
  toglepmactive = false;
  togglepm = true;
  k=0;
}
function clronce(){  
  if(isClronceActive){
  document.getElementById('screenpar').innerHTML = '';
  isPressable = true;
  isDotPressable = true;
  togglepm = true;
  k=0;
  } 
}
function clraftercalculateexecution(){
  if(isClrActive){
  ar = [];
  document.getElementById('screenpar').innerHTML = '';
  isPressable = true;
  isClronceActive = true;  
  isCalculateexecuted = false;
  isclroncefor1sttime = true;
  isDotPressable = false;
  togglepm = true;
  k=0;
  }
}
function clroncefor1sttime(){  
  if(isclroncefor1sttime){
   document.getElementById('screenpar').innerHTML = ''; 
  }
}
//slice if number exceeds 11 chars
function sliceto11(){  
  st = document.getElementById('screenpar').innerHTML;
  if(st.length>11){
    st = st.slice(0,11);
    document.getElementById('screenpar').innerHTML = Number(st);
  }
}
//play sound
function playSound(){
    if(isSoundon){
        document.getElementById('audid').play();
    }
}
//togle sound
function toggleSound(){ isSoundon ? isSoundon = false : isSoundon = true;}

/*some jQuery*/
$(document).ready(function(){
  $('.bluebtns')
    .mouseup(function(){
      $(this).find('.blue').css('opacity','0.55');
    })
    .mousedown(function(){
    $(this).find('.blue').css('opacity','0');
  });
});