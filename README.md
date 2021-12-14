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

 codiguin para o dia da semana:

 var agora = new Date()

 var numeroDoDia = agora.getDay() + 1

 let diasDaSemana = [

     "Domingo", "Segunda", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"

 ]

 var diaDaSemana = diasDaSemana[numeroDoDia-1]

 console.log('Hoje é ' + diaDaSemana)

 funcao par ou impar:

 function parimp(n) {

     if (n%2==0) {

         return 'par'

     } else {

         return 'ímpar'

     }

 }

 let res = parimp(11)