var discord = require("discord.js");
var client = new discord.Client();

client.on("ready", function() {

    console.log(client.user.name + " | ready");
    client.user.setActivity("bangs", {type: "LISTENING"});

});

client.on("message", function(msg) {

    var args = msg.content.split(" ");
    var cmd = args.shift().toLowerCase();

    require("./commands/help.js").message(discord, client, msg, args, cmd);
    require("./commands/bang.js").message(discord, client, msg, args, cmd);

});

client.login(require("./token.json").token);