function LoadJson(file,callback) {
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
a.onreadystatechange=function(){
  if(a.readyState===4 && a.status=="200"){
    callback(a.responseText);
  }
}
a.send(null);
}
LoadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
 careerobj(data.co);
})
 var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="Career Object:";
career.appendChild(document.createElement("HR"))
function careerobj(Ganesh){
  var cop=document.createElement("p");
  cop.textContent="Ganesh";
  right.appendChild(cop);
}
right.appendChild(career);

var edu=document.createElement("h4");
edu.textcontent="Educational Qualification:";
edu.appendChild(document.createElement("HR"));
