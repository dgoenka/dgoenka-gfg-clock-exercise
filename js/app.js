console.log("in app.js");
setInterval(()=>{
  const elem = document.getElementById("time");
  console.log(elem);
  if(elem){
    const now = new Date();
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    elem.innerText = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }
},1000);
