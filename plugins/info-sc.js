let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
.bctext 
☘️ https://t.me/AnimeqqAi_bot

NEW ANIME AI BOT 🌼

*YOU CAN CREATE NEW AI ANIME IMAGES WITH YOUR PHOTOS*🌝
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
