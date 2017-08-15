console.log('Loaded!');
/*var mar=0;
var element =document.getElementById('quk');
element.innerHTML='new value here i come';
var ih=document.getElementById('ijk');
function moveleft()
{
   mar=mar+5;
   ih.style.marginLeft=mar+'px';
}
ih.onclick=function(){
var interval=setInterval(moveleft,100);
};
*/
var counter=0;
var element=documnet.getElementById('counter');
element.onClick=function(){
 //make a request to counter endpoint
 
 //captutre the response and store it in a variable
 
 //render the variable in correct span
 counter=counter+1;
 var span=document.getElementById('count');
 span.innerHTML=counter.toString();
};