const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LaAkHJSL#2wfWW7BeXWzDtBHcZ_lNcvwcB1i8NFYfvBs69BRPGFA",
MONGODB: process.env.MONGODB || "mongodb://mongo:MfPJLADhRWNHvxuOORrlmfJHboedaADB@junction.proxy.rlwy.net:57828",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/1ece2e0281513c05d20ee.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🎉 Hi ɱʀㅤʝɑyk Is Online Now 💻\n*💻 Owner* - DARK-SHADOW-MD\n\n*💻 Owner Number* -258843617938",
SUDO_NB: process.env.SUDO_NB || "258879110928",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true"
};
