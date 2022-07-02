# JavaScript
 Meu segundo


 switch (expressão) {

     case valor 1:

         break

     case valor 2:

         break

     case valor 3:

         break

     default:

         break
         
 }

 CODIGUIN PARA O DIA DA SEMANA:

 var agora = new Date()

 var numeroDoDia = agora.getDay() + 1

 let diasDaSemana = [

     "Domingo", "Segunda", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"

 ]

 var diaDaSemana = diasDaSemana[numeroDoDia-1]

 console.log('Hoje é ' + diaDaSemana)

 FUNÇÃO PAR OU ÍMPAR:

 function parimp(n) {

     if (n%2==0) {

         return 'par'

     } else {

         return 'ímpar'

     }

 }

 let res = parimp(11)

 COMENDO PIZZA UTILIZANDO RECURSIVIDADE:

 OBS: Ainda não aprendi a pegar números aleatórios, então, resolvi fazer com os minutos

 var fatias = new Date()

 var fatias_dois = fatias.getMinutes()

 function comerPizza (fatias, original) {

     if (fatias == 0) {

         return "A pizza não tinha fatias"

     } else {

         var fatia = fatias - 1

         if (fatia == 0) {

             console.log(`A pizza tinha ${original} fatias`)

             return "Acabei a pizza!"

         } else {

             return comerPizza(fatia, original)

         }

     }

 }

 console.log(comerPizza(fatias_dois, fatias_dois))

 FUNÇÃO DENTRO DE FUNÇÃO:

 var data = new Date()
 
 var num = data.getMinutes()

 function iniciarContagem(parametro) {
 
     param = parametro
 
     if (param == 0) {
 
         console.log('O contador está zerado')
 
     } else {
 
         console.log(`Tic : ${param} `)
 
         iniciarContagem(contar(param))
 
     }
 
 }

 function contar(parametro) {
 
     return parametro - 1
 
 }

 iniciarContagem(num)