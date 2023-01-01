let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'github සබැඳිය කොහෙද?  උදාහරණයක්: https://github.com/BOTKINGDOM'

    if (!regex.test(args[0])) throw 'link😒!'

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Nurutomo-wabot-aq-v2.5.1-251-g836cccd.zip'
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
    conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone <url>']
handler.tags = ['github']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler
