let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos.`)
console.log(`O vetor agora tem o ${num[5]} como elemento.`)
let pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
console.log( `O valor 8 está na posição ${pos}`)
}