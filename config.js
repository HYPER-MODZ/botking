//Ini untuk setting Bot
//Untuk gambar background menu ada - di plugins menu
//untuk lainya saran jangan di ubah bre nanti eror

//Global Owner//
global.owner = ['94704029017']  // isi jika perlu
global.mods = ['94704029017']   // isi jika perlu
global.prems = ['94704029017']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'Supuna' // isi nama kalian bebas
global.numberowner = '94704029017' // isi ini untuk mengendalikan bot
global.dana = '94704029017' // isi dengan nomor dana yg kamu punya 
global.pulsa = '94704029017' // isi dengan nomor pulsa hp kalian
global.gopay = '94704029017'

//Nama Bot & Grouplink//
global.namebot = 'BOTKINGDOMV ❤️'
global.gc = ''
global.web = 'supuna.ml' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://supuna.ml'

//Tampilan wm Bot dan pesan bot//
global.lolkey = 'rey2k22' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '© BOTKINGDOM'
global.watermark = wm
global.wm2 = '⫹⫺ BOTKINGDOM'
global.wm3 = '© BOTKINGDOM'
global.wm4 = '© BOTKINGDOM'
global.fla = 'https://api.tiodevhost.my.id/api/photooxy/harry-potter?text='
global.wait = '_*කරුනාකර රැදී සිටින්න_'
global.eror = '_*Server Error*_'
global.benar = '✅\n'
global.salah = '❌\n'
global.stiker_wait = '*⫹⫺ Stiker sending*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp Botkingdom'

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//Setting Rpg//
global.multiplier = 45 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
