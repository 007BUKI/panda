/*
~OM MAU NGAPAIN OM
~OM JANGAN OM
~SUBSCRIBE CHANEL GUA NGAB
~MrG{108P}*
~JANGAN ENAK DOANG LUH
]=====> TOTQ <=====]
•MrG{108P}
•AFFIS JUNIANTO
•FADHIL GRAPHY
•Sofyan Amv
•Mr.A43G
•Arashi~
•VHTEAR
•TOBZ
•XTEAM
•LolHuman
•MHANKBARBAR
•All Creator Bot WhatsApp
=>>>>>>>>>>>>>>>>>>>
*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const isUrl = (ini_url) => {
                return ini_url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const ffmpeg = require('fluent-ffmpeg')
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n'//JANGAN DI GANTI ANJING
            + 'VERSION:3.0\n'//JANGAN DI GANTI ANJING,NTAR EROR
            + 'FN:Owner Emelia\n' // GANTI NAMA LU BODOH
            + 'ORG: REMBOT;\n'//GANTI NAMA BOT LUH BANGSAT
            + 'TEL;type=CELL;type=VOICE;waid=557388843631:+55 73 8884-3631\n' // GANTI NOMOR LU BEGONIAN
            + 'END:VCARD'
// UDAH SEGITU KONTOLL KEBAWAH BIARIN AJA
const ngonsol = JSON.parse(fs.readFileSync('./settings/Rem.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol
// POWERED BY MrG{108P}*
prefix = "#"
blocked = []   
limitawal = 1200
memberlimit = 2
fake = 'YDBOT-FIX-ANTIDELETE'
ator = 'SUBSCRIBE'
namo = 'MrG{108P}*'
cr = "~*FUBUKII🍁~OWNER:BUKII🍁*"
// LOAD JSON
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
/*[-> afk <-]*/
const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
} = require('./lib/afk.js')

/*
]=====> FUNCTION <=====[
*/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                _level[position].xp += amount

                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))

            }

        }



        const addLevelingLevel = (sender, amount) => {

            let position = false

            Object.keys(_level).forEach((i) => {

                if (_level[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                _level[position].level += amount

                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))

            }

        }



        const addLevelingId = (sender) => {

            const obj = {id: sender, xp: 1, level: 1}

            _level.push(obj)

            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))

        }

             

         const getRegisteredRandomId = () => {

            return _registered[Math.floor(Math.random() * _registered.length)].id

        }



        const addRegisteredUser = (userid, sender, age, time, serials) => {

            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }

            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))

        }



        const createSerial = (size) => {

            return crypto.randomBytes(size).toString('hex').slice(0, size)

        }



        const checkRegisteredUser = (sender) => {

            let status = false

            Object.keys(_registered).forEach((i) => {

                if (_registered[i].id === sender) {

                    status = true

                }

            })

            return status

        }

        

        const addATM = (sender) => {

        	const obj = {id: sender, uang : 0}

            uang.push(obj)

            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))

        }

        

        const addKoinUser = (sender, amount) => {

            let position = false

            Object.keys(uang).forEach((i) => {

                if (uang[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                uang[position].uang += amount

                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))

            }

        }

        

        const checkATMuser = (sender) => {

        	let position = false

            Object.keys(uang).forEach((i) => {

                if (uang[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                return uang[position].uang

            }

        }

        

        const bayarLimit = (sender, amount) => {

        	let position = false

            Object.keys(_limit).forEach((i) => {

                if (_limit[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                _limit[position].limit -= amount

                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))

            }

        }

        	

        const confirmATM = (sender, amount) => {

        	let position = false

            Object.keys(uang).forEach((i) => {

                if (uang[i].id === sender) {

                    position = i

                }

            })

            if (position !== false) {

                uang[position].uang -= amount

                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))

            }

        }

        

         const limitAdd = (sender) => {

             let position = false

            Object.keys(_limit).forEach((i) => {

                if (_limit[i].id == sender) {

                    position = i

                }

            })

            if (position !== false) {

                _limit[position].limit += 1

                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))

            }

        }

             

        

function kyun(seconds){

  function pad(s){

    return (s < 10 ? '0' : '') + s;

  }

  var hours = Math.floor(seconds / (60*60));

  var minutes = Math.floor(seconds % (60*60) / 60);

  var seconds = Math.floor(seconds % 60);



  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`

}

/*

]=====> SCAN QR <=====[

*/



const baby = new WAConnection()

baby.logger.level = 'warn'

console.log(banner.string)

   baby.on('qr', qr => {

   qrcode.generate(qr, { small: true })

	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SCAN QR MU <POWERED BY MrG{108P}*>'))

})



	baby.on('credentials-updated', () => {

		fs.writeFileSync('./Rem.json', JSON.stringify(baby.base64EncodedAuthInfo(), null, '\t'))

		info('2', 'MrG{108P}* Loading...')

	})

	fs.existsSync('./Rem.json') && baby.loadAuthInfo('./Rem.json')

	baby.on('connecting', () => {

		start('2', 'MrG{108P}* Connecting...')

	})

	baby.on('open', () => {

		success('2', 'MrG{108P}* Connected')

	})

	baby.connect({timeoutMs: 30*1000})



baby.on('group-participants-update', async (anu) => {

		if (!welkom.includes(anu.jid)) return

		try {

			const mdata = await baby.groupMetadata(anu.jid)

			console.log(anu)

			if (anu.action == 'add') {

				num = anu.participants[0]

				try {

					ppimg = await baby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)

				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				teks = `[ *BEM-VINDO AO GC ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Introdução/Dikick!!! \n➸ Nome : \n➸ Era : \n➸ Derrubar : \n➸ Gênero : \n➸ Já tenho Doi/Blm: \n➸ Pap Face idiota!!! \n➸ Instagram? \nNAO TENHO! \n *___________________________*\nNão então pulgas querida!!  se você quiser usar sc, pw: Hartah, o trono da coxa de Rikka`

				let buff = await getBuffer(ppimg)

				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

			} else if (anu.action == 'remove') {

				num = anu.participants[0]

				try {

					ppimg = await baby.getProfilePicture(`${num.split('@')[0]}@c.us`)

				} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}

				teks = `*Tchauzinho* @${num.split('@')[0]}👋* \n*Não Vai Fazer Falta*`

				let buff = await getBuffer(ppimg)

				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

			}

		} catch (e) {

			console.log('Error : %s', color(e, 'red'))

		}

	})

	baby.on('CB:Blocklist', json => {

		if (blocked.length > 2) return

	    for (let i of json[1].blocklist) {

	    	blocked.push(i.replace('c.us','s.whatsapp.net'))

	    }

	})



	baby.on('message-new', async (mek) => {

		try {

			if (!mek.message) return

			if (mek.key && mek.key.remoteJid == 'status@broadcast') return

			if (mek.key.fromMe) return

			global.prefix

			global.blocked

			const content = JSON.stringify(mek.message)

			const from = mek.key.remoteJid

			const type = Object.keys(mek.message)[0]

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')

			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();

			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();

            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''

			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()

			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()

			const args = body.trim().split(/ +/).slice(1)

			const isCmd = body.startsWith(prefix)

			const tescuk = ["0@s.whatsapp.net"]

			const isGroup = from.endsWith('@g.us')

			const q = args.join(' ')

			const botNumber = baby.user.jid

			const sender = isGroup ? mek.participant : mek.key.remoteJid

			pushname = baby.contacts[sender] != undefined ? baby.contacts[sender].vname || baby.contacts[sender].notify : undefined

			const groupMetadata = isGroup ? await baby.groupMetadata(from) : ''

			const groupName = isGroup ? groupMetadata.subject : ''

			const groupId = isGroup ? groupMetadata.jid : ''

			const groupMembers = isGroup ? groupMetadata.participants : ''

			const groupDesc = isGroup ? groupMetadata.desc : ''

            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

            

/*

]=====> MrG{108P}* <=====[

*/

            const isEventon = isGroup ? event.includes(from) : false

            const isRegistered = checkRegisteredUser(sender)

            const isBanned = ban.includes(sender)

            const isPrem = premium.includes(sender)

            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

            const isLevelingOn = isGroup ? _leveling.includes(from) : false

			const isGroupAdmins = groupAdmins.includes(sender) || false

			const isWelkom = isGroup ? welkom.includes(from) : false

			const isNsfw = isGroup ? nsfw.includes(from) : false

			const isSimi = isGroup ? samih.includes(from) : false

			const isAntiLink = isGroup ? antilink.includes(from) : false

			const isOwner = ownerNumber.includes(sender)

			const isImage = type === 'imageMessage'

			const isUrl = (url) => {

			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))

			}

			const reply = (teks) => {

				baby.sendMessage(from, teks, text, {quoted:mek})

			}

			const sendMess = (hehe, teks) => {

				baby.sendMessage(hehe, teks, text)

			}

			const mentions = (teks, memberr, id) => {

				(id == null || id == undefined || id == false) ? baby.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})

			}

			const sendImage = (teks) => {

		    baby.sendMessage(from, teks, image, {quoted:mek})

		    }

		    const costum = (pesan, tipe, target, target2) => {

			baby.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})

			}

		    const sendPtt = (teks) => {

		    baby.sendMessage(from, audio, mp3, {quoted:mek})

		    }

			
/*
stickerMessage
*/
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}
/*

]=====> LEVELING <=====[

*/

            if (isGroup && isRegistered && isLevelingOn) {

            const currentLevel = getLevelingLevel(sender)

            const checkId = getLevelingId(sender)

            try {

                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)

                const amountXp = Math.floor(Math.random() * 10) + 500

                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)

                const getLevel = getLevelingLevel(sender)

                addLevelingXp(sender, amountXp)

                if (requiredXp <= getLevelingXp(sender)) {

                    addLevelingLevel(sender, 1)

                    bayarLimit(sender, 3)

                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))

                }

            } catch (err) {

                console.error(err)

            }

        }

/*

]=====> CHECK LIMIT BY MrG{108P}*<=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return baby.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{ quoted: mek})
                            baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    baby.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

            if (isGroup) {

				try {

					const getmemex = groupMembers.length

					    if (getmemex <= memberlimit) {

                            baby.groupLeave(from)

					    }

		       } catch (err) { console.error(err)  }
        }
/*
]=====> ATM <=====[
*/
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Administrador de Grupo pode:D')
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("Sim mano, não faça spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Desculpe irmão ${sender.split("@")[0]} Está nas regras que não pode link. Pega esse voo🛫`)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`*PANDA DEVE SER ADMINISTRADOR├в┬ЭтАФ*`)})
		        }, 3000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Preparar?...")
		        }, 0)
		  }               

			colors = ['red','white','black','blue','yellow','green']

			const isMedia = (type === 'imageMessage' || type === 'videoMessage')

			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))

			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

switch(command) {
     case 'help'://UPDATE MR.108P
				case 'menu'://UPDATE MR.108P
			runtime = process.uptime()
me = baby.user
uptime = process.uptime()
buffer = await getBuffer(me.imgUrl)
				    const uangku = checkATMuser(sender)
shiz = `┌──〘 🍃${botName}🍃 〙
├───➣ TRADUZIDO POR: FUBUKII🍂
├───➣ NUMERO: wa.me/+557388843631
└─────────
┌──〘 🍃SUA INFORMACQO🍃 〙
├───➣ PREFIXO : ❝ ${prefix} ❞
├───➣ NOME : ${pushname}
└─────────

┌──〘 🍃MENU AJUDA🍃 〙
├───➣ ${prefix}info
├─➢ informações do bot
├───➣ ${prefix}perfil
├─➢ informações sobre seu perfil
├───➣ ${prefix}owner
├─➢ Dono
└─────────

┌──〘 🍃MENU GRUPO🍃 〙
├───➣ ${prefix}bemvindo [1/0]
├───➣ ${prefix}leveling [1/0]
├───➣ ${prefix}simih [1/0]
├───➣ ${prefix}antidelete [1/0]
├───➣ ${prefix}nsfw [1/0]
├───➣ ${prefix}antilink [1/0]
├───➣ ${prefix}antipalavrao
├───➣ ${prefix}addpalavra
├───➣ ${prefix}dellpalavra
├───➣ ${prefix}listapalavrao
├───➣ ${prefix}grupo [fechar/abrir]
├───➣ ${prefix}add
├───➣ ${prefix}kick
├───➣ ${prefix}hedsot
├───➣ ${prefix}linkgrup
├───➣ ${prefix}promover @numero
├───➣ ${prefix}rebaixar @nunero
├───➣ ${prefix}setnome
├───➣ ${prefix}setdesc
├───➣ ${prefix}leave
├───➣ ${prefix}marcar
├───➣ ${prefix}admin
├───➣ ${prefix}level
├───➣ ${prefix}fitnah
├───➣ ${prefix}ocultartag
├───➣ ${prefix}limite
├───➣ ${prefix}comprarlimite
└─────────

┌──〘 🍃MENU PROPIETARIO🍃 〙
├───➣ ${prefix}bc
├───➣ ${prefix}bcgp
├─➢ Bot Faz uma ™
├───➣ ${prefix}setprefix
├─➢ Troca Prefixo Do Bot
├────────────────
├───➣ ${prefix}setppbot
├───➣ ${prefix}novafoto
├─➢ Mudar Foto Bot
├────────────────
├───➣ ${prefix}addprem
├───➣ ${prefix}dellprem
├─➢ Tirar E Colocar Premium
├────────────────
├───➣ ${prefix}block
├───➣ ${prefix}unblock
├─➢ Bloquear E Desbloquear
├────────────────
├───➣ ${prefix}setreplay
├───➣ ${prefix}clone
├───➣ ${prefix}evento [1/0]
├─➢ Clonar, Replay, Evento
├────────────────
├───➣ ${prefix}clearall
├───➣ ${prefix}limpar
├─➢ Limpar Chat Do Bot
├────────────────
├───➣ ${prefix}atm
├───➣ ${prefix}transfer
├─➢ Transferir e Atm
└─────────

┌──〘 🍃MENU DEFACER🍃 〙
├───➣ ${prefix}dorking
├───➣ ${prefix}encode64
├───➣ ${prefix}decode64
├───➣ ${prefix}decode32
├───➣ ${prefix}encode32
├───➣ ${prefix}encbinary
├───➣ ${prefix}decbinary
├───➣ ${prefix}encoctal
├───➣ ${prefix}decoctal
├───➣ ${prefix}becrypt
├───➣ ${prefix}hashidentifier
└─────────

┌──〘 🍃MENU ONDULADO🍃 〙
├───➣ ${prefix}babuserti
├───➣ ${prefix}bucinserti
├───➣ ${prefix}bocilepepserti
├───➣ ${prefix}gayserti
├───➣ ${prefix}pacarserti
├───➣ ${prefix}sadboyserti
├───➣ ${prefix}surgaserti
├───➣ ${prefix}pintarserti
├───➣ ${prefix}badboyserti
├───➣ ${prefix}badgirlserti
├───➣ ${prefix}goodboyserti
├───➣ ${prefix}goodgirlserti
├───➣ ${prefix}editorberkelasserti
├───➣ ${prefix}goodlookingserti
├───➣ ${prefix}fucekboyserti
├───➣ ${prefix}jametserti
├───➣ ${prefix}hekelserti
├───➣ ${prefix}fftourserti
├───➣ ${prefix}fftourserti2
├───➣ ${prefix}fftourserti3
├───➣ ${prefix}fftourserti4
├───➣ ${prefix}fftourserti5
├───➣ ${prefix}pubgtourserti
├───➣ ${prefix}pubgtourserti2
├───➣ ${prefix}pubgtourserti3
├───➣ ${prefix}pubgtourserti4
├───➣ ${prefix}pubgtourserti5
├───➣ ${prefix}mltourserti
├───➣ ${prefix}mltourserti2
├───➣ ${prefix}mltourserti3
├───➣ ${prefix}mltourserti4
├───➣ ${prefix}mltourserti5
├───➣ ${prefix}tweetfake
└─────────

┌──〘 🍃MENU ALEATORIO🍃 〙
├───➣ ${prefix}searchfilm
├───➣ ${prefix}procurarfilme
├─➢ Procurar Algum Filme
├────────────────
├───➣ ${prefix}nickff
├─➢ Nicks Free Fire
├────────────────
├───➣ ${prefix}igdownload
├───➣ ${prefix}soundcloud
├───➣ ${prefix}tiktok
├───➣ ${prefix}tiktoknowm
├───➣ ${prefix}nekonime
├───➣ ${prefix}loli
├───➣ ${prefix}neko
├───➣ ${prefix}husbu
├───➣ ${prefix}kpop
├───➣ ${prefix}anjing
├───➣ ${prefix}pokemon
├───➣ ${prefix}bokep
├───➣ ${prefix}darkjones
├─➢ Coisa Aleatória
└──────────

┌──〘 🍃MENU STICKER🍃 〙
├───➣ ${prefix}sticker
├───➣ ${prefix}figurinha
├─➢ Fazer Fig Com Foto/Gif
├────────────────
├───➣ ${prefix}toimg
├───➣ ${prefix}converter
├─➢ Converter Figurinha Em Foto
└──────────

┌──〘 🍃MENU LOGO🍃 〙
├───➣ ${prefix}hartatahta
├───➣ ${prefix}glowneon
├───➣ ${prefix}gsuggest
├───➣ ${prefix}candlemug
├───➣ ${prefix}lovemss
├───➣ ${prefix}mugflower
├───➣ ${prefix}narutobanner
├───➣ ${prefix}battelfiel
├───➣ ${prefix}8bit
├───➣ ${prefix}blueneon
├───➣ ${prefix}matrix
├───➣ ${prefix}breakwall
├───➣ ${prefix}greenneon
├───➣ ${prefix}dropwater
├───➣ ${prefix}wolflogo
├───➣ ${prefix}flowertext
├───➣ ${prefix}crosslogo
├───➣ ${prefix}silktext
├───➣ ${prefix}flametext
├───➣ ${prefix}glowtext
├───➣ ${prefix}smoketext
├───➣ ${prefix}pubglogo
├───➣ ${prefix}skytext
├───➣ ${prefix}cslogo
├───➣ ${prefix}lighttext
├───➣ ${prefix}retrotext
├───➣ ${prefix}crismes
├───➣ ${prefix}snowwrite
├───➣ ${prefix}watercolor
├───➣ ${prefix}firework
├───➣ ${prefix}sandwrite
├───➣ ${prefix}epep
├───➣ ${prefix}gplaybutton
├───➣ ${prefix}splaybutton
├───➣ ${prefix}text3dbox
├───➣ ${prefix}text3d
├───➣ ${prefix}phlogo
├───➣ ${prefix}bplogo
├───➣ ${prefix}leavestext
├───➣ ${prefix}textlight
├───➣ ${prefix}glitchtext
└─────────

┌──〘 🍃MENU OUTROS🍃 〙
├───➣ ${prefix}happymod
├───➣ ${prefix}pantun
├───➣ ${prefix}quotes
├───➣ ${prefix}playstore
├───➣ ${prefix}searchsticker
├───➣ ${prefix}igstalk
├───➣ ${prefix}shopee
├───➣ ${prefix}ytsearch
├───➣ ${prefix}kbbi
├───➣ ${prefix}apkpure
├───➣ ${prefix}igsearch
├───➣ ${prefix}wiki
├───➣ ${prefix}procurarfilme
├───➣ ${prefix}komik
├───➣ ${prefix}spamcall
├───➣ ${prefix}tebakgambar
├───➣ ${prefix}spamgmail
├───➣ ${prefix}sidshort
└─────────

┌──〘 🍃MENU IMAGEM🍃 〙
├───➣ ${prefix}
├─➢ Imagens Aleatoria
├───➣ ${prefix}memeindo
├─➢ Meme Em ingles
├───➣ ${prefix}
├─➢ Copiar Texto De Foto
└─────────
 
┌──〘 🍃MENU BAIXAR🍃 〙
├───➣ ${prefix}ytmp4 
├─➢ Baixa Vídeo Do YouTube
├───➣ ${prefix}ytmp3 
├─➢ Baixa Musica Do YouTube
├────────────────
├───➣ ${prefix}play
├───➣ ${prefix}baixarmusica
├─➢ Baixa Musica 
├────────────────
├───➣ ${prefix}tts
├─➢ Bot Manda Audio
├➻Exemplo: ${prefix}tts pt Olá, Fubukii!
└──────────

┌──〘 🍃MENU ANIME🍃 〙
├───➣ ${prefix}naruto
├───➣ ${prefix}boruto
├───➣ ${prefix}minato
├───➣ ${prefix}hinata
├───➣ ${prefix}sakura
├───➣ ${prefix}sasuke
├───➣ ${prefix}kaneki
├───➣ ${prefix}toukachan
├───➣ ${prefix}rize
├───➣ ${prefix}akira
├───➣ ${prefix}itori
├───➣ ${prefix}kurumi
├───➣ ${prefix}miku
├───➣ ${prefix}rem
├───➣ ${prefix}animecry
├───➣ ${prefix}neonime
├───➣ ${prefix}animekiss
├───➣ ${prefix}wink
├───➣ ${prefix}waifu
├───➣ ${prefix}husbu
├───➣ ${prefix}loli
├───➣ ${prefix}waifukawai
├───➣ ${prefix}kemonomimi
├───➣ ${prefix}kuni
├───➣ ${prefix}nsfwloli3
├───➣ ${prefix}neko2
├───➣ ${prefix}holo
├───➣ ${prefix}kusonime
├───➣ ${prefix}pictwaifu
├───➣ ${prefix}pictlolicon
├───➣ ${prefix}pictneko
├───➣ ${prefix}nakanomiku
├───➣ ${prefix}rikka
├───➣ ${prefix}animesad
├───➣ ${prefix}yotsuba
├───➣ ${prefix}randomanime
└─────────

┌──〘 🍃MENU PREMIUM🍃 〙
├───➣ ${prefix}premiumlist
├───➣ ${prefix}randomhentai
├───➣ ${prefix}bokep
├───➣ ${prefix}blowjob
├───➣ ${prefix}nulis1
├───➣ ${prefix}nulis2
├───➣ ${prefix}mutual
├───➣ ${prefix}next
├───➣ ${prefix}nangis
├───➣ ${prefix}cium
├───➣ ${prefix}peluk
├───➣ ${prefix}tiktok
├───➣ ${prefix}yutubdl
├───➣ ${prefix}hidetag5
├───➣ ${prefix}hidetag10
├───➣ ${prefix}moddroid
├───➣ ${prefix}happymod
├───➣ ${prefix}ytmp3
├───➣ ${prefix}ytmp4
├───➣ ${prefix}igvideo
├───➣ ${prefix}play
├───➣ ${prefix}baixarmusica
└─────────

┌──〘 🍃MENU TRAP🍃 〙
├───➣ ${prefix}trap1
├───➣ ${prefix}trap2
├───➣ ${prefix}trap3
├───➣ ${prefix}trap4
├───➣ ${prefix}trap5
├───➣ ${prefix}trap6
├───➣ ${prefix}trap7
├───➣ ${prefix}trap8
├───➣ ${prefix}trap9
├───➣ ${prefix}trap10
├───➣ ${prefix}trap11
├───➣ ${prefix}trap12
├───➣ ${prefix}trap13
├───➣ ${prefix}trap14
├───➣ ${prefix}trap16
├───➣ ${prefix}trap17
├───➣ ${prefix}trap18
├───➣ ${prefix}trap19
├───➣ ${prefix}trap20
├───➣ ${prefix}trap21
├───➣ ${prefix}trap22
├───➣ ${prefix}trap23
├───➣ ${prefix}trap24
├───➣ ${prefix}trap25
├───➣ ${prefix}trap27
├───➣ ${prefix}trap28
├───➣ ${prefix}trap29
├───➣ ${prefix}trap30
├───➣ ${prefix}trap31
├───➣ ${prefix}trap32
├───➣ ${prefix}trap33
├───➣ ${prefix}trap34
├───➣ ${prefix}trap35
├───➣ ${prefix}trap36
├───➣ ${prefix}trap37
└─────────

┌──〘 🍃${botName}🍃 〙
├───➣ Nome : ${botName} ✅
├───➣ Navegador : Chrome ✅
├───➣ Servidor : Baileys ✅
├───➣ Versão : 3.0 ✅
├───➣ Celular : Xiaomi ✅
├───➣ Versão Whatsapp : 2.20.205.16 ✅
└─────────`
baby.sendMessage(from, buffer, image, { quoted: mek, caption: shiz })
const menu2 = fs.readFileSync('./assest/menu2.mp3');
baby.sendMessage(from, menu2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
case 'afk'://UPDATE MR.108P
	           //UPDATE MRG{108P}
	           if (!isGroup) return reply(ind.groupo())
	           if (isAfkOn) return reply(ind.afkOnAlready())
	           if (isLimit(sender)) return reply(ind.limitend(pushname))
	            limitAdd(sender)
	              reason = body.slice(5)
					if (reason === undefined || reason === ' ' || reason === '') { reason = 'nothing'}
	                addAfkUser(sender, time, reason)
	                reply(ind.afkOn(pushname, reason))
	            break
	            /*
]=====> SIMPLE MENU <=====[
*/
				case 'figurinha'://UPDATE MR.108P 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)'://UPDATE MR.108Pmin'(320,ih)'://UPDATE MR.108Pforce_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha, no momento da conversão ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)'://UPDATE MR.108Pmin'(320,ih)'://UPDATE MR.108Pforce_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envie fotos com legendas ${prefix}sticker ou marque a imagem com o comando`)
					}
					break
case 'sticker'://UPDATE MR.108P 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)'://UPDATE MR.108Pmin'(320,ih)'://UPDATE MR.108Pforce_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha, no momento da conversão ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)'://UPDATE MR.108Pmin'(320,ih)'://UPDATE MR.108Pforce_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Envie fotos com legendas ${prefix}sticker ou marque a imagem com o comando`)
					}
					break
			case 'dadu'://UPDATE MR.108P
			//UPDATE MRG{108P}
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
	   random = `${Math.floor(Math.random() * 6)}`
        hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			baby.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
				case 'simisimi'://UPDATE MR.108P // Update By RzkyO & ItsmeikyXSec404
				reply(`[❕] Loading`)
				simi = await fetchJson(`https://onlydevcity.herokuapp.com/api/simisimi?text=${body.slice(9)}&apikey=Mr.105P`)
				reply(simi.result)
				break
				case 'tts'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return baby.sendMessage(from, 'Onde está o código do idioma sis? exemplo : ${prefix}Miku Naka', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return baby.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('O texto é muito longo mano')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							baby.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
					case 'caklontong'://UPDATE MR.108P
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/caklontong?apikey=Mr.105P`, {method: 'get'})
					setTimeout( () => {
				 baby.sendMessage(from, '*➸ Responder :* '+anu.result.jawaban+'\n'+anu.result.deskripsi, text, {quoted: mek })
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_10 segundos para ir…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 segundos para ir_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 segundos para ir_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, anu.result.soal, text, {quoted: mek })
					}, 0) // 1000 = 1s,
					break 
					case 'tebakgambar'://UPDATE MR.108P
                 //UPDATE MRG{108P}
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					baby.sendMessage(from, '*➸ Responder :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_10 segundos para ir…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 segundos para ir_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 segundos para ir_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, bufferkkk, image, { caption: '_Explique o que esta imagem significa_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					
				case 'apkpure'://UPDATE MR.108P
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nome APK* : ${i.title}\n*Link* : ${i.url}\n*Avaliação* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
			case 'katakatadilan'://UPDATE MR.108P
			//UPDATE MRG{108P}
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(ind.wait())
					break
					case 'katadoi'://UPDATE MR.108P
			//UPDATE MRG{108P}
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(ind.wait())
					break
					case 'hemkel'://UPDATE MR.108P
			//UPDATE MRG{108P}
				gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(ind.wait())
					break
					case 'pantun'://UPDATE MR.108P
			//UPDATE MRG{108P}
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/Pantun.php?apikey=xptn3`, {method: 'get'})
					reply(ind.wait())
					break
					case 'quoterandom'://UPDATE MR.108P
			//UPDATE MRG{108P}
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})
					reply(ind.wait())
					break		
				case 'quotes'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
			//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				quotes = body.slice(1)
				const quo =['É melhor entender um pouco do que entender mal.','Quase todos os homens são capazes de resistir à adversidade. No entanto, se você quiser testar o verdadeiro caráter de um homem, dê-lhe poder.','Quando a determinação de alguém é forte e constante, Deus se unirá ao esforço.','O sofrimento é uma lição.','Ciência sem religião é coxo.','A vida é como uma bicicleta, para ficarmos equilibrados temos que continuar nos movendo.','A diferença entre passado, presente e futuro nada mais é do que uma ilusão teimosa.','Uma mesa, uma cadeira, uma tigela de frutas e um violino; o que mais é necessário para uma pessoa se sentir feliz?','Tenha pena dos outros, seja duro consigo mesmo.','A melhor maneira de se mover é atribuir tarefas a si mesmo.','Não devemos desanimar. A paixão é o mais forte estimulante para o amor, a criação e o desejo de viver mais.','O homem será feliz enquanto ele escolher ser feliz.','Não desejo ser tudo para todos. Eu só quero ser algo para alguém.','Quando o intelecto de alguém é perfeito, poucas palavras.','Abençoado é o homem que pode ser um mestre para si mesmo, ser um motorista de seus desejos e ser um capitão de seu barco salva-vidas.','Um amigo honesto é maior hbabynya do que a propriedade herdada dos ancestrais.','A coisa mais cansativa da vida é ser uma pessoa insincera.','Aberto para você, é assim que Deus nos dá uma maneira de lutar. Nunca pense que a estrada está fechada.','A procrastinação é um túmulo onde a oportunidade está enterrada.','O amor não é olhar nos olhos um do outro, mas olhar na mesma direção juntos.','Nós somos o que fazemos continuamente. Assim, a excelência não é uma ação, mas um hábito.','Nunca tente fazer seu filho ou filha ser como você. Você é apenas uma pessoa.','Se você pode fazer outras pessoas rirem, então você obterá todo o amor que quiser.','Os problemas virão mais cedo ou mais tarde. Se surgir um problema, cumprimente-o da melhor maneira possível. Quanto mais gentil você o cumprimenta, mais rápido ele sai.','Não podemos fazer nada para mudar o passado. Mas tudo o que fizermos pode mudar o futuro.','Paciência é amiga da sabedoria.','Pessoas criativas são motivadas pelo desejo de progredir, não pelo desejo de vencer os outros.','Onde quer que esteja, seja sempre o melhor e dê o melhor que podemos dar.','O ódio é como o amor, queimando as pequenas coisas.','Você não precisa ter sucesso na primeira vez.','Uma hora intensiva, muito melhor e mais gratificante do que anos de sonhos e ponderações.','A melhor coisa que você pode fazer por outra pessoa não é compartilhar sua riqueza, mas ajudá-la a possuí-la.','Não há garantia de sucesso, mas não tentar é garantia de fracasso.','Não sei qual é a chave do sucesso, mas a chave do fracasso é tentar fazer todos felizes.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				baby.sendMessage(from, ''+tes+'\n\n_Kata Ilham._', text, { quoted: mek })
				await limitAdd(sender)
				break	
				case 'perfil'://UPDATE MR.108P
    				baby.updatePresence(from, Presence.composing)
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
    				try {
					profil = await baby.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *SEU PERFIL* 」\n│• *Nome:* ${pushname}\n│• *Usuário Registrado:* ✓\n│• *Link do seu número:* wa.me/${sender.split("@")[0]}\n╰─────────────────────`
					buff = await getBuffer(profil)
					baby.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
//MAKER MENU\\
case 'glowneon'://UPDATE MR.108P
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Exemplo: ${prefix}glowneon Mr.108P`)
tekas = body.slice(10)
reply(ind.wait())
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
baby.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest'://UPDATE MR.108P
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Exemplo: ${prefix}gsuggest Mr.108P/rem/bot`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(ind.wait())
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
baby.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug'://UPDATE MR.108P
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Exemplo: ${prefix}candlemug ArnandoGanz`)
ddu = body.slice(11)
reply(ind.wait())
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
baby.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
case 'lovemss'://UPDATE MR.108P
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Exemplo: ${prefix}lovemss ArnandoGanz`)
lop = body.slice(9)
reply(ind.wait())
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
baby.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case 'mugflower'://UPDATE MR.108P
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Exemplo: ${prefix}mugflower ArnandoGanz`)
mug = body.slice(11)
reply(ind.wait())
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
baby.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case 'narutobanner'://UPDATE MR.108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Exemplo: ${prefix}narutobanner ArnandoGanz`)
    nar = body.slice(14)
    reply(ind.wait())
    narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
    baby.sendMessage(from, narba, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'battelfiel'://UPDATE MR.108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Exemplo: ${prefix}battelfiel ArnandoGanz`)
   du = `${body.slice(12)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
    batte = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${ted1}&text2=${ted2}`)
  baby.sendMessage(from, batte, image, {quoted: mek})
     await limitAdd(sender)
     break
case '8bit'://UPDATE MR.108P//UPDATE MR108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Exemplo: ${prefix} 8bit ArnandoGanz`)
   du = `${body.slice(5)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
bit = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${ted1}&text2=${ted2}`)
baby.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
  //MAKER MENU\\
case 'play'://UPDATE MR.108P   
				play = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Canção encontrada!!!*\nTítulo : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIADO POR FAVOR, SEM SPAM*`
				buffer = await getBuffer(anu.result.thumbnail)
				baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				break
				case 'baixarmusica'://UPDATE MR.108P   
				play = body.slice(7)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Canção encontrada !!!*\nTítulo : ${anu.result.title}\nFonte : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE ENVIADO POR FAVOR, SEM SPAM*`
				buffer = await getBuffer(anu.result.thumbnail)
				baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: freply})
				break
case 'igdownload'://UPDATE MR.108P ////UPDATE MR108P //Masih error keknya dri sonony
anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=apivinz`, {method: 'get'})
teks = `Proprietário : ${anu.result.owner}
Rubrica : ${anu.result.caption}
Tipo : ${anu.result.type}
Url : ${anu.result.url}`
baby.sendMessage(from, buffer, MessageType.video, {quoted: mek, caption: teks})
break
case 'soundcloud'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/soundcloud?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer1 = await getBuffer(anu.result.thumb)
teks = `Título : ${anu.result.title}
Duração : ${anu.result.duration}
Qualidade : ${anu.result.quality}
𝙏𝙪𝙣𝙜𝙜𝙪 𝙮𝙖 𝙠𝙖𝙠 :)
Ni Biar Cepat :
${anu.result.download}`
baby.sendMessage(from, buffer1, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.download)
baby.sendMessage(from, buffer, audio, {quoted: mek})
break
case 'tiktok'://UPDATE MR.108P ////UPDATE MR108P
case 'tiktoknowm'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${args[0]}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.no_watermark)
teks = `Rubrica : ${anu.title}
Autor : ${anu.author}
Nome da Música : ${anu.music_name}`
baby.sendMessage(from, buffer, video, {quoted: mek, caption: teks})
buffer2 = await getBuffer(anu.audio)
baby.sendMessage(from, buffer2, audio, {quoted: mek, caption: teks})
break
case 'ytmp3'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3?url=${args[0]}&apikey=apivinz`, {method: 'get'})
thumbnail = await getBuffer(anu.result.thumbnail)
teks = `Título : ${anu.result.title}
Tamanho : ${anu.result.size}
*Por favor aguarde um momento para ser enviado*
Este é o link de áudio através do link sis : 
${anu.result.url_audio}`
baby.sendMessage(from, thumbnail, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.url_audio)
baby.sendMessage(from, buffer, audio, {quoted: mek})
break
case 'ytmp4'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=apivinz`, {method: 'get'})
thumbnail = await getBuffer(anu.result.thumbnail)
teks = `Título : ${anu.result.title}
Tamanho : ${anu.result.size}
*Por favor aguarde um momento para ser enviado*
Este é o link do vídeo através do link sis : 
${anu.result.url_video}`
baby.sendMessage(from, thumbnail, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.url_video)
baby.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih :)'})
break
case 'linesticker'://UPDATE MR.108P ////UPDATE MR108P
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/linesticker?link=${args[0]}&apikey=apivinz`, {method: 'get'})
dung = (anu.sticker)
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Error cok')
						fs.unlinkSync(ranp)
						
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, tescuk, `Autocolante do Título : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
case 'igstory'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
					for (let i of anu.data) {
						teks += `Nome de usuário : ${anu.username}
História total : ${anu.stories_count}
Tipo : ${i.type}
História : ${i.url}
Deslize o link para cima : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
					}
					reply(teks.trim())
break
case 'mediafire'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nome do arquivo : ${anu.name_file}
Tamanho do arquivo : ${anu.file_size}
Data de upload : ${anu.upload_date}
Tipo de arquivo : ${anu.file_type}
Link Download : ${anu.download}
Descrição : ${anu.description}`
baby.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break
//Random Api
case 'fml'://UPDATE MR.108P	//UPDATE MR108P
					if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/fml`)
					hasil = data.result
					reply(hasil)
					break
case 'quran'://UPDATE MR.108P //UPDATE MR108P
					if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
					quran = `*->* ${anu.result.arti}\n*->* ${anu.result.asma}\n*->* ${anu.result.ayat}\n*->* ${anu.result.keterangan}\n*->* ${anu.result.nama}\n*->* ${anu.result.nomor}\n*->* ${anu.result.rukuk}\n*->* ${anu.result.type}\n*->* ${anu.result.urut}`
					baby.sendMessage(from, quran, text, {quoted: mek})
					
					break
case 'estetik'://UPDATE MR.108P //UPDATE MR108P			
					if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'darkjokes'://UPDATE MR.108P //UPDATE MR108P
					anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'memeindo'://UPDATE MR.108P //UPDATE MR108P			
					anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'nekonime'://UPDATE MR.108P //UPDATE MR108P
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
				reply('CARREGANDO NGAB')
				anu = await fetchJson(`https://api.zeks.xyz/api/nekonime?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				break
case 'pantun'://UPDATE MR.108P
					 // Fix Bug By ItsmeikyXSec404				
                 if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					break
case 'quotes'://UPDATE MR.108P
					 // Fix Bug By ItsmeikyXSec404				
                 if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=apivinz`)
					cop = `Citações : _${data.result.quotes}_\n\nAutor : _${data.result.author}_`
					reply(cop)
					break
					case 'nickepep'://UPDATE MR.108P //UPDATE MR108P 
					if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '𝗡𝗶𝗰𝗸 𝗘𝗽𝗲𝗽\n'
					for (let i of data.result) {
						teks += `*usuario* : ${i}\n\n𝗡𝗶𝗰𝗸 𝗘𝗽𝗲𝗽\n`
					}
					reply(teks.trim())
					break
					//Berita
case 'tribunnews'://UPDATE MR.108P //UPDATE MR108P
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '𝗧𝗿𝗶𝗯𝘂𝗻 𝗻𝗲𝘄𝘀\n'
					for (let i of data.result) {
						teks += `*Título:* : ${i.title}\n*Tempo* : ${i.time}\n*Url* : ${i.url}\n*Em formação* : ${i.ket}\n\n𝗧𝗿𝗶𝗯𝘂𝗻 𝗻𝗲𝘄𝘀\n`
					}
					reply(teks.trim())
					break
case 'liputan'://UPDATE MR.108P //UPDATE MR108P
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '𝗟𝗶𝗽𝘂𝘁𝗮𝗻\n'
					for (let i of data.result) {
						teks += `*Título:* : ${i.title}\n*Url* : ${i.url}\n*Em formação* : ${i.ket}\n*Categoria* : ${i.category}\n*Tempo* : ${i.time}\n\n𝗟𝗶𝗽𝘂𝘁𝗮𝗻\n`
					}
					reply(teks.trim())
					break
case 'foxnews'://UPDATE MR.108P //UPDATE MR108P
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '𝗙𝗼𝘅 𝗻𝗲𝘄𝘀\n'
					for (let i of data.result) {
						teks += `*Título:* : ${i.title}\n*Url* : ${i.url}\n*País* : ${i.country}\n*Tempo* : ${i.time}\n*Contente* : ${i.content}\n\n𝗙𝗼𝘅 𝗻𝗲𝘄𝘀\n`
					}
					reply(teks.trim())
					break
					//Nulis 
case 'nulis'://UPDATE MR.108P ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
reply('espere um minuto⏳')
teks = body.slice(7)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek})
break
case 'nulis2'://UPDATE MR.108P ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
reply('espere um minuto⏳')
teks = body.slice(8)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek})
break
case 'nulis3'://UPDATE MR.108P ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
reply('espere um minuto⏳')
teks = body.slice(3)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek})
break
//Searching
case 'playstore'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${body.slice(11)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
baby.sendMessage(from, buffer, image, {quoted: mek})
teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
for (let i of anu.result) {
teks = `Nome Apk : ${i.title}
App ID : ${i.appid}
Desenvolvedor : ${i.developer}
Preço : ${i.price}
Avaliar : ${i.rating}
Url Apk : ${i.url}

𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲
`
}
reply(teks.trim())
break
case 'searchsticker'://UPDATE MR.108P ////UPDATE MR108P
case 'searchstiker'://UPDATE MR.108P ////UPDATE MR108P
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Autocolante com o Nome : ${anu.title}`
dung = (anu.sticker)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Erro cok')
						fs.unlinkSync(ranp)
						
						buffer2 = fs.readFileSync(rano)
						costum(buffer2, sticker, tescuk, `Autocolante do Título : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
case 'igstalk'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Nome de usuário : ${anu.username}
Nome completo : ${anu.fullname}
Seguidor : ${anu.follower}
Seguindo : ${anu.following}
Verificado : ${anu.is_verified}
Bussiness : ${anu.is_bussiness}
Privado : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
baby.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break
case 'shopee'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/yFZgntN/f9ab826750ea.jpg`)
teks = '𝗦𝗛𝗢𝗣𝗘𝗘\n'
					for (let i of anu.data) {
						teks += `Nome do item : ${i.name}
Hbaby : ${i.hbaby}
Vendido : ${i.terjual}
Localização : ${i.location}
Tampa : ${i.cover}
Estoque : ${i.stock}
Em formação : ${i.information}
Url : ${i.url}
Descrição : ${i.desc}\n\n𝗦𝗛𝗢𝗣𝗘𝗘
`
}
baby.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break
case 'ytsearch'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Uploader : 
Nome Canal : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verificado : ${i.uploader.verified}

Video :
Nome Video : ${i.video.title}
Url : ${i.video.url}
Duração : ${i.video.duration}
Descrição : ${i.video.snippet}
Data de upload : ${i.video.upload_date}
Visualizações : ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
					}
					baby.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break
case 'neonime'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `O nome neonime : ${i.title}
Link : ${i.link}
Descrição : ${i.desc}\n\n𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
					}
					reply(teks.trim())
break
case 'kbbi'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/kbbi?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = `Significado : A partir de ${body.slice(6)} ${anu.result}
Fonte : ${anu.source}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'apkpure'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nome Apk : ${i.title}
Url : ${i.url}
Avaliação : ${i.rating}\n\n𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'igsearch'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nome de usuário : ${i.username}
Privado : ${i.private_user}
Verificado : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'wiki'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/wiki?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = `${anu.result.result}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'procurarfilme'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
teks = '𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nome do Filme : ${i.title}
Url : ${i.url}\n\n𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'searchfilm'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = '𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nome do Filme : ${i.title}
Url : ${i.url}\n\𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'komik'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/bacakomik?apikey=apivinz&q=${body.slice(7)}`, {method: 'get'})
teks = '𝗞𝗼𝗺𝗶𝗸 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nome Komik : ${i.title}
Avaliação : ${i.rating}
Url : ${i.url}\n\n𝗞𝗼𝗺𝗶𝗸 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'happymod'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nome Apk : ${i.title}
Avaliação : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'spamcall':
          if (isBanned) return reply(nad.baned())
          //UPDATE MRG{108P}
          if (isLimit(sender)) return reply(nad.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			baby.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
           if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
           if (isLimit(sender)) return reply(nad.limitend(pusname))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			baby.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break 
case 'dorking':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				reply(ind.wait())
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					baby.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
			if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				baby.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(nad.baned())
           //UPDATE MRG{108P}
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipo: *${anu.hash_type}*\nQuatro tipos: *${anu.char_type}*`
					  baby.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
//kuis
case 'tebakgambar'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`, {method:'get'})
				    gambarnye = await getBuffer(anu.result.soal)
				    setTimeout( () => {
					baby.sendMessage(from, '*❑ Responder :* '+ anu.result.jawaban +'\n', text, {quoted: baby}) // ur cods
					}, 30000) 
					setTimeout( () => {
					baby.sendMessage(from, '𝟷𝟶 𝚍𝚎𝚝𝚒𝚔 𝚕𝚊𝚐𝚒', text)
					}, 20000) 
					setTimeout( () => {
					baby.sendMessage(from, '𝟸𝟶 𝚍𝚎𝚝𝚒𝚔 𝚕𝚊𝚐𝚒', text)
					}, 10000) 
					setTimeout( () => {
					baby.sendMessage(from, '𝟹𝟶 𝚍𝚎𝚝𝚒𝚔 𝚕𝚊𝚐𝚒', text)
					}, 1000) 
					setTimeout( () => {
					baby.sendMessage(from, gambarnye, image, { caption: `*𝚃𝚎𝚋𝚊𝚔 𝙶𝚊𝚖𝚋𝚊𝚛 𝙱𝚎𝚛𝚒𝚔𝚞𝚝!!*\n*Tingkat*: ${anu.result.tingkat}`, quoted: baby }) // ur cods
					}, 0) 
					break
break
//other
case 'sidshort'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${args[0]}`, {method: 'get'})
teks = `Baixo : ${anu.short}
Grande : ${anu.long}
Crio at :
Data : ${anu.created_at.date}
Fuso horário Tipo : ${anu.created_at.timezone_type}
Fuso horário : ${anu.created_at.timezone}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'simi'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${body.slice(6)}`, {method: 'get'})
teks = `${anu.result}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'surah'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
if (args.length < 1) return reply('Surah ke?')
anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
teks2 = `Surah : ${anu.surah}
árabe : ${anu.asma}
Número da Surata : ${anu.no}
Traz isso para baixo di : ${anu.type}
Significado : ${anu.ket}
quantidade ayat : ${anu.jumlah_ayat}`
baby.sendMessage(from, teks2, text, {quoted: mek})
teks = '𝗔𝘆𝗮𝘁\n'
					for (let i of anu.ayat) {
teks += `Versículo ke : ${i.number}
árabe : ${i.text}
Latina EN : ${i.translation_en}
Latina ID : ${i.translation_id} \n\n`
}
reply(teks.trim())
buffer = await getBuffer(anu.audio)
baby.sendMessage(from, buffer, audio, {quoted: mek})
break
case 'say'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/qrdecode?apikey=apivinz&image=https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(body.slice(8))}&size=220x220&margin=0`, {method: 'get'})
teks = `${anu.result}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'jadwaltv'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
teks = `Nome TV : ${body.slice(10)}
${anu.result}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'urlshort'://UPDATE MR.108P ////UPDATE MR108P
case 'url'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args[0]}&apikey=apivinz`, {method: 'get'})
teks = `${anu.result}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'jadwalsholat'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${body.slice(14)}`, {method: 'get'})
teks = `${anu.data.string}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
case 'listdaerah'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=malang`, {method: 'get'})
teks = `${anu.listdaerah}`
baby.sendMessage(from, teks, text, {quoted: mek})
break
//Maker 
case 'qrcode'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${body.slice(8)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'barcode'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${body.slice(9)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'emoji'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
teks = emojiUnicode(body.slice(7))
buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${teks}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'slapimage'://UPDATE MR.108P ////UPDATE MR108P
try {
					profil = await baby.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
buffer = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=apivinz&img1=${profil}&img2=https://img.tek.id/img/content/2019/06/01/16833/whatsapp-tak-lagi-bisa-simpan-foto-profil-C7fSwKVQ2i.jpg`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'phkomen'://UPDATE MR.108P ////UPDATE MR108P
                tahta = body.slice(9)
                ja = tahta.split("|")[0];
			    rak = tahta.split("|")[1];
	    var imgbb = require('imgbb-uploader')
			ghost = baby.participant
               try {
          pp = await baby.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                      } catch {
       pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                         }
    media = await getBuffer(pp)
   datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
   fs.writeFileSync('getpp.jpeg', datae, 'base64')
   res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
      if (args.length < 1) return reply('Cadê o texto, mano??')
   if (args.length > 10) return reply('pelo menos 10 caracteres')
   buff = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=benbenz&img=${res.display_url}&username=${ja}&msg=${rak}`, {method: 'get'})
   baby.sendMessage(from, buff, image, {quoted: baby, caption: `*${ja}* : ${rak}`})                
	break
//Photooxy
case 'hartatahta':
				//UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\nExemplo : ${prefix}hartatahta DappaGanz`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				baby.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
case 'blueneon'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${body.slice(10)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'matrix'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${body.slice(8)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'breakwall'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${body.slice(11)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'greenneon'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/gneon?apikey=apivinz&text=${body.slice(11)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'dropwater'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${body.slice(11)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'wolflogo'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(10)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${wolf}&text2=${logo}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'flowertext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/flowertext?text=${body.slice(12)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'crosslogo'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'silktext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'flametext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'glowtext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'smoketext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/smoketext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'pubglogo'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(10)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/pubglogo?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'skytext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/skytext?text=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'cslogo'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${body.slice(8)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
//photo funia
case 'lighttext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'retrotext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
retro = wolflogo.split("|")[2];
anu = await fetchJson(`https://api.zeks.xyz/api/retro?text1=${wolf}&text2=${logo}&text3=${retro}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'crismes'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'snowwrite'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'watercolor'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(12)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/watercolour?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'firework'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${body.slice(10)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'sandwrite'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${body.slice(11)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
//Ephoto
case 'epep'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${body.slice(6)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'gplaybutton'://UPDATE MR.108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(13)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'splaybutton'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(13)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
//text pro
case 'text3dbox'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${body.slice(11)}`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'text3d'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${body.slice(8)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'phlogo'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(8)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${wolf}&text2=${logo}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'bplogo'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${body.slice(8)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'leavestext'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${body.slice(12)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'textlight'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${body.slice(11)}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'glitchtext '://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/gtext?text1=${wolf}&text2=${logo}&apikey=apivinz`)
baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUCESSO🍂'})
break
case 'ytmp3'://UPDATE MR.108P//UPDATE MR105P
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=RamlanID&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `Visualizar : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Deslike : ${get_result.dislike}\n`
                    ini_txt += `Descrição :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                   baby.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    baby.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
               case 'ytmp4'://UPDATE MR.108P
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=RamlanID&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Título : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duração : ${get_result.duration}\n`
                    txt += `Visualizar : ${get_result.view}\n`
                    txt += `Como : ${get_result.like}\n`
                    txt += `Deslike : ${get_result.dislike}\n`
                    txt += `Descrição :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    baby.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                    case 'kpop'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kpop`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					baby.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
            case 'naruto'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					baby.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					baby.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					baby.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
			case 'hinata'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					baby.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break  
				case 'sasuke'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					baby.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kaneki-ken`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: 'Pyschopet disse inspiração', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					baby.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'randomhentai'://UPDATE MR.108P
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isPremium) return reply('Desculpe, você não é um usuário premium!')
					if (!isNsfw) return reply(ind.nsfwoff())
				    if (isBanned) return reply('Desculpe você foi pego!')
                         gatauda = body.slice(12)
					     reply(ind.wait())
                     anu = await fetchJson(`https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633`, {method: 'get'})
                       buffer = await getBuffer(anu.result)
                baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
				case 'rize'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					baby.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					baby.sendMessage(from, nye, image, { caption: 'Akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					baby.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
		case 'miku'://UPDATE MR.108P
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					baby.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break
case 'rem'://UPDATE MR.108P
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: 'dono do rem waifu', quoted: mek })
					await limitAdd(sender) 
					break
   case 'yotsuba'://UPDATE MR.108P
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yotsuba`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: '「 SUCESSO 」 ESTÁ PRONTO.', quoted: mek })
					await limitAdd(sender) 
					break
case 'animesad'://UPDATE MR.108P
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime sad`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: 'Dah lah..', quoted: mek })
					await limitAdd(sender) 
					break
case 'rikka'://UPDATE MR.108P
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rikka`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: '「 SUCESSO 」 ESTÁ PRONTO.', quoted: mek })
					await limitAdd(sender) 
					break
case 'loli'://UPDATE MR.108P
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: '「 SUCESSO 」 ESTÁ PRONTO.', quoted: mek })
					await limitAdd(sender) 
					break
case 'randomanime'://UPDATE MR.108P
			if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					baby.sendMessage(from, nye, image, { caption: 'Aqui', quoted: mek })
					await limitAdd(sender) 
					break 
case 'waifukawai'://UPDATE MR.108P
				    try {
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					baby.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
			case 'kemonomimi'://UPDATE MR.108P
				    try {
	   			reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					baby.sendMessage(from, buf, image, {quoted: mek,caption: "Idiota oni-chan!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
		case 'kuni'://UPDATE MR.108P
				    try {
					if (!isPrem) return reply(ind.premium())
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					baby.sendMessage(from, buf, image, {quoted: mek,caption: "*LEMBRE-SE HÁ DEUS*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break 
				case 'nsfwloli3'://UPDATE MR.108P
				    try {
				reply(ind.wait())	
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffer = await getBuffer(res.url)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('тЭМ *ERROR* тЭМ')
					}
					break
		case 'neko2'://UPDATE MR.108P
				   try {
				reply(ind.wait())	
					axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
				baby.sendMessage(from, buf, image, {quoted: mek,caption: "NYANG!!"})
					})})
					} catch (e) {
				console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
      case 'holo'://UPDATE MR.108P
				    try {
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					baby.sendMessage(from, buf, image, {quoted: mek,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
                //ONLY DEV\\
     case 'anakharamserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}Ankhramserati Arndogenz*`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'hekelserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}não gostou de ArnandoGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'babuserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}babu ArnandoGanz*`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'ffserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'bucinserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'bocilepepserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'gayserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pacarserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'sadboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'surgaserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pinterserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'badgirlserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'badboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}badboyserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'goodgirlserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'goodboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}goodboyserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'editorberkelasserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				anu = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'goodlookingserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}goodlookingserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(17)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'fucekboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fucekboyserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'jametserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'youtuberserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}youtuberserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'fftourserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fftourserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'fftourserti2'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fftourserti2 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'fftourserti3'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fftourserti3 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'fftourserti4'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fftourserti4 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'fftourserti5'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}fftourserti5 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'mltourserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}mltourserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'mltourserti2'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}mltourserti2 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'mltourserti3'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}mltourserti3 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'mltourserti4'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}mltourserti4 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'mltourserti5'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}mltourserti5 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pubgtourserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}pubgtourserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pubgtourserti2'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}pubgtourserti2 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pubgtourserti3'://UPDATE MR.108P 				
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}pubgtourserti3 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pubgtourserti4'://UPDATE MR.108P 				
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}pubgtourserti4 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
				case 'pubgtourserti5'://UPDATE MR.108P 				
				if (isBanned) return reply('Desculpe você foi pego!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Cadê o texto?\n*Exemplo ${prefix}pubgtourserti5 MrG{108P}`)
				reply(`[❕] Carregando`)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				baby.sendMessage(from, anu, image, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
          //ISLAM MENU\\
case 'asmaulhusna'://UPDATE MR.108P
				baby.updatePresence(from, Presence.composing) 
				reply(`[❕] Carregando`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/asmaulhusna?apikey=Mr.105P`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Número:* : ${i.index}\n*Latina* : ${i.latin}\n*árabe* : ${i.arabic}\n*Traduzir Indo* : ${i.translation_id}\n*Traduzir Inglês* : ${i.translation_en}\n=================\n`
				}
				reply(teks)
				break
case 'doaharian'://UPDATE MR.108P
				baby.updatePresence(from, Presence.composing) 
				reply(`[❕] Carregando`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=Mr.105P`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nome da Oração:* : ${i.title}\n*árabe* : ${i.arabic}\n*Latina* : ${i.latin}\n*Tradução* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		case 'niatsholat'://UPDATE MR.108P
				reply(`[❕] Carregando`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Oração : ${i.name}\n*árabe* : ${i.arabic}\n*Latina* : ${i.latin}\n*Traduzir* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'bacaansholat'://UPDATE MR.108P
				reply(`[❕] Carregando`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=Mr.105P`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Leituras : ${i.name}\n*árabe* : ${i.arabic}\n*Latina* : ${i.latin}\n*Traduzir* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
				case 'kisahnabi2'://UPDATE MR.108P
				reply(`[❕] Carregando`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=Mr.105P`, {method: 'get'})
				buffer7 = await getBuffer(anu.result.image)
				teks = `*HASIL*\n\n*➸ O nome do profeta :* ${anu.result.nabi}\n*➸ Nascermos :* ${anu.result.lahir}\n*➸ Era :* ${anu.result.umur}\n*➸ O lugar :* ${anu.result.tempat}\n*➸ História :* ${anu.result.kisah}`
				baby.sendMessage(from, teks, text, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
       case 'quotemuslim'://UPDATE MR.108P
				reply(`[❕] Carregando`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=Mr.105P`, {method: 'get'})
				hasil = `*➸ Quote :* ${anu.result.text_id}`
				baby.sendMessage(from, hasil, text, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
		case 'tahlil'://UPDATE MR.108P
				reply(`[❕] Carregando`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=Mr.105P`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Título : ${i.title}\n*árabe* : ${i.arabic}\n*Traduzir* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'ayatkursi'://UPDATE MR.108P
				reply(`[❕] Carregando`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=Mr.105P`, {method: 'get'})
				teks = `➸ *árabe* : ${anu.result.data.arabic}\n*➸ Latina :* ${anu.result.data.latin}\n*➸ Significado :* ${anu.result.data.translation}\n*➸ Interpretação :* ${anu.result.data.tafsir}`
				baby.sendMessage(from, teks, text, { quoted: mek, caption: '「 SUCESSO 」 ESTÁ PRONTO.' })
				break
case 'randomquran'://UPDATE MR.108P
       case 'quranaudio':
		    if (isBanned) return reply(mess.only.benned)   
			 if (!isUser) return reply(mess.only.userB)
			anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
			faktaaa = `*Nome* : *${anu.result.nama}*\n*Significado* : *${anu.result.arti}*\n*Número* : *${anu.result.nomor}*\n*Tipo* : *${anu.result.type}*\n*Versículo* : *${anu.result.ayat}*\n*elas* : *${anu.result.keterangan}*`
			quu = await getBuffer(anu.result.audio)
			baby.sendMessage(from, faktaaa, text, {quoted: mek})
			baby.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
			await limitAdd(sender) 
				break
 case 'attp':
        if (isBanned) return reply(ind.baned())
			//UPDATE MRG{108P}
				if (args.length < 1) return reply(`_O texto é Mana Boss_\n*Exemplo ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				baby.sendMessage(from, attp2, sticker, {quoted: mek})
				break
case 'converter':
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isQuotedSticker) return reply('Responda ou marque o sticker com a qual deseja fazer uma foto de irmã >_<')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
				    baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui mano (. ❛ ᴗ ❛.)'})
				   fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
case 'toimg':
				if (isBanned) return reply(ind.baned())
				//UPDATE MRG{108P}
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isQuotedSticker) return reply('Responda ou marque o sticker com a qual deseja fazer uma foto de irmã >_<')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
				    baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui mano (. ❛ ᴗ ❛.)'})
				   fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
//GROUP MENU\\
case 'welcome':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Sekhon >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*OS RECURSOS DE BEM-VINDO ESTÃO ATIVOS*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUCESSO 」ATIVA RECURSOS DE BEM-VINDO EM GRUPO*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUCESSO 」DESLIGADO O RECURSO DE BEM-VINDO EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
case 'bemvindo':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Sekhon >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*OS RECURSOS DE BEM-VINDO ESTÃO ATIVOS*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUCESSO 」ATIVA RECURSOS DE BEM-VINDO EM GRUPO*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUCESSO 」DESLIGADO O RECURSO DE BEM-VINDO EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
case 'blackpink':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
pink = body.slice(11)
reply('O paciente viu....')
anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break				
                 case 'event':
                  if (isBanned) return reply(ind.baned())                 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*RECURSOS DO EVENTO BOS JÁ ATIVO*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「 SUCESSO 」ATIVADO OS EVENTOS EM GRUPO*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「 SUCESSO 」EVENTO MORTAL EM GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :ЁЭШГ')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*o recurso de nível esteve ativo antes*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'simih':
                  case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('「 SUCESSO 」 𝗠𝗲𝗻𝗴𝗮??𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('「 SUCESSO 」 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
                  if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('खे ekham >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *ativado*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「 SUCESSO 」ATIVADO RECURSOS NSFW NO GRUPO*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「 SUCESSO 」DESLIGADO O RECURSO NSWF NO GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return vanz.sendMessage(from, `Uso do recurso antidelete :\n\n*${prefix}antidelete [1/0]* (Para grupos)\n*${prefix}antidelete [1/0]* (para todos os contatos)\n*${prefix}antidelete banct 55198xxxxxxx* (banlist contato)`, MessageType.text)
				if (argz[1] == '1') {
					if (isGroup) {
						if (isRevoke) return vanz.sendMessage(from, `Antidelete foi habilitado neste grupo antes!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						baby.sendMessage(from, `*「 SUCESSO 」Antidelete foi ativado!*`, MessageType.text)
					} else if (!isGroup) {
						baby.sendMessage(from, `Para usa contato *${prefix}antidelete ativo*`, MessageType.text)
					}
				} else if (argz[1] == '0') {
					if (!isGroup) {
						if (isCtRevoke) return vanz.sendMessage(from, `Antidelete foi ativado em todos os contatos anteriores!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						baby.sendMessage(from, `Antidelete habilitado em todos os contatos!`, MessageType.text)
					} else if (isGroup) {
						baby.sendMessage(from, `Para o grupo de uso *${prefix}antidelete ativo*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return vanz.sendMessage(from, `Este contato já está no banco de dados da lista de banidos!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return vanz.sendMessage(from, `Insira números começando com 55! exemplo 551198xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					baby.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						baby.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						baby.sendMessage(from, `Para usar contato *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						baby.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						baby.sendMessage(from, `Para o grupo de uso *${prefix}antidelete morrer*`, MessageType.text)
					}
				}
				break
                                case 'antilink':
                  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*ATIVADO* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*「 SUCESSO 」 ATIVADO ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*「 SUCESSO 」 DESATIVADO ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'admin':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR GRUPO* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'grupo':
                  if (isBanned) return reply(ind.baned())					
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'Abrir') {
					    reply(`*GRUPO ABERTO COM SUCESSO 🍂*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'Fechar') {
						reply(`*GRUPO FECHADO COM SUCESSO 🍂*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					case 'grup':
                  if (isBanned) return reply(ind.baned())					
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'Abrir') {
					    reply(`*「 SUCESSO 」GRUPO ABERTO COM SUCESSO 🍂*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'Fechar') {
						reply(`*「 SUCESSO 」GRUPO FECHADO COM SUCESSO 🍂*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
               case 'adicionar':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você deseja adicionar??')
					if (args[0].startsWith('08')) return reply('Use o código de idioma')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						baby.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim que quer ser adicionado em privado🙃')
					}
					break
				case 'add':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você deseja adicionar??')
					if (args[0].startsWith('08')) return reply('Use o código de idioma sis')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						baby.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim que quer ser adicionado em privado🙃')
					}
					break
                case 'remover':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))			     	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁??𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Fubukii, com a permissão do administrador do seu grupo, vou chutá-lo 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
					} else {
						mentions(`Fubukii, com a permissão do administrador do seu grupo, vou chutá-lo @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						baby.groupRemove(from, mentioned)
					}
					break
			     	case 'kick':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))			     	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁??𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Fubukii, com a permissão do administrador do seu grupo, vou chutá-lo 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
					} else {
						mentions(`Fubukii, com a permissão do administrador do seu grupo, vou chutá-lo @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						baby.groupRemove(from, mentioned)
					}
					break
                case 'ocultartag':
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await baby.groupMetadata(from)
					var member = group['participantes']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
					await limitAdd(sender)
					break					
                case 'level':
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NOME : ${pushname}\n┃│➸ NÚMERO : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ NÍVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               baby.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
                case 'linkgrupo':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))                
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await baby.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    baby.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
                case 'marcar':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					break
			    case 'tagall':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
              case 'mudarnome':
                if (!isRegistered) return reply(ind.noregis())           
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateSubject(from, `${body.slice(9)}`)
                baby.sendMessage(from, '「 SUCESSO 」 Alterar o nome do grupo', text, {quoted: mek})
                    break
               case 'setname':
                if (!isRegistered) return reply(ind.noregis())           
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateSubject(from, `${body.slice(9)}`)
                baby.sendMessage(from, '「 SUCESSO 」 Alterar o nome do grupo', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isRegistered) return reply(ind.noregis())                
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateDescription(from, `${body.slice(9)}`)
                baby.sendMessage(from, '「 SUCESSO 」 Mudar a mesa do grupo', text, {quoted: mek})
					break
               case 'rebaixar':
                if (!isRegistered) return reply(ind.noregis())           
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					}
					break
           case 'demote':
                if (!isRegistered) return reply(ind.noregis())           
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promover':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Você assumiu o cargo >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Parabéns🥳 @${mentioned[0].split('@')[0]} *você se tornou o administrador do grupo* >_<`, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					}
					break
                case 'promote':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Você assumiu o cargo >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Parabéns🥳 @${mentioned[0].split('@')[0]} *você se tornou o administrador do grupo* >_<`, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					}
				case 'hedsot':
                if (!isRegistered) return reply(ind.noregis())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você deseja chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Fubukii Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						baby.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						baby.groupRemove(from, mentioned)
						}
					break
                 case 'fitnah':		
				if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@tag/mensagem/pandabot]]\n\nEx : \n${prefix}fitnah @tagmember/é/Olá também`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					baby.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                      case 'leave':
                      if (isBanned) return reply(ind.baned())      
                      if (!isRegistered) return reply(ind.noregis())           
                      if (!isGroup) return reply(ind.groupo())
                      if (!isGroupAdmins) return reply(ind.admin())
                      setTimeout( () => {
                      baby.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      baby.updatePresence(from, Presence.composing) 
                      if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned())   
                      baby.sendMessage(from, 'Eu disse adeus irmão:)', text)
                      }, 0)
                      break
//OWNER MENU
case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner  MrG{108P}*`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`porque Nemo Bot oferece ${one}Xp >_<`)
                      }else{
                     const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
					case 'info':
					me = baby.user
					uptime = process.uptime()
					teks = `*➸ Nome bot* : ${me.name}\n*➸ DONO* : FUBUKII🍂\n*➸ AUTOR* : ${ownerName}\n*➸ Número Bot* : @${me.jid.split('@')[0]}\n*➸ Prefixo* : ${prefix}\n*➸ Total de bloqueado pelo bot* : ${blocked.length}\n*➸ O bot tá ativo desde* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					baby.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'admin':
            case 'owner':
            case 'creator':
                  baby.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  baby.sendMessage(from, 'Este é meu proprietário...',MessageType.text, { quoted: mek} )
tod = await getBuffer(`https://i.ibb.co/Vm5FHxc/IMG-20210312-WA1759.jpg`)
 baby.sendMessage(from, tod, image, { quoted: mek, caption: '*Este é meu dono waifu, não pegue, se você pegar, vamos gass gelud !!*'})
                     break
                     case 'listapalavrao':
                    let lbw = `Esta é uma lista de palavras proibidas pelo bot🚫\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
case 'addpalavra':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addpalavrao [palavras duras]. exemplo ${prefix}addpalavrao buceta`)
                    const add = body.slice(12)
                  .push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('[SUCESSO] PALAVRA ADICIONADA!')
                    break
                case 'dellpalavra':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Enviar pedidos ${prefix}addpalavra [palavras duras]. exemplo ${prefix}addpalavra buceta`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('[SUCESSO] PALAVRA DELETADA!')
                    break
case 'antipalavrao':
                  if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === '1') {
                 return reply('*O recurso Antipalavão estava ativo antes*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                case 'addprem':
					if (!isOwner) return reply(ind.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Sucesso adicionado wa.me/${addp} Vá para a lista premium`)
					break
				case 'dellprem':
					if (!isOwner) return reply(ind.ownerb())
					delp = body.slice(11)
					premium.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Excluído com sucesso wa.me/${delp} Da Lista Premium`)
					break					
				case 'bc':
					baby.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await baby.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 AVISO BOT」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 AVISO BOT NEMO 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUCESSO 」*')
					}
					break
				case 'bcgp':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('O texto é onde meu chefe >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 AVISO GRUPO! 」*\n\n➸ Do Grupo : ${groupName}\n➸ Remetente : wa.me/${(sender.split('@')[0])}\n➸ Mensagem : ${body.slice(6)}`})
						}
						reply('*「 SUCESSO 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 AVISO GRUPO 」*\n\n➸ Do Grupo : ${groupName}\n➸ Remetente : wa.me/${(sender.split('@')[0])}\n➸ Mensagem : ${body.slice(6)}`)
						}
						reply('*「 SUCESSO 」*')
					}
					break
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    baby.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*「 SUCESSO 」* Prefix jadi ➸ : ${prefix}`)
					break
case 'limpar':
					if (!isOwner) return reply(ind.ownerb())
					anu = await baby.chats.all()
					baby.setMaxListeners(25)
					for (let _ of anu) {
						baby.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await baby.chats.all()
					baby.setMaxListeners(25)
					for (let _ of anu) {
						baby.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 baby.updatePresence(from, Presence.composing) 
				 baby.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					baby.blockUser (`${body.slice(7)}@c.us`, "add")
					baby.sendMessage(from, `Pedidos recebidos, bloquear ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    baby.blockUser (`${body.slice(9)}@c.us`, "remove")
					baby.sendMessage(from, `Pedidos aceitos, aberto ${body.slice(9)}@c.us`, text)
					break
case 'novafoto':
					if (!isOwner) return reply(ind.ownerb())
				    baby.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(enmedia)
					await baby.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil, meu chefe😗')
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    baby.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(enmedia)
					await baby.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil, meu chefe😗')
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *QUERO TAGS NO CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await baby.getProfilePicture(id)
						buffer = await getBuffer(pp)
						baby.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
                case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
//LIMIT MENU\\
case 'limite':
		if (isBanned) return reply(ind.baned())
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
				case 'transfer':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('557388843631@s.whatsapp.net', fee)
                reply(`*「 SUCESSO 」*'\n\transferência de dinheiro foi bem sucedida\n➸ a partir de : +${sender.split("@")[0]}\n➸ De : +${tujuan}\n➸ valor da transferência : ${jumblah}\n➸ imposto : ${fee}`)
                break
				case 'atm':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'comprarlimite':
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 SUCESSO 」*'\n\n➸ remetente : PandaBot\n➸ receptor : ${pushname}\n➸ compra nominal : ${payout} \n➸ preço limite : ${koinPerlimit}/limite\n➸ o resto do dinheiro : ${checkATMuser(sender)}\n\nprocess foi bem sucedido com SN\n${createSerial(15)}`)
				} 
				break
				case 'trap1':
satu = fs.readFileSync('./assest/trap1.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap2':
dua = fs.readFileSync('./assest/trap2.mp3');
baby.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap3':
tiga = fs.readFileSync('./assest/trap3.mp3');
baby.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap6':
enam = fs.readFileSync('./assest/trap6.mp3');
baby.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap7':
if (!isPrem) return reply(ind.premium())
tujuh = fs.readFileSync('./assest/trap7.mp3');
baby.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap8':
delapan = fs.readFileSync('./assest/trap8.mp3');
baby.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap9':
sembilan = fs.readFileSync('./assest/trap9.mp3');
baby.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap10':
sepuluh = fs.readFileSync('./assest/trap10.mp3');
baby.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'trap11':
duabelas = fs.readFileSync('./assest/trap11.mp3');
baby.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
empatbelas = fs.readFileSync('./assest/trap12.mp3');
baby.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap13':
limabelas = fs.readFileSync('./assest/trap13.mp3');
baby.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap14':
enambelas = fs.readFileSync('./assest/trap14.mp3');
baby.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap15':
tujuhbelas = fs.readFileSync('./assest/trap15.mp3');
baby.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap16':
delapanbelas = fs.readFileSync('./assest/trap16.mp3');
baby.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap17':
sembilanbelas = fs.readFileSync('./assest/trap17.mp3');
baby.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap18':
duasatu = fs.readFileSync('./assest/trap18.mp3');
baby.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap19':
duatiga = fs.readFileSync('./assest/trap19.mp3');
baby.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap20':
const bernyanyi = fs.readFileSync('./assest/trap20.mp3');
baby.sendMessage(from, bernyanyi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap21':
const tratata = fs.readFileSync('./assest/trap21.mp3');
baby.sendMessage(from, tratata, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap22':
const kebenaran = fs.readFileSync('./assest/trap22.mp3');
baby.sendMessage(from, kebenaran, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap23':
const sad = fs.readFileSync('./assest/trap23.mp3');
baby.sendMessage(from, sad, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap24':
const sad1 = fs.readFileSync('./assest/trap24.mp3');
baby.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap25':
const sad3 = fs.readFileSync('./assest/trap25.mp3');
baby.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap26':
const irimp3 = fs.readFileSync('./assest/trap26.mp3');
baby.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap27':
const pa = fs.readFileSync('assest/trap27.mp3')
baby.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap28':
const soun = fs.readFileSync('assest/trap28.mp3')
baby.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'trap29':
satu = fs.readFileSync('./assest/trap29.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap30':
tiga = fs.readFileSync('./assest/trap30.mp3');
baby.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap31':
empat = fs.readFileSync('./assest/trap31.mp3');
baby.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap32':
lima = fs.readFileSync('./assest/trap32.mp3');
baby.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap33':
enam = fs.readFileSync('./assest/trap33.mp3');
baby.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap34':
if (!isPrem) return reply(ind.premium())
tujuh = fs.readFileSync('./assest/trap34.mp3');
baby.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap35':
satu = fs.readFileSync('./assest/trap35.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap36':
satu = fs.readFileSync('./assest/trap36.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap37':
satu = fs.readFileSync('./assest/trap37.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.8,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})

				break
case 'blub':
	                 if (!isQuotedAudio) return reply('Responder áudio novo om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fasst':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3/m4a/ptt')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('NGEN(uh)')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ptt/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
	case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                	baby.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ marque o vídeo mano ❌')
					reply(baby.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m'))
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						baby.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				default:
if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Desculpa *${pushname}*, Comando *${prefix}${command}* Não listado dentro *${prefix}menu*!`)
                  }
			if (budy.includes(`Boa tarde`)) {
                  reply(`Boa tarde meu anjo`)
                 }
			if (budy.includes(`boa tarde`)) {
                  reply(`Boa noite meu anjo`)
                 }
		if (budy.includes(`Kwai`)) {
                  reply(`vsfd ninguém que saber de kwai😤😡`)
                  }
		if (budy.includes(`kwai`)) {
                  reply(`tmnc sem kwai aqui mano.😤😡`)
                 }
			if (budy.includes(`Boa noite`)) {
                  reply(`Boa noite meu anjo, sonhe cmg blz 😳👉👈`)
                 }
			if (budy.includes(`boa noite`)) {
                  reply(`Boa noite meu anjo, sonhe cmg blz 😳👉👈`)
                 }
		if (budy.includes(`Bv`)) {
                  reply(`Bv é bunda virgem?😳`)
                  }
		if (budy.includes(`bv`)) {
                  reply(`Bv é bunda virgem?😳`)
                  }
    if (budy.includes(`oi`)) {
                  reply(`Oi para começar a usar o bot, digite #menu !!`)
                  }
if (budy.includes(`Oi`)) {
                  reply(`Oi para começar a usar o bot, digite #menu !!`)
                  }
		if (budy.includes(`te amo`)) {
                  reply(`Eu também te amo bb😍`)
                  }
		if (budy.includes(`Te amo`)) {
                  reply(`Eu também te amo bb😍`)
                  }
		if (budy.includes(`obrigado`)) {
                  reply(`De nada🙃`)
                  }
		if (budy.includes(`Obrigado`)) {
                  reply(`De nada🙃`)
                  }
		if (budy.includes(`sendsticker`)) {
                const darkbot = fs.readFileSync('./sticker/darkbot');
                baby.sendMessage(from, darkbot, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`@557388843631`)) {
                  reply(`Não marque Fubukii, man ele está ocupado ✨`)
                  }
if (budy.includes(`@557388843631`)) {
                  reply(`Não marque Fubukii, man ele está ocupado  ✨`)
                  }
		if (budy.includes(`Nico`)) {
                const nico = fs.readFileSync('./sticker/nico');
                baby.sendMessage(from, nico, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`nico`)) {
                const nico = fs.readFileSync('./sticker/nico');
                baby.sendMessage(from, nico, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`Tapi`)) {
                const tapi = fs.readFileSync('./assest/tapi.mp3');
                baby.sendMessage(from, tapi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
            if (budy.includes(`tapi`)) {
                const tapi = fs.readFileSync('./assest/tapi.mp3');
                baby.sendMessage(from, tapi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
			if (budy.includes(`Wibu`)) {
                const wibu = fs.readFileSync('./assest/wibu.mp3');
                baby.sendMessage(from, wibu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
			if (budy.includes(`wibu`)) {
                const wibu = fs.readFileSync('./assest/wibu.mp3');
                baby.sendMessage(from, wibu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
if (budy.includes(`yamete`)) {
                const yamete = fs.readFileSync('./assest/yamete.mp3');
                baby.sendMessage(from, yamete, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
if (budy.includes(`Yamete`)) {
                const Yamete = fs.readFileSync('./assest/yamete.mp3');
                baby.sendMessage(from, Yamete, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
if (budy.includes(`tra`)) {
                const tra = fs.readFileSync('./assest/tratata.mp3');
                baby.sendMessage(from, tra, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}                
/*
]=====> 
> RAMLAN ID
> ARIFI RAZZAQ
> SABILUL
> ARYA 
> FEEDZ
> EREN 
> HASUFA TEAM
> REVOER ID
> ARIS ID
> NADIA CANS
> NAZWA
> VHTEAR
> TOBZ
> XTEAM
> MHANKBARBAR
> All Creator Bot WhatsApp
*/				
			if (!isGroup && !isCmd) {
                        await baby.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=Ar-Mr108P&text=${budy}`)
                        reply(simi.result)
				//reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

