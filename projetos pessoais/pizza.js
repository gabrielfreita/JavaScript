var fatias = new Date()
var fatias_dois = fatias.getMinutes()

// function temFatia(pizzas) {
//     if (pizzas == 0) {
//         return false
//     } else {
//         return true
//     }
// }

// function comerFatia(pizzaaa) {
//     pizzaaa--
//     return pizzaaa
// }

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