   //one-way to genrate color
var hexColor=document.getElementById('hexColor');
document.getElementById('btn').addEventListener('click', ()=>{
 const randomColor ="#" + Math.random().toString(16).slice(2,8).padEnd(6,0);
    hexColor.textContent=randomColor;
    //background the same color
    document.body.style.background=randomColor;   
});
    
//second-way to genrate color
    var hexColor=document.getElementById('hexColor');
    document.getElementById('btn').addEventListener('click', ()=>{
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color').innerText= randomColor.padEnd(6,0);
        //background color
document.body.style.background=color.textContent;
    });
