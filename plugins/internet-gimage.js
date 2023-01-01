let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('මොකක්ද 😒?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Not Found')
  conn.sendButtonImg(m.chat, url, `
*── 「 GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), wm, 'NEXT', `.gimage ${text}`, m)
}
handler.help = ['image <query>', 'gimage <query>', 'googleimage <query>']
handler.tags = ['internet']
handler.command = /^(gimage|googleimage|image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
