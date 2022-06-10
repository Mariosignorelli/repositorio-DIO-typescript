let button = document.getElementById('btn')
let input1 = document.getElementById('input1')  as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionaNumero(numero1:number, numero2:number, devPrintar: boolean,frase: string){
   let resultad = numero1 + numero2
   if(devPrintar){
    console.log(frase + resultad)
   }
   return numero1 + numero2
}

let devPrintar = true;
let frase = 'o valor é'
if(button){
    button.addEventListener('click', ()=>{
        if(input1 && input2){
            console.log(adicionaNumero(Number(input1.value), Number(input2.value,),devPrintar, frase));
        }
    })
}