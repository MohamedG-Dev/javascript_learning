document.addEventListener("DOMContentLoaded",()=>{
    let btn_ids=[1,2,3,4,5,6,7,8,9];
    let btn_values=[1,2,3,4,5,6,7,8,9];
    const btn5=document.getElementById("btn5");
    btn5.addEventListener("click",()=>{
        btn_values.unshift(btn_values.pop());
        for(let i=0;i<btn_ids.length;i++){
            document.getElementById("btn"+btn_ids[i]).innerHTML=btn_values[i];
        }
    });
});