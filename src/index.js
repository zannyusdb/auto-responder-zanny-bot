const keepAlive = require(`./server`);
const { AoiClient , LoadCommands } = require("aoi.js");

//Main
const bot = new AoiClient({
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    intents: [
"MessageContent", 
"Guilds", 
"GuildMessages"
],
    events: [
"onMessage", 
"onInteractionCreate"
],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

//Misc
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./src/cmds/")//cmd handler

require('./vars.js')(bot); //vars handler

//HighLight


loader.setColors( loader.themes.default );

keepAlive();