let timeoutId = setTimeout(() => {
    console.log('Executando após 2 segundos')
}, 2000);

clearTimeout(timeoutId)

let seconds = 0
let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando a cada ${seconds} segundos`)
    if(seconds >= 10) clearInterval(intervalId)
}, 2000)

/*
São funções de alta ordem (recebem outra função como parâmetro) 
Executam a função depois de um tempo decorrido
a setTimeout executa apenas uma vez
a setInterval executa em intervalos de tempo
*/