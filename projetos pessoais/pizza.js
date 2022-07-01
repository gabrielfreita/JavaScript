var fatias = 8

function temFatia(pizzas) {
    if (pizzas == 0) {
        return false
    } else {
        return true
    }
}

function comerFatia(pizzaaa) {
    pizzaaa--
    return pizzaaa
}

function comerPizza (fatias) {
    while (temFatia(fatias)) {
        fatias = comerFatia(fatias)
    }
    console.log("Acabei a pizza!")
}

comerPizza(fatias)