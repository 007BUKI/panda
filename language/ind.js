exports.wait = () => {
	return`*「ESPERE」ESTOU FAZENDO⏳...*`

}

exports.succes = () => {
	return`*「SUCESSO」AQUI BB...*`
}

exports.lvlon = () => {
	return`*O recurso de nivelamento está ativado✅*`
}

exports.lvloff = () => {
	return`*O recurso de nivelamento está desativado❌*`
}

exports.premium = () => {
	return`*Este recurso é especial para Premium..*`
}

exports.lvlnul = () => {
	return`*Nível de rasgo 0 gan....`
}

exports.lvlnoon = () => {
	return`*O recurso de nível está desativado❌...*`
}

exports.noregis = () => {
	return`*「❗」NÃO REGISTRADO*\n*maneira daftar ${prefix}daftar nama|umur* \n\n*exemplo ${prefix}daftar Panda|16*`
}

exports.baned = () => {
	return`*LOL, É POR ISSO QUE USAR O BARCO USA O CÉREBRO DO BASTARDO🛐*`
}

exports.rediregis = () => {
	return`*「✔️」*\n\n*LUH JÁ ESTÁ INSCRITO, GAN...*`
}

exports.stikga = () => {
	return`*ERRO ...❌*`
}

exports.linkga = () => {
	return`*o link que você enviou é inválido.*❌`
}

exports.groupo = () => {
	return`*「❗」ESPECÍFICOS DE GRUPO*`
}

exports.ownerb = () => {
	return`*「❗」WOYYY !! PROPRIETÁRIO ESPECIAL*`
}

exports.ownerg = () => {
	return`*「❗」FAÇA UM PROPRIETÁRIO DOANG*`
}

exports.admin = () => {
	return`*「❗」SOMENTE ADMINISTRAÇÃO*`
}

exports.badmin = () => {
	return`*「❗」JADIIN GW ADMIN ERA SU*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW NÃO ATIVO (_vai pro xvideos poha_)*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietário do BOT, relatório falso/main2 não será respondido*`
}

exports.wrongf = () => {
	return`*Digite o texto, mano..*`
}

exports.clears = () => {
	return`*「🚮」Clear all Sucesso*`
}

exports.pc = () => {
	return`*「❗」CADASTRO*\n\n para saber se você se registrou verifique a mensagem que enviei \n\nNOTE:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRO DE SUCESSO 」*\nPara informações do usuário :\n\n*➸ Nome : ${namaUser}*\n*➸ Número : wa.me/${sender.split("@")[0]}*\n*➸ Era : ${umurUser}*\n*➸ Hora do registro : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTA : Esta mensagem é muito importante :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpa ${pushname} O limite de hoje acabou*\n*O limite é zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT」*
*o resto do seu limite :* _${limitCounts}_

_Atualize meu boss premium, então é grátis usar bots_`
}

exports.satukos = () => {
	return`*Ative habilite, desative desabilite*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NOME : ${pushname}\n┃│➸ NÚMERO : ${sender.split("@")[0]}\n┃│➸ DINHEIRO : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}