let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw ` text!\n\nඋදා:\n${usedPrefix + command} රනිල්`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /^(say)$/i

module.exports = handler