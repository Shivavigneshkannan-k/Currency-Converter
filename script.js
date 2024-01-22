// const URL="https://restcountries.com/v3.1/all"; allcountry code
const URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";



const from=document.querySelector("#from");
const to=document.querySelector("#to");
const fromFlag=document.querySelectorAll('.display img')[0];
const toFlag=document.querySelectorAll('.display img')[1];
const select =document.querySelectorAll('select')[0];
const result=document.querySelector('.result');
const input=document.querySelector('input');
const button=document.querySelector('button');

const choice=()=>{
    for(let name in currency){
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.innerText=name;
        option1.value=name;
        option2.innerText=name;
        option2.value=name;
        if(name=="USD"){
            option1.setAttribute('selected',true);
        }
        from.append(option1);
        to.append(option2);
        
    }
    
}
choice();
const flag=()=>{
    fromFlag.src=`https://flagcdn.com/28x21/${currency[from.value].toLowerCase()}.png`;
    toFlag.src=`https://flagcdn.com/28x21/${currency[to.value].toLowerCase()}.png`;
}
from.addEventListener('change',flag);
to.addEventListener('change',flag);

const exchangeRate= async ()=>{

    const data=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`);
    const Rate=await data.json();
    let rate=Rate[to.value.toLowerCase()];
    if(input.value==""){
        result.innerText=`${1} ${from.value} = ${rate*1} ${to.value}`
    }
    result.innerText=`${input.value} ${from.value} = ${rate*input.value} ${to.value}`

}
button.addEventListener('click',e=>{
    e.preventDefault();
    exchangeRate();
})
