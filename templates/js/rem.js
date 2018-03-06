(function (){
    size();
window.onresize=function(){
   size();
}
function size(){
 var winw=document.documentElement.clientWidth||document.body.clienWidth;
  document.documentElement.style.fontSize=(winw/320)*10+"px";
}
})