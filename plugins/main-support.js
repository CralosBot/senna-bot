 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

▢ Grupo *NSFW* 🔞
${bgp3}

▢ 𝗦𝗿. 𝗡𝗘𝗧𝗙𝗥𝗘𝗘
https://chat.whatsapp.com/Gl0eUl2rkyq4Z06QlxfBSH

▢ 🇪🇨🖥️NETFREE PREMIUM EC-VPS🇪🇨
https://chat.whatsapp.com/EFjJZhkYGEmBc8soSwhztk

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Todos los Grupos
 https://instabio.cc/

▢ *Telegram*
• https://t.me/
 ▢ *PayPal*
• https://paypal.me/
▢ *YouTube*
• https://www.youtube.com/`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
