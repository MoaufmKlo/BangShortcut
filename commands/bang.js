var got = require("got");

module.exports = {message: function(discord, client, msg, args, cmd) {

    if(cmd.startsWith("!")) {
        if(cmd == "!help") return;
        // Contact DuckDuckGo API
        got("https://api.duckduckgo.com/?q=" + msg.content + "&format=json&pretty=1&no_redirect=1").then(function(res) {
            var redirect = JSON.parse(res.body).Redirect;

            if(redirect != "") {
                msg.channel.send(new discord.MessageEmbed()
                    .setTitle("Bang!")
                    .setDescription(redirect));
            }
        });
    }

}};