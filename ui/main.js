console.log('Loaded!');
var mar=0;
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