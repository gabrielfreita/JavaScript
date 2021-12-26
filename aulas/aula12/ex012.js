var agora = new Date()
var hora = agora.getHours()
if (hora === 1) {
    console.log(`É ${hora} hora`)
} else {
    console.log(`São ${hora} horas`)
}
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora > 12) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

// switch (expressão) {
//     case valor 1:
//         break
//     case valor 2:
//         break
//     case valor 3:
//         break
//     default:
//         break
// }