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
var element=document.getElementById('counter');
element.onclick=function(){
 //make a request to counter endpoint
   var kick=new XMLHttpRequest();
 //captutre the response and store it in a variable
 if(kick.readychange==XMLHttpRequest.DONE&& kick.status==200)
 {
   var counter=kick.ResponseText;
   var span=documnet.getElementById('count');
   span.innerHTML=counter.toString();
 }
 //render the variable in correct span
 kick.open('GET', "http://sonalgupta115.imad.hasura-app.io/art",true);
 kick.send(null);
};

