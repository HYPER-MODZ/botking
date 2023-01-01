let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'ටික්ටොක් ලින්ක් එක කොහෙද?'
m.reply(wait)
let res = await fetch(`https://api.tiodevhost.my.id/api/dowloader/tikok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'video.mp4', `
\n💌 *තොරතුරු*: ${description}
\n\n📛 *Username*: ${username}
\n\n🏢 *By*: Botkingdom
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok2 <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok2)$/i
handler.limit = true
module.exports = handler
