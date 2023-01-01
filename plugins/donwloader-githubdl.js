let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'පරිශීලක නාමය කොහෙද?'
if (!args[1]) throw 'කෝ රෙපෝ?'
if (!args[2]) throw 'ශාඛාවේ නම ඇතුළත් කරන්න'
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`compressing data to file zip*`)
conn.sendFile( m.chat, url, `${args[1]} ${args[2]}.zip`, null, m)

}
handler.help = ['githubdl']
handler.tags = ['github']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler
