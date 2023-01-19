function waitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const numbers = [4, 5, 9, 13, 77]

//Promise.all(squars).then((results) => {
//    console.log(results)
//})

async function execute() {
    const squars = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))

    console.log(squars)
}

execute()