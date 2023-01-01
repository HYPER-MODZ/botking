let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Bot නැවත සකසමින්...\කරුණාකර විනාඩි 1ක් පමණ ඉන්න')
    await global.db.write()
    process.send('reset')
  } else throw '_ඕකෙ බොම්සා..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Not working)')]
handler.tags = ['owner']
handler.command = /^debounce$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

