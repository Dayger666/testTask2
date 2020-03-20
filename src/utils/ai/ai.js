
const moveAI=(values)=>{
    let open=[];
for(let i=0;i<values.length;i++){
    if(values[i]===null){
        open.push(i);
    }
}

return open[Math.floor(Math.random() * (open.length-1))];
};
export default moveAI;