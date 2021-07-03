const process = require('child_process')
const data = require('./data.json')
const ytdl = require('ytdl-core')
const fs = require('fs')
function random(max) {
    return Math.floor(Math.random() * max);
}

let id = random(data.musiques.length)
let music = data.musiques[id]

let streamFile =  fs.createWriteStream('temp.mp3')
let videoId =  ytdl.getVideoID

let cmd = `vlc --play-and-exit "${}"`
console.log(cmd)
process.execSync(cmd)