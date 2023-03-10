import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example: ${usedPrefix + command} Sia Unstopable`
	if (text.includes('http://') || text.includes('https://')) {
		if (!text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`Invalid Youtube URL.`)
		try {
			let anu = await youtubeSearch(`${text}`)
			let ini_txt = `ð *${anu.video[0].title}*\n\n`
			ini_txt += `ðŠķ *Author :* ${anu.video[0].authorName}\n`
			ini_txt += `âēïļ *Published :* ${anu.video[0].publishedTime}\n`
			ini_txt += `â *Duration :* ${anu.video[0].durationH}\n`
			ini_txt += `ðïļ *Views :* ${anu.video[0].viewH}\n`
			ini_txt += `ð *Url :* ${anu.video[0].url}`
			conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.video[0].thumbnail.split("?")[0], [
				[`ð§ Audio`, `${usedPrefix}yta ${anu.video[0].url}`],
				[`ðĨ Video`, `${usedPrefix}ytv ${anu.video[0].url}`]
			], m)
		} catch (e) {
			console.log(e)
			try {
				let anu = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
				let ini_txt = `ð *${anu.title}*\n\n`
				ini_txt += `ðïļ *id :* ${anu.id}\n`
				ini_txt += `â *v_id :* ${anu.v_id}\n`
				ini_txt += `ð *Url :* ${args[0]}`
				conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.thumbnail, [
					[`ð§ Audio`, `${usedPrefix}yta ${args[0]}`],
					[`ðĨ Video`, `${usedPrefix}ytv ${args[0]}`]
				], m)
			} catch (e) {
				console.log(e)
				try {
					let anu2 = await fetch(`https://api.lolhuman.xyz/api/ytvideo?apikey=${global.api}&url=${text}`)
					let anu = await anu2.json()
					let ini_txt = `ð *${anu.result.title}*\n\n`
					ini_txt += `ðŠķ *Author :* ${anu.result.uploader}\n`
					ini_txt += `â *Duration :* ${anu.result.duration}\n`
					ini_txt += `ðïļ *Views :* ${anu.result.view}\n`
					ini_txt += `ð *Url :* https://youtu.be/${anu.result.id}`
					conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.result.thumbnail, [
						[`ð§ Audio`, `${usedPrefix}yta https://youtu.be/${anu.result.id}`],
						[`ðĨ Video`, `${usedPrefix}ytv https://youtu.be/${anu.result.id}`]
					], m)
				} catch (e) {
					console.log(e)
					try {
						let anu2 = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${global.api}&url=${text}`)
						let anu = await anu2.json()
						let ini_txt = `ð *${anu.result.title}*\n`
						conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.result.thumbnail, [
							[`ð§ Audio`, `${usedPrefix}yta https://youtu.be/${anu.result.thumbnail.split('/')[4]}`],
							[`ðĨ Video`, `${usedPrefix}ytv https://youtu.be/${anu.result.thumbnail.split('/')[4]}`]
						], m)
					} catch (e) {
						console.log(e)
						try {
							const xa = require('xfarr-api')
							let anu = await xa.downloader.youtube(`${text}`)
							let ini_txt = `ð *${anu.title}*\n\n`
							ini_txt += `ðŠķ *Author :* ${anu.author}\n`
							ini_txt += `ðïļ *Username :* ${anu.username}\n`
							ini_txt += `ð *Url :* https://youtu.be/${anu.thumbnail.split('/')[4]}`
							conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.thumbnail, [
								[`ð§ Audio`, `${usedPrefix}yta https://youtu.be/${anu.thumbnail.split('/')[4]}`],
								[`ðĨ Video`, `${usedPrefix}ytv https://youtu.be/${anu.thumbnail.split('/')[4]}`]
							], m)
						} catch (e) {
							console.log(e)
							m.reply(`Tidak ditemukan hasil.`)
						}
					}
				}
			}
		}
	} else {
		try {
			let anu = await youtubeSearch(`${text}`)
			//if (anu.video.length == 0) throw `Tidak ditemukan hasil.`
			if (anu.video.length >= 4) {
				var x = Math.floor(Math.random() * 5)
			} else {
				var x = 0
			}
			let ini_txt = `ð *${anu.video[x].title}*\n\n`
			ini_txt += `ðŠķ *Author :* ${anu.video[x].authorName}\n`
			ini_txt += `âēïļ *Published :* ${anu.video[x].publishedTime}\n`
			ini_txt += `â *Duration :* ${anu.video[x].durationH}\n`
			ini_txt += `ðïļ *Views :* ${anu.video[x].viewH}\n`
			ini_txt += `ð *Url :* ${anu.video[x].url}`
			conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.video[x].thumbnail.split("?")[0], [
				[`ð§ Audio`, `${usedPrefix}yta ${anu.video[x].url}`],
				[`ðĨ Video`, `${usedPrefix}ytv ${anu.video[x].url}`]
			], m)
		} catch (e) {
			console.log(e)
			try {
				let anu2 = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${global.api}&query=${encodeURIComponent(text)}`)
				let anu = await anu2.json()
				let ini_txt = `ð *${anu.result.info.title}*\n\n`
				ini_txt += `ðŠķ *Author :* ${anu.result.info.uploader}\n`
				ini_txt += `â *Duration :* ${anu.result.info.duration}\n`
				ini_txt += `ðïļ *Views :* ${anu.result.info.view}\n`
				ini_txt += `ð *Url :* https://youtu.be/${anu.result.info.id}`
				conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.result.info.thumbnail, [
					[`ð§ Audio`, `${usedPrefix}yta https://youtu.be/${anu.result.info.id}`],
					[`ðĨ Video`, `${usedPrefix}ytv https://youtu.be/${anu.result.info.id}`]
				], m)
			} catch (e) {
				console.log(e)
				try {
					let anu2 = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${global.api}&query=${encodeURIComponent(text)}`)
					let anu = await anu2.json()
					let ini_txt = `ð *${anu.result.title}*\n`
					conn.sendButton(m.chat, ini_txt, packname + ' - ' + author, anu.result.thumbnail, [
						[`ð§ Audio`, `${usedPrefix}yta https://youtu.be/${anu.result.thumbnail.split('/')[4]}`],
						[`ðĨ Video`, `${usedPrefix}ytv https://youtu.be/${anu.result.thumbnail.split('/')[4]}`]
					], m)
				} catch (e) {
					console.log(e)
					m.reply(`ā·ā·āķšā·āķāķ­ āķąā·ā·ā·āķ`)
				}
			}
		}
	}
}

handler.menudownload = ['ytplay <teks> / <url>']
handler.tagsdownload = ['search']
handler.command = /^(playy|(playy)?yt(playy|dll)?)$/i

export default handler