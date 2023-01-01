let fg = require('api-dylux') 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `✳️Facebook වීඩියෝවක සබැඳියක් ඇතුළු කරන්න\en\n📌 උදාහරණය:\n *${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    
   try {
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
┌─⊷ *FBDL*
▢ *තත්ත්ව:* ${result.quality}
└───────────`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
   
 } catch {
 	m.reply('දෝෂය: වෙනත් සබැඳියක් උත්සාහ කරන්න')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

module.exports = handler
