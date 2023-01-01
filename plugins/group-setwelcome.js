let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('සාදරයෙන් පිළිගනිමු\n@user (සඳහන් කරන්න)\n@subject (කණ්ඩායම් මාතෘකාව)\n@desc (කණ්ඩායම් විස්තරය))')
  } else throw 'පාඨය කොහෙද??'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

