const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'භාවිතයේ උදාහරණ: ' + usedPrefix + 'chord අයියො සාමිනි ', m)
    await m.reply(global.wait)
    axios.get(`https://docs-jojo.herokuapp.com/api/chord?q=` + text)
        .then((res) => {
          let hasil = `*• Chord Lagu ${text} :*\n${res.data.result}`
            conn.reply(m.chat, hasil, m)
        })
        .catch()
}
handler.help = ['chord <judul lagu>']
handler.tags = ['edukasi', 'internet']
handler.command = /^(chord)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
