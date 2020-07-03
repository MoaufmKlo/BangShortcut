module.exports = {message: function(discord, client, msg, args, cmd) {

    if(cmd == "!help") {
        msg.channel.send(new discord.MessageEmbed()
            .setTitle("BangShortcut")
            .addField("What are bangs?", "Bangs are shortcuts that quickly take you to search results on websites. For example, if you want to search on a site like Wikipedia or Amazon insantly, bangs take you there fastest. Saying `!w Discord` would simply take you to Discord's Wikipedia page.", true)
            .addField("Where can I find them?", "Generally, bangs match the name of the website you are searching for. If you can't find it, try searching it in the [list](https://duckduckgo.com/bang). If it doesn't exist, [suggest](https://duckduckgo.com/newbang) it. Alernatively, simply use `!bang <website>`.", true)
            .addField("Who made this?", "The author of the bot is <@348853688179359746>, although the bangs are provided by [DuckDuckGo](https://duckduckgo.com), a search engine that doesn't track you.", true)
            .addField("Where can I get support?", "You can either contact the author via DMs or join the [support server](https://discord.gg/Nd3TsDU).", true));
    }

}};