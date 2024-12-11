let upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerSet="abcdefghijklmnopqrstuvwxyz"
let numberSet="0123456789"
let symbolSet="!@#$%^&*()_!"

let passBox=document.getElementById("pass-box")
let totalChar=document.getElementById("total-char")
let lowerInput=document.getElementById("lower-case")
let upperInput=document.getElementById("upper-case")
let numberInput=document.getElementById("numbers")
let inputSymbols=document.getElementById("symbols")

const getRandomData=(dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword=(password=" ")=>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
        console.log(password)
    }

    if(lowerInput.checked){
        password += getRandomData(lowerSet)
        console.log(password)
    }

    if(numberInput.checked){
        password += getRandomData(numberSet)
        
    }

    if(inputSymbols.checked){
        password += getRandomData(symbolSet)
        
    }

    if(password.length<totalChar.value){
        return generatePassword(password)
    }
    passBox.innerText=password
    console.log(password)
}

document.getElementById('btn').addEventListener(
    "click",
    function(){
        generatePassword();
    }
)