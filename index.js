let names = [];
let celebration = "birthday";

function writeCards(names, celebration){
    return names.map(names=> `Thank you, ${names}, for the wonderful ${celebration} gift!` )
}

function countDown(num){
    let i = num;
    for (i=num; i>=0; i--){
        console.log(i);
    }
}

