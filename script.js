let numberBtns = document.querySelectorAll(".numbtn");
const display = document.getElementById("display");
let operationBtns = document.querySelectorAll(".opbtn");
let resultBtn = document.getElementById("result");
let clearBtn =  document.getElementById("clear");
let onceClicked = false;
let currOperator,newOperator;
let n1='',n2='',result;        

numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener('click',()=>{
        if(!onceClicked){
            n1 += numberBtn.innerText;
            display.innerText += numberBtn.innerText;
            console.log(n1);
        }else{
            n2 += numberBtn.innerText;
            display.innerText += numberBtn.innerText;
            console.log(n2);
        }
    })
})

function calcResult(n1,n2,op){
    if(op == '+'){
        result = n1 + n2;
    }else if(op == '-'){
        result = n1 - n2;
    }else if(op == '*'){
        result = n1 * n2;
    }else if(op == '/'){
        result = n1 / n2;
    }
}

operationBtns.forEach((operationBtn)=>{
    operationBtn.addEventListener('click',()=>{
        if(onceClicked == false){
            currOperator = operationBtn.innerText;
            display.innerText += currOperator;
            onceClicked = true;
        }else{
            newOperator = operationBtn.innerText;
            calcResult(Number(n1),Number(n2),currOperator);
            display.innerText = result + newOperator;
            n1 = result;
            currOperator = newOperator;
            n2 = '';
            console.log('runs');
        }
    })
})

resultBtn.addEventListener('click',()=>{
    if(n2 != ''){
        calcResult(Number(n1),Number(n2),currOperator);
        display.innerText = result;
    }else{
        display.innerText = n1;
    }
        
})

clearBtn.addEventListener('click',()=>{
    n1 = '';
    n2='';
    display.innerText = '';
    onceClicked = false;
})