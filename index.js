let a; 
let date; 
let time;
setInterval(() => {


a=new Date()
time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
date=a.toLocaleDateString();
document.getElementById('clck').innerHTML=time+" . "+date;
}, 1000);