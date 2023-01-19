let imc = (altura, peso) => {
    return new Promise ((resolve, reject) => {
        
            if (typeof altura  !== 'number' || typeof peso !== 'number' /*isNaN(altura) || isNaN(peso*/) {
                reject('A altura e o peso devem ser números')
            } else {
                let imcCalculo =  peso / (altura * altura)
                resolve(`${imcCalculo}`)
            }
        
        
    })
}

const imcResultado = (altura, peso) => {
    imc(altura, peso).then((result) => { 
    console.log(result)

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

    }).catch((error) => {console.log(`A Promisse foi rejeitada. O motivo: ${error}`)}).finally(() => {
        console.log('Operação finalizada')
    })
    
}

imcResultado(1.63, 88)
/*- Abaixo de 18,5: **************magreza**************
- Entre 18,5 e 24,9: ************normal************
- Entre 25 e 29,9: ******************sobrepeso******************
- Entre 30 e 39,9: ******************obesidade******************
- Acima de 40: ******************************obesidade grave****************************** */