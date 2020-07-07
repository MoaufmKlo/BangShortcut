// Libaries and variables
var discord = require("discord.js");
var client = new discord.Client();

var DBL = require("dblapi.js");
var dbl = new DBL(require("./config.json").dblToken, client);

// Events
client.on("ready", function() {

    console.log(client.user.name + " | ready");
    client.user.setActivity("bangs", {type: "LISTENING"});

});

dbl.on("posted", function() {
    
    console.log("Server count posted");
    
});

client.on("message", function(msg) {

    var args = msg.content.split(" ");
    var cmd = args.shift().toLowerCase();

    require("./commands/help.js").message(discord, client, msg, args, cmd);
    require("./commands/bang.js").message(discord, client, msg, args, cmd);

});

// Connections
client.login(require("./config.json").token);
