function _0x330b(){const _0x130cac=['5082882wwFpEx','messages','video/mp4','error','text','pushName','258879110928','855602anLyNi','util','react','inbox','pino','MODE','express','./plugins/','message','macOS','Firefox','forEach','startsWith','alias','shift','axios','Connecting\x20DARK\x20SHADOW\x20MD\x20BOT\x20🧬...','find','./command','remoteJid','videoMessage','contextInfo','/auth_info_baileys/creds.json','video','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','./config','join','qrcode-terminal','85508LfcvBx','connection.update','close','env','Sin\x20Nombre','https://telegra.ph/file/1ece2e0281513c05d20ee.jpg','imageMessage','user','log','head','function','key','headers','caption','megajs','image','reactionMessage','10512zzBOjq','content-type','26gqRCNx','Plugins\x20installed\x20successful\x20✅','6211992WxipTc','gif','/auth_info_baileys/','fromURL','extendedTextMessage','PORT','Message','@g.us','groups','@s.whatsapp.net','.js','pattern','download','sticker','[PLUGIN\x20ERROR]\x20','94160NmSSvn','photo','sendMessage','listen','commands','hey,\x20dark-shadow\x20started✅','slice','stringify','300rZnvMP','participants','ephemeralMessage','45NRZqig','toLowerCase','split','SESSION_ID','application/pdf','readdirSync','open','silent','type','773454gALdCt','Bot\x20connected\x20to\x20whatsapp\x20✅','stickerMessage','5PUBBkh','send','path','fromMe','loggedOut','includes','messages.upsert','true','AUTO_READ_STATUS','length','catch','groupMetadata','trim','endsWith','./lib/msg'];_0x330b=function(){return _0x130cac;};return _0x330b();}const _0x4ae5f5=_0x7afe;(function(_0x35f47c,_0x4c67a5){const _0x1060b5=_0x7afe,_0xa3fd6e=_0x35f47c();while(!![]){try{const _0x414d10=parseInt(_0x1060b5(0x155))/0x1*(-parseInt(_0x1060b5(0xfb))/0x2)+-parseInt(_0x1060b5(0x117))/0x3*(-parseInt(_0x1060b5(0x10c))/0x4)+parseInt(_0x1060b5(0x123))/0x5*(-parseInt(_0x1060b5(0x120))/0x6)+parseInt(_0x1060b5(0x132))/0x7+parseInt(_0x1060b5(0xfd))/0x8+parseInt(_0x1060b5(0xf9))/0x9*(parseInt(_0x1060b5(0x114))/0xa)+-parseInt(_0x1060b5(0x139))/0xb;if(_0x414d10===_0x4c67a5)break;else _0xa3fd6e['push'](_0xa3fd6e['shift']());}catch(_0x1306a4){_0xa3fd6e['push'](_0xa3fd6e['shift']());}}}(_0x330b,0x8bc36));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require('@whiskeysockets/baileys'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('./lib/functions'),fs=require('fs'),P=require(_0x4ae5f5(0x13d)),config=require(_0x4ae5f5(0x152)),qrcode=require(_0x4ae5f5(0x154)),util=require(_0x4ae5f5(0x13a)),{sms,downloadMediaMessage}=require(_0x4ae5f5(0x131)),axios=require(_0x4ae5f5(0x148)),{File}=require(_0x4ae5f5(0xf6)),prefix='.',ownerNumber=[_0x4ae5f5(0x138)];if(!fs['existsSync'](__dirname+_0x4ae5f5(0x14f))){if(!config['SESSION_ID'])return console[_0x4ae5f5(0x15d)](_0x4ae5f5(0x151));const sessdata=config[_0x4ae5f5(0x11a)],filer=File[_0x4ae5f5(0x100)]('https://mega.nz/file/'+sessdata);filer[_0x4ae5f5(0x109)]((_0x4e6d95,_0x10a838)=>{const _0x4b3df0=_0x4ae5f5;if(_0x4e6d95)throw _0x4e6d95;fs['writeFile'](__dirname+_0x4b3df0(0x14f),_0x10a838,()=>{const _0x1313d7=_0x4b3df0;console[_0x1313d7(0x15d)]('Session\x20downloaded\x20✅');});});}const express=require(_0x4ae5f5(0x13f)),app=express(),port=process[_0x4ae5f5(0x158)][_0x4ae5f5(0x102)]||0x1f40;function _0x7afe(_0x224bb2,_0x4de81d){const _0x330b14=_0x330b();return _0x7afe=function(_0x7afec,_0x176dbf){_0x7afec=_0x7afec-0xf6;let _0x505a11=_0x330b14[_0x7afec];return _0x505a11;},_0x7afe(_0x224bb2,_0x4de81d);}async function connectToWA(){const _0x2c5e65=_0x4ae5f5;console[_0x2c5e65(0x15d)](_0x2c5e65(0x149));const {state:_0x51d08a,saveCreds:_0x188e90}=await useMultiFileAuthState(__dirname+_0x2c5e65(0xff));var {version:_0x4586d3}=await fetchLatestBaileysVersion();const _0x44e328=makeWASocket({'logger':P({'level':_0x2c5e65(0x11e)}),'printQRInTerminal':![],'browser':Browsers[_0x2c5e65(0x142)](_0x2c5e65(0x143)),'syncFullHistory':!![],'auth':_0x51d08a,'version':_0x4586d3});_0x44e328['ev']['on'](_0x2c5e65(0x156),_0x1c9414=>{const _0x15059b=_0x2c5e65,{connection:_0x3f0e91,lastDisconnect:_0x4cd5ee}=_0x1c9414;if(_0x3f0e91===_0x15059b(0x157))_0x4cd5ee['error']['output']['statusCode']!==DisconnectReason[_0x15059b(0x127)]&&connectToWA();else{if(_0x3f0e91===_0x15059b(0x11d)){console[_0x15059b(0x15d)]('🧬\x20Installing');const _0x34225e=require(_0x15059b(0x125));fs[_0x15059b(0x11c)](_0x15059b(0x140))[_0x15059b(0x144)](_0x428e39=>{const _0x583f94=_0x15059b;_0x34225e['extname'](_0x428e39)[_0x583f94(0x118)]()==_0x583f94(0x107)&&require(_0x583f94(0x140)+_0x428e39);}),console[_0x15059b(0x15d)](_0x15059b(0xfc)),console[_0x15059b(0x15d)](_0x15059b(0x121));let _0x4bd643='*SUCCESSFUL\x20CONNECTED\x20DARK\x20SHADOW-MD✅*\x0a\x0aThis\x20is\x20Your\x20Log\x20Number\x20and\x20This\x20Message\x20is\x20Come\x20After\x20Successfully\x20Conneceted\x20Bot\x0a\x0a*JOIN\x20SUPPORT\x20CHANNEL*\x20:\x20https://whatsapp.com/channel/0029VacTVYIGOj9kr0GJzR1r\x0a\x0a*🧑‍💻\x20𝗙𝗥𝗢𝗠\x20𝗠𝗥\x20𝗗𝗔𝗥𝗞\x20𝗦𝗛𝗔𝗗𝗢𝗪\x20:Happy\x20New\x20Year\x20For\x20You\x20Dark\x20Shadow\x20Bot\x20Family\x20Member💗🎉✨️\x0a\x0a©\x20D\x20A\x20R\x20K\x20-\x20S\x20H\x20A\x20D\x20O\x20W';_0x44e328['sendMessage'](ownerNumber+_0x15059b(0x106),{'image':{'url':_0x15059b(0x15a)},'caption':_0x4bd643});}}}),_0x44e328['ev']['on']('creds.update',_0x188e90),_0x44e328['ev']['on'](_0x2c5e65(0x129),async _0x54d01d=>{const _0x98cdd2=_0x2c5e65;_0x54d01d=_0x54d01d[_0x98cdd2(0x133)][0x0];if(!_0x54d01d['message'])return;_0x54d01d[_0x98cdd2(0x141)]=getContentType(_0x54d01d[_0x98cdd2(0x141)])==='ephemeralMessage'?_0x54d01d['message'][_0x98cdd2(0x116)][_0x98cdd2(0x141)]:_0x54d01d[_0x98cdd2(0x141)];_0x54d01d['key']&&_0x54d01d[_0x98cdd2(0x160)][_0x98cdd2(0x14c)]==='status@broadcast'&&config[_0x98cdd2(0x12b)]===_0x98cdd2(0x12a)&&await _0x44e328['readMessages']([_0x54d01d[_0x98cdd2(0x160)]]);const _0xfa9b41=sms(_0x44e328,_0x54d01d),_0x36b074=getContentType(_0x54d01d[_0x98cdd2(0x141)]),_0x2f98fd=JSON[_0x98cdd2(0x113)](_0x54d01d['message']),_0x204412=_0x54d01d[_0x98cdd2(0x160)]['remoteJid'],_0x4b809a=_0x36b074==_0x98cdd2(0x101)&&_0x54d01d[_0x98cdd2(0x141)][_0x98cdd2(0x101)]['contextInfo']!=null?_0x54d01d[_0x98cdd2(0x141)][_0x98cdd2(0x101)][_0x98cdd2(0x14e)]['quotedMessage']||[]:[],_0x481350=_0x36b074==='conversation'?_0x54d01d[_0x98cdd2(0x141)]['conversation']:_0x36b074==='extendedTextMessage'?_0x54d01d[_0x98cdd2(0x141)]['extendedTextMessage'][_0x98cdd2(0x136)]:_0x36b074==_0x98cdd2(0x15b)&&_0x54d01d[_0x98cdd2(0x141)][_0x98cdd2(0x15b)]['caption']?_0x54d01d[_0x98cdd2(0x141)][_0x98cdd2(0x15b)][_0x98cdd2(0x162)]:_0x36b074==_0x98cdd2(0x14d)&&_0x54d01d[_0x98cdd2(0x141)][_0x98cdd2(0x14d)]['caption']?_0x54d01d['message'][_0x98cdd2(0x14d)][_0x98cdd2(0x162)]:'',_0x56b89a=_0x481350[_0x98cdd2(0x145)](prefix),_0x289765=_0x56b89a?_0x481350['slice'](prefix[_0x98cdd2(0x12c)])[_0x98cdd2(0x12f)]()[_0x98cdd2(0x119)]('\x20')[_0x98cdd2(0x147)]()['toLowerCase']():'',_0x44575b=_0x481350[_0x98cdd2(0x12f)]()['split'](/ +/)[_0x98cdd2(0x112)](0x1),_0x474c74=_0x44575b[_0x98cdd2(0x153)]('\x20'),_0x55e7cc=_0x204412[_0x98cdd2(0x130)](_0x98cdd2(0x104)),_0x89cb4d=_0x54d01d[_0x98cdd2(0x160)][_0x98cdd2(0x126)]?_0x44e328[_0x98cdd2(0x15c)]['id'][_0x98cdd2(0x119)](':')[0x0]+'@s.whatsapp.net'||_0x44e328['user']['id']:_0x54d01d[_0x98cdd2(0x160)]['participant']||_0x54d01d['key'][_0x98cdd2(0x14c)],_0x3229cb=_0x89cb4d[_0x98cdd2(0x119)]('@')[0x0],_0x1e7358=_0x44e328[_0x98cdd2(0x15c)]['id']['split'](':')[0x0],_0x450ff0=_0x54d01d[_0x98cdd2(0x137)]||_0x98cdd2(0x159),_0x5e2b3a=_0x1e7358[_0x98cdd2(0x128)](_0x3229cb),_0x47b1aa=ownerNumber[_0x98cdd2(0x128)](_0x3229cb)||_0x5e2b3a,_0x3febe0=await jidNormalizedUser(_0x44e328[_0x98cdd2(0x15c)]['id']),_0x5e136c=_0x55e7cc?await _0x44e328[_0x98cdd2(0x12e)](_0x204412)[_0x98cdd2(0x12d)](_0x22f293=>{}):'',_0x247e40=_0x55e7cc?_0x5e136c['subject']:'',_0x1e70a4=_0x55e7cc?await _0x5e136c[_0x98cdd2(0x115)]:'',_0x1829f8=_0x55e7cc?await getGroupAdmins(_0x1e70a4):'',_0x52908a=_0x55e7cc?_0x1829f8[_0x98cdd2(0x128)](_0x3febe0):![],_0xe4f549=_0x55e7cc?_0x1829f8[_0x98cdd2(0x128)](_0x89cb4d):![],_0x2395f3=_0xfa9b41[_0x98cdd2(0x141)][_0x98cdd2(0xf8)]?!![]:![],_0xf1800e=_0x18c53c=>{const _0x30f622=_0x98cdd2;_0x44e328[_0x30f622(0x10e)](_0x204412,{'text':_0x18c53c},{'quoted':_0x54d01d});};_0x44e328['sendFileUrl']=async(_0x498dfb,_0x599d3c,_0xcd2fb9,_0x184abc,_0x58b433={})=>{const _0x26ea24=_0x98cdd2;let _0x198b22='',_0x1fd681=await axios[_0x26ea24(0x15e)](_0x599d3c);_0x198b22=_0x1fd681[_0x26ea24(0x161)][_0x26ea24(0xfa)];if(_0x198b22['split']('/')[0x1]===_0x26ea24(0xfe))return _0x44e328['sendMessage'](_0x498dfb,{'video':await getBuffer(_0x599d3c),'caption':_0xcd2fb9,'gifPlayback':!![],..._0x58b433},{'quoted':_0x184abc,..._0x58b433});let _0x48ed15=_0x198b22[_0x26ea24(0x119)]('/')[0x0]+_0x26ea24(0x103);if(_0x198b22===_0x26ea24(0x11b))return _0x44e328[_0x26ea24(0x10e)](_0x498dfb,{'document':await getBuffer(_0x599d3c),'mimetype':_0x26ea24(0x11b),'caption':_0xcd2fb9,..._0x58b433},{'quoted':_0x184abc,..._0x58b433});if(_0x198b22[_0x26ea24(0x119)]('/')[0x0]===_0x26ea24(0xf7))return _0x44e328['sendMessage'](_0x498dfb,{'image':await getBuffer(_0x599d3c),'caption':_0xcd2fb9,..._0x58b433},{'quoted':_0x184abc,..._0x58b433});if(_0x198b22[_0x26ea24(0x119)]('/')[0x0]===_0x26ea24(0x150))return _0x44e328['sendMessage'](_0x498dfb,{'video':await getBuffer(_0x599d3c),'caption':_0xcd2fb9,'mimetype':_0x26ea24(0x134),..._0x58b433},{'quoted':_0x184abc,..._0x58b433});if(_0x198b22[_0x26ea24(0x119)]('/')[0x0]==='audio')return _0x44e328[_0x26ea24(0x10e)](_0x498dfb,{'audio':await getBuffer(_0x599d3c),'caption':_0xcd2fb9,'mimetype':'audio/mpeg',..._0x58b433},{'quoted':_0x184abc,..._0x58b433});};if(!_0x47b1aa&&config[_0x98cdd2(0x13e)]==='private')return;if(!_0x47b1aa&&_0x55e7cc&&config[_0x98cdd2(0x13e)]===_0x98cdd2(0x13c))return;if(!_0x47b1aa&&!_0x55e7cc&&config[_0x98cdd2(0x13e)]===_0x98cdd2(0x105))return;if(_0x3229cb['includes'](_0x98cdd2(0x138))){if(_0x2395f3)return;_0xfa9b41['react']('👩‍💻');}const _0x52be31=require(_0x98cdd2(0x14b)),_0x134a45=_0x56b89a?_0x481350[_0x98cdd2(0x112)](0x1)[_0x98cdd2(0x12f)]()[_0x98cdd2(0x119)]('\x20')[0x0][_0x98cdd2(0x118)]():![];if(_0x56b89a){const _0x56441f=_0x52be31[_0x98cdd2(0x110)][_0x98cdd2(0x14a)](_0x571734=>_0x571734[_0x98cdd2(0x108)]===_0x134a45)||_0x52be31[_0x98cdd2(0x110)][_0x98cdd2(0x14a)](_0x305f24=>_0x305f24['alias']&&_0x305f24[_0x98cdd2(0x146)][_0x98cdd2(0x128)](_0x134a45));if(_0x56441f){if(_0x56441f[_0x98cdd2(0x13b)])_0x44e328[_0x98cdd2(0x10e)](_0x204412,{'react':{'text':_0x56441f[_0x98cdd2(0x13b)],'key':_0x54d01d[_0x98cdd2(0x160)]}});try{_0x56441f[_0x98cdd2(0x15f)](_0x44e328,_0x54d01d,_0xfa9b41,{'from':_0x204412,'quoted':_0x4b809a,'body':_0x481350,'isCmd':_0x56b89a,'command':_0x289765,'args':_0x44575b,'q':_0x474c74,'isGroup':_0x55e7cc,'sender':_0x89cb4d,'senderNumber':_0x3229cb,'botNumber2':_0x3febe0,'botNumber':_0x1e7358,'pushname':_0x450ff0,'isMe':_0x5e2b3a,'isOwner':_0x47b1aa,'groupMetadata':_0x5e136c,'groupName':_0x247e40,'participants':_0x1e70a4,'groupAdmins':_0x1829f8,'isBotAdmins':_0x52908a,'isAdmins':_0xe4f549,'reply':_0xf1800e});}catch(_0x25b877){console[_0x98cdd2(0x135)](_0x98cdd2(0x10b)+_0x25b877);}}}_0x52be31[_0x98cdd2(0x110)]['map'](async _0x893d44=>{const _0x1638ed=_0x98cdd2;if(_0x481350&&_0x893d44['on']==='body')_0x893d44[_0x1638ed(0x15f)](_0x44e328,_0x54d01d,_0xfa9b41,{'from':_0x204412,'l':l,'quoted':_0x4b809a,'body':_0x481350,'isCmd':_0x56b89a,'command':_0x893d44,'args':_0x44575b,'q':_0x474c74,'isGroup':_0x55e7cc,'sender':_0x89cb4d,'senderNumber':_0x3229cb,'botNumber2':_0x3febe0,'botNumber':_0x1e7358,'pushname':_0x450ff0,'isMe':_0x5e2b3a,'isOwner':_0x47b1aa,'groupMetadata':_0x5e136c,'groupName':_0x247e40,'participants':_0x1e70a4,'groupAdmins':_0x1829f8,'isBotAdmins':_0x52908a,'isAdmins':_0xe4f549,'reply':_0xf1800e});else{if(_0x54d01d['q']&&_0x893d44['on']===_0x1638ed(0x136))_0x893d44[_0x1638ed(0x15f)](_0x44e328,_0x54d01d,_0xfa9b41,{'from':_0x204412,'l':l,'quoted':_0x4b809a,'body':_0x481350,'isCmd':_0x56b89a,'command':_0x893d44,'args':_0x44575b,'q':_0x474c74,'isGroup':_0x55e7cc,'sender':_0x89cb4d,'senderNumber':_0x3229cb,'botNumber2':_0x3febe0,'botNumber':_0x1e7358,'pushname':_0x450ff0,'isMe':_0x5e2b3a,'isOwner':_0x47b1aa,'groupMetadata':_0x5e136c,'groupName':_0x247e40,'participants':_0x1e70a4,'groupAdmins':_0x1829f8,'isBotAdmins':_0x52908a,'isAdmins':_0xe4f549,'reply':_0xf1800e});else{if((_0x893d44['on']===_0x1638ed(0xf7)||_0x893d44['on']===_0x1638ed(0x10d))&&_0x54d01d[_0x1638ed(0x11f)]==='imageMessage')_0x893d44[_0x1638ed(0x15f)](_0x44e328,_0x54d01d,_0xfa9b41,{'from':_0x204412,'l':l,'quoted':_0x4b809a,'body':_0x481350,'isCmd':_0x56b89a,'command':_0x893d44,'args':_0x44575b,'q':_0x474c74,'isGroup':_0x55e7cc,'sender':_0x89cb4d,'senderNumber':_0x3229cb,'botNumber2':_0x3febe0,'botNumber':_0x1e7358,'pushname':_0x450ff0,'isMe':_0x5e2b3a,'isOwner':_0x47b1aa,'groupMetadata':_0x5e136c,'groupName':_0x247e40,'participants':_0x1e70a4,'groupAdmins':_0x1829f8,'isBotAdmins':_0x52908a,'isAdmins':_0xe4f549,'reply':_0xf1800e});else _0x893d44['on']===_0x1638ed(0x10a)&&_0x54d01d['type']===_0x1638ed(0x122)&&_0x893d44['function'](_0x44e328,_0x54d01d,_0xfa9b41,{'from':_0x204412,'l':l,'quoted':_0x4b809a,'body':_0x481350,'isCmd':_0x56b89a,'command':_0x893d44,'args':_0x44575b,'q':_0x474c74,'isGroup':_0x55e7cc,'sender':_0x89cb4d,'senderNumber':_0x3229cb,'botNumber2':_0x3febe0,'botNumber':_0x1e7358,'pushname':_0x450ff0,'isMe':_0x5e2b3a,'isOwner':_0x47b1aa,'groupMetadata':_0x5e136c,'groupName':_0x247e40,'participants':_0x1e70a4,'groupAdmins':_0x1829f8,'isBotAdmins':_0x52908a,'isAdmins':_0xe4f549,'reply':_0xf1800e});}}});});}app['get']('/',(_0x1b9284,_0x1a9a49)=>{const _0x3c1514=_0x4ae5f5;_0x1a9a49[_0x3c1514(0x124)](_0x3c1514(0x111));}),app[_0x4ae5f5(0x10f)](port,()=>console[_0x4ae5f5(0x15d)]('Server\x20listening\x20on\x20port\x20http://localhost:'+port)),setTimeout(()=>{connectToWA();},0xfa0);
