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
 if(kick.readychange===XMLHttpRequest.DONE && kick.status===200)
 {
   var counter=kick.responseText;
   var span=documnet.getElementById('count');
   span.innerHTML=counter.toString();
 }
 //render the variable in correct span
 kick.open('GET', "http://sonalgupta115.imad.hasura-app.io/art",true);
 kick.send(null);
};


var submit=document.getElementById('submit');
submit.onclick=function(){
 var namevarr=document.getElementById('name1');
var name=namevarr.value;
 //make a request to the server and send the names
   var kick=new XMLHttpRequest();
 //captutre the response and store it in a variable
 if(kick.readychange===XMLHttpRequest.DONE && kick.status===200)
 {
    var names=kick.responseText;
     names=JSON.parce(names);
 var list='';
 for(var i=0;i<names.length;i++){
 
    list=list+'<li>'+names[i]+'</li>'; 
 //capture a list of names an drender it
 }
  var ul=document.getElementById('name_list');
 ul.innerHTML=list;

 }

 res.open('GET', "http://sonalgupta115.imad.hasura-app.io/submit-name"+name,true);
 res.open(null);
};