let handler = async(m, { conn, text }) => {
    if (!text) throw 'කරුණාකර වාර්තාවක් ඇතුළත් කරන්න'
    if (text.length > 300) throw 'සමාවන්න පෙළ දිග වැඩියි, උපරිම පෙළ 300යි!'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️ගැටළුව හිමිකරු බොට් වෙත වාර්තා කර ඇත, ව්‍යාජ/සෙල්ලක්කාර වාර්තා වලට ප්‍රතිචාර නොදක්වයි!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
