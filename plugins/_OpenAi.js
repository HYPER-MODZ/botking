/**apikey ini punya orang jadi nanti
 kalo abis kalian beli aja sendiri 
atau cari**/

var tiodev = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    if (!text) throw `නවතම CHAT GPT AI මගින් ක්‍රියා කරයි .ai ඔබට අවශ්‍ය ඕනෑම ප්‍රශ්නයක් english  වලින් යොමු කරන්න උදා (.ai create simple calculator using python) 😎`

var tiores = await tiodev(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
 hasil = await tiores.json()
 m.reply(`${hasil.result}`.trim())
    };  
handler.command = handler.help = ['ai', 'bot', 'alive'];
handler.tags = ['internet'];
module.exports = handler;
