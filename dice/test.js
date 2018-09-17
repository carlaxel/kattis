const readline = require('readline');

let dietest = (a,b) => {
   

    let set_a_1 = a.slice(0,2);
    let set_a_2 = a.slice(2,4);
    let set_b_1 = b.slice(0,2);
    let set_b_2 = b.slice(2,4);
    let a1_array = [];
    let a2_array = [];
    let b1_array= [];
    let b2_array = [];

    for(let i = set_a_1[0]; i <= set_a_1[1]; i++){

        a1_array.push(parseInt(i));
    }
    for(let i = set_a_2[0]; i <= set_a_2[1]; i++){
        a2_array.push(parseInt(i));
    }
    for(let i = set_b_1[0]; i <= set_b_1[1]; i++){
        b1_array.push(parseInt(i));
    }
    for(let i = set_b_2[0]; i <= set_b_2[1]; i++){
        b2_array.push(parseInt(i));
    }
    
    let sum1a = a1_array.reduce((a,b)=>{
        return a+b;
    })
    let sum2a = a2_array.reduce((a,b)=>{
        return a+b;
    })
    let sum1b = b1_array.reduce((a,b)=>{
        return a+b;
    })
    let sum2b = b2_array.reduce((a,b)=>{
        return a+b;
    })
    let resa = sum1a/a1_array.length + sum2a/a2_array.length 
    let resb = sum1b/b1_array.length + sum2b/b2_array.length 

    if(resa>resb){
       return "Gunnar";
    }else if(resb> resa){
        return "Emma";
    }else{
        return "Tie";
    }

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
/*
rl.on('line', (line) => {
    var nums = line.split(' ');
    var a = parseInt(nums[0]);
    var b = parseInt(nums[1]);
    
}); 
*/
const lines = [];
rl.on('line', (line) => {
    line = line.split(" ");
    lines.push(line);
}).on('close', () => {
    
console.log(dietest(lines[0],lines[1]));

});



