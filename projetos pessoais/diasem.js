var agora = new Date()
var numeroDoDia = agora.getDay() + 1
let diasDaSemana = ["Domingo", "Segunda", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
var diaDaSemana = diasDaSemana[numeroDoDia-1]

console.log('Hoje é ' + diaDaSemana)