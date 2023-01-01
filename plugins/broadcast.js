let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `වෙත විකාශන පණිවිඩ යවන්න ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://database.tioclkp02.repl.co/1920b808c70288df5bbe1.png'
       await conn.send2ButtonImg(id, bcbg, text.trim(), wm, 'Thanks Info', 'thanks', 'MAIN GROUP', '.donate', m)
     }
  m.reply('*විකාශනය අවසන්*')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
