function step2() {
    console.log('passo 2')
}

console.log('passo 1')
step2()
console.log('passo 3')

console.log('passo 4')

setTimeout(() => {
    console.log('passo 5')
}, 2000)

console.log('passo 6')