(function(s){'use strict';
 var o=s.prototype,p='includes';
 o[p]||(o[p]=function(a,b){//search,start
  var e=this,i=isNaN(b)?0:b,t=a,l=t.length;
  return (l<1||((i+l)>e.length))?false:-1!==e.indexOf(t,i);
 });


var isNativeAndroid=(function(ua){
 function f(x){return s.includes(x)}
 var s=ua.toLowerCase();
 return (f('android') && f('mobile') && !f('crmo'))||f('sm-j320f');
})(navigator.userAgent);


//console.info('isNativeAndroid?',isNativeAndroid);
