let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `☘️ https://t.me/AnimeqqAi_bot

NEW ANIME AI BOT 🌼

*YOU CAN CREATE NEW AI ANIME IMAGES WITH YOUR PHOTOS*🌝`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Thanks', 'thanks', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
