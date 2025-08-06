module.exports = {
config: {
name: "Alya",
version: "1.0",
author: "Tokodori_Frtiz",//remodified by cliff
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "auto 🪐",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "Alya") {
return message.reply({
body: `
  𝐎𝐰𝐧𝐞𝐫 : 𝙰𝚛𝚒𝚓𝚒𝚝ᯓ★

 𝐣𝐮𝐬𝐭 𝐬𝐚𝐲 𝐛𝐨𝐭/𝐛𝐛𝐲 𝐟𝐨𝐫 𝐭𝐚𝐥𝐤 𝐭𝐨 A L Y A-B O T

 𝐞𝐧𝐣𝐨𝐲 𝐚𝐧𝐝 𝐡𝐚𝐯𝐞 𝐚 𝐟𝐮𝐧 𝐰𝐢𝐭𝐡 𝐦𝐲 𝐛𝐨𝐭
 | (• ◡•)|ᯓ★ 


\n\n\n  `,
attachment: await global.utils.getStreamFromURL("https://files.catbox.moe/u2fgg9.jpg")
});
}
}
}
