//pendente - pendind
//resolvida - resolve
//rejeitada - reject
//finalizada
/*const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada')
    setTimeout(() => {
        if(true) {
            reject(false)
        }
        console.log('Resolvendo a promise')
        resolve(true)
    }, 1000 * 2)
    
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 3000)*/

function execute() {
    //faz alguma coisa
    return new Promise((resolve, reject) =>{
        console.log('A promise está sendo executada')
        setTimeout(() => {
            console.log('Resolvendo a promise')
            resolve(true)
        }, 1000)
    })
}

const p = execute()

console.log(p)