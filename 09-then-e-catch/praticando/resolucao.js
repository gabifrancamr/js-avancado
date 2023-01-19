function imc(weight, height) {
    return new Promise((resolve, reject) => {
        if( typeof weight !== 'number' || typeof height !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(weight/(height * height))
        }
    })
}

function showImc(weight, height) {
    imc(weight, height).then((result) => {
        //console.log(`O resultado do IMC foi de ${result}`)

        if(result < 18) {
            console.log(`O IMC no valor: ${result} indica magreza`)
        } else if ( result > 18 && result < 24) {
            console.log(`O IMC no valor: ${result} indica normalidade`)
        } else if (result > 24 && result < 29) {
            console.log(`O IMC no valor: ${result} indica sobrepeso`)
        } else if (result > 29 && result < 40) {
            console.log(`O IMC no valor: ${result} indica obesidade`)
        } else if( result > 40) {
            console.log(`O IMC no valor: ${result} indica obesidade grave`)
        } else {
            console.log('Não foi possível calcular IMC')
        }
    }).catch((err) => {
        console.log(err)
    })

    console.log(`Calculando IMC para peso ${weight} e altura ${height}...`)
}

showImc(71, 1.74)
showImc(71, 'texto')
showImc(48, 1.60)
