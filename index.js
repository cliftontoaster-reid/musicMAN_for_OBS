const process = require('child_process')
function random(max) {
    return Math.floor(Math.random() * max);
}
const data = require('./data.json')
const ytdl = require('ytdl-core')
const fs = require('fs')

async function play() {
    while (true) {
        let id = random(data.musiques.length)
        let music = data.musiques[id]
        await process.execSync(`echo "${music.title}\n\n\nBy: ${music.artist} " > text.txt`)
        console.log('-----------------'+music.file)
        console.log('-------------'+music.title)
        console.log('-------------'+music.artist)
        console.log('---------------------------------------------------')
        console.info('On screen: \n')
        console.info(`${music.title}\n\n\nBy: ${music.artist}`)
        console.info('--------------------------------------------------')
        if (music.youtube) {
            let streamFile = await fs.createWriteStream('temp.mp3')
            let stream = await ytdl(music.link, {format: 'mp3'})
            let livestream = stream.pipe(streamFile)
            while (livestream.writableFinished) {
                console.log('d')
            }
            let cmd = `vlc --play-and-exit "temp.mp3"`
            console.log(cmd)
            process.execSync(cmd)
        } else {
            let cmd = `vlc --play-and-exit "${music.file}"`
            console.log(cmd)
            process.execSync(cmd)
        }
    }
}

play()