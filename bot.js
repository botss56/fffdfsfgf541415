const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

نقدم لك دعوة لسموك الراقيَ .
لنحظى بجمال حضورك وتواجد
•بتنـورونـا الجميع :wink:
•اي مشكله توآجهك ولا يهمك. عندك الاداره تفضل ونحل مشكلتك مع آي شخص بالسيرفر.:telephone_receiver:
•عندك فكره موضوع تفضل شآركنا فيه:jack_o_lantern::gift:
•واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
شرفنا يا عسل:wink: :kissing_heart:

[ https://discord.gg/BTsynpA ] 


 الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})




client.login(process.env.BOT_TOKEN);
