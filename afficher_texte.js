let args = process.argv
const {exec} = require('child_process')
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}  

async function start () {

    if (args[2] === undefined) {

    } else {

        
        var text = args[2].split('')
        console.info(`DATA: ${text}`)
        let str = ''
        exec(`echo "${str}" > message.txt`)
        await sleep(1000)
        console.log('5')
        await sleep(1000)
        console.log('4')
        await sleep(1000)
        console.log('3')
        await sleep(1000)
        console.log('2')
        await sleep(1000)
        console.log('1')
        await sleep(1000)
        console.log('Go')
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '\\') {
                str = str + '\n';
                console.log(str)
                exec(`echo "${str}" > message.txt`)
                await sleep(1500)
            } else if (text[i] === ' ') {
                str = str + ' ';
                console.log(str)
                exec(`echo "${str}" > message.txt`)
                await sleep(1500)
            } else {
                str = str + text[i];
                console.log(str)
                exec(`echo "${str}" > message.txt`)
                await sleep(2000)
            }

        }
        await sleep(500)
        console.log('8')
        await sleep(500)
        console.log('8.5')
        await sleep(500)
        console.log('7')
        await sleep(500)
        console.log('7.5')
        await sleep(500)
        console.log('7')
        await sleep(500)
        console.log('6.5')
        await sleep(500)
        console.log('6')
        await sleep(500)
        console.log('5.5')
        await sleep(500)
        console.log('5')
        await sleep(500)
        console.log('4.5')
        await sleep(500)
        console.log('4')
        await sleep(500)
        console.log('3.5')
        await sleep(500)
        console.log('3')
        await sleep(500)
        console.log('2.5')
        await sleep(500)
        console.log('2')
        await sleep(500)
        console.log('1.5')
        await sleep(500)
        console.log('1')
        await sleep(500)
        console.log('0.5')
        await sleep(500)
        console.log('Back')
        exec(`echo " " > message.txt`)

    }

}
start()