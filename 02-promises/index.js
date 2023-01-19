/*
Uma execução síncrona segue um fluxo linear
executa passo a passo do trecho do código
só executa uma instrução após a anterior ter sido executada
a execução assíncrona não segue este formato
Não aguarda o fim da execução para passar para o próximo passo
passa para a instrução seguinte sem aguardar a conclusão da atual
*/

let komodoShip = {
    name: 'Komodo',
    velocity: 80,
    acceleration: 0
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(acceleration > 0) {
                velocity += acceleration * 2
                console.log(`Nova velocidade ${velocity}`)
                resolve(velocity)
            } else {
                console.log('Aceleração inválida')
                reject('Não possui aceleração')
            }
        }, 1000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log('Depois de acelerar:\n', komodoShip)
}).catch(message => {
    console.log(`Komodo: ${message}`)
})

//catch captura erro que ocorre quando chamamos o reject de uma promise

console.log('Execução de Promises')

/* Promises basicamente dão suporte para operações assíncronas
Guardam a operação que precisamos dentro de um objeto cuja classe é chamada de Promise
Quando precisamos executar, basta chamar este objeto
Possui 4 estados: 
Pendente: quando a promise é criada e ainda não foi executada - estado inicial
realizada: quando teve sucesso na operação
recusada: quando teve falha na operação
estabelecida: quando foi realizada ou recusadaa
Nós decidimos se ela vai para Realizada ou Recusada
*/