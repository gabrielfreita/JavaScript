let num = [9, 5, 6, 7, 2]
num.sort()
console.log(num)
num.push("item")
num[6] = "97"
console.log(num)
console.log(num.length)
for (let pos = 0; pos<num.length; pos++) {
    console.log(`O número de índice ${pos} é ${num[pos]}`)
}
for (let pos in num) {
    console.log(`O número de índice ${pos} é ${num[pos]}`)
}
let pos = num.indexOf(97)
console.log(pos)