import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['593961745744', 'Carlos', true],
  ['593961745744']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['593961745744', '593961745744']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Carlos┃ᴮᴼᵀ' 
global.author = '@Carlos' 

//--info 
global.botName = 'Senna'
global.fgig = 'Disponible Pronto' 
global.fgsc = 'https://github.com/Carlos/WASAAA' 
global.fgyt = 'Disponible Pronto'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'https://chat.whatsapp.com/Gl0eUl2rkyq4Z06QlxfBSH'
global.bgp = 'https://chat.whatsapp.com/JF7ohtA0Y6d8XwP9CoLqJ1'
global.bgp2 = 'https://chat.whatsapp.com/GiOJaLmlVdtBa5nqSfZ1uq'
global.bgp3 = 'https://chat.whatsapp.com/EFjJZhkYGEmBc8soSwhztk' 

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
