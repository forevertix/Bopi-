const botconfig = require("./botconfig.json")
const Discord = require('discord.js');
const colours = require("./colours")
const bot = new Discord.Client();
const prefix = botconfig.prefix;

bot.on("message", (message) => {
        if(message.content == "status")
                message.channel.sendMessage('Bot is working fine');
    // Sword Crown
    if(message.content == `${prefix}Sword Crown`) {
            let sEmbed = new Discord.RichEmbed()
            .setColor(colours.gold)
            .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
            .setTitle("Sword Crown of Eternal Shadows")
            .setDescription("Kinda sharp..")
            .setURL("https://www.bopimo.com/item/3822")
            .setThumbnail("https://storage.bopimo.com/thumbnails/3822.png")
            .addField("Value", "3,000", true)
            .addField("Copies", "25", true)
            .addField("Original Price", "56B$", true)
            .addField("Demand", "High", true)
            //bottm part
            .setTimestamp()
            .setFooter("Made by Administrator")
            message.channel.send({embed: sEmbed}); //sending the embed
    } 
    //The Necromancer
    if(message.content == `${prefix}The Necromancer`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
        .setTitle(message.content.slice(1))
        .setDescription("Taker of souls!")
        .setURL("https://www.bopimo.com/item/4893")
        .setThumbnail("https://storage.bopimo.com/thumbnails/4893.png")
        .addField("Value", "850", true)
        .addField("Copies", "50", true)
        .addField("Original Price", "25B$", true)
        .addField("Demand", "Hyped", true)
         //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
    //Plant Top Hat
    if(message.content == `${prefix}Plant Top Hat`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
        .setTitle(message.content.slice(1))
        .setDescription("All Natural!")
        .setURL("https://www.bopimo.com/item/4268")
        .setThumbnail("https://storage.bopimo.com/thumbnails/4268.png")
        .addField("Value", "400", true)
        .addField("Copies", "100", true)
        .addField("Original Price", "4B$", true)
        .addField("Demand", "Medium", true)
         //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
     //Evil Face
     if(message.content == `${prefix}Evil Face`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
        .setTitle(message.content.slice(1))
        .setDescription("He's evil!")
        .setURL("https://www.bopimo.com/item/4893")
        .setThumbnail("https://storage.bopimo.com/thumbnails/741.png")
        .addField("Value", "3000", true)
        .addField("Copies", "28", true)
        .addField("Original Price", "50B$", true)
        .addField("Demand", "High", true)
         //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
     //Rich Egg
     if(message.content == `${prefix}Rich Egg`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
        .setTitle("Insanely Rich Egg")
        .setDescription("Ouch! This definitely put a dent in my pocket!")
        .setURL("https://www.bopimo.com/item/3623")
        .setThumbnail("https://storage.bopimo.com/thumbnails/3623.png")
        .addField("Value", "2450", true)
        .addField("Copies", "26", true)
        .addField("Original Price", "500B$", true)
        .addField("Demand", "Medium", true)
        //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
     //Beaten Up
     if(message.content == `${prefix}Beaten Up`) {
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.gold)
        .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
         .setTitle("Beaten Up Top Hat")
         .setDescription("Ewwww..... Where did you find this thing? The trash?")
        .setURL("https://www.bopimo.com/item/1890")
        .setThumbnail("https://storage.bopimo.com/thumbnails/1890.png")
        .addField("Value", "1650", true)
        .addField("Copies", "27", true)
        .addField("Original Price", "125B$", true)
        .addField("Demand", "Medium", true)

         //bottm part
        .setTimestamp()
        .setFooter("Made by Administrator")
        message.channel.send({embed: sEmbed}); //sending the embed
} 
     //Galaxy Crown
     if(message.content == `${prefix}Galaxy Crown`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                 .setTitle(message.content.slice(1))
                 .setDescription("In a galaxy far, far away..")
                 .setURL("https://www.bopimo.com/item/2960")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/2960.png")
                 .addField("Value", "1650", true)
                 .addField("Copies", "32", true)
                 .addField("Original Price", "50B$", true)
                 //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
} 
     //Tradeable Sign
     if(message.content == `${prefix}Tradeable Sign`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                 .setTitle(message.content.slice(1))
                 .setDescription("New feature!")
                 .setURL("https://www.bopimo.com/item/2742")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/2742.png")
                 .addField("Value", "150", true)
                 .addField("Copies", "100", true)
                 .addField("Original Price", "4B$", true)
                 .addField("Demand", "Medium", true)

                 //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed 
}
     //Simples Cake
     if(message.content == `${prefix}Simples Cake`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                 .setTitle("Simple's Birthday Cake")
                 .setDescription("Happy 15th Birthday to Simples, the founder of bopimo!")
                 .setURL("https://www.bopimo.com/item/140")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/140.png")
                 .addField("Value", "300", true)
                 .addField("Copies", "143", true)
                 .addField("Original Price", "Free", true)
                 .addField("Demand", "Low", true)
                 //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
     //Pumpkin Top Hat
        if(message.content == `${prefix}Pumpkin Top Hat`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle(message.content.slice(1))
                .setDescription("This item came from the Halloween Gift of Spook!")
                 .setURL("https://www.bopimo.com/item/518")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/518.png")
                 .addField("Value", "800", true)
                 .addField("Copies", "126", true)
                 .addField("Original Price", "Gift Item", true)
                 .addField("Demand", "Medium", true)
                 //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
     //Purple Evil
        if(message.content == `${prefix}Purple Evil Face`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle(message.content.slice(1))
                .setDescription("So evil he turned purple!")
                 .setURL("https://www.bopimo.com/item/1674")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/1674.png")
                 .addField("Value", "800", true)
                 .addField("Copies", "88", true)
                 .addField("Original Price", "15", true)
                 .addField("Demand", "High", true)
                 //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
     //Siren
        if(message.content == `${prefix}Siren`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle(message.content.slice(1))
                .setDescription("You're in for it now")
                 .setURL("https://www.bopimo.com/item/606")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/606.png")
                 .addField("Value", "300", true)
                 .addField("Copies", "88", true)
                 .addField("Original Price", "5", true)
                 .addField("Demand", "Low", true)
                 //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
     //Isaiah's Birthday Cake
        if(message.content == `${prefix}Isaiah Cake`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Isaiah's Birthday Cake")
                .setDescription("Happy 16th birthday to Isaiah, the owner of bopimo, CEO, and main website dev!")
                .setURL("https://www.bopimo.com/item/3914")
                .setThumbnail("https://storage.bopimo.com/thumbnails/3914.png")
                .addField("Value", "50", true)
                .addField("Copies", "502", true)
                .addField("Original Price", "0", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
     //Isaiah's Party Hat
        if(message.content == `${prefix}Isaiah Hat`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Isaiah's Birthday Hat")
                .setDescription("Happy 16th birthday to Isaiah, bopimo's CEO/Owner!")
                .setURL("https://www.bopimo.com/item/3913")
                .setThumbnail("https://storage.bopimo.com/thumbnails/3913.png")
                .addField("Value", "75", true)
                .addField("Copies", "485", true)
                .addField("Original Price", "0", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
     //Pi Day Sign
        if(message.content == `${prefix}Pi`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Pi Day Sign")
                .setDescription("Happy Pi Day!")
                .setURL("https://www.bopimo.com/item/3281")
                .setThumbnail("https://storage.bopimo.com/thumbnails/3281.png")
                .addField("Value", "75", true)
                .addField("Copies", "314", true)
                .addField("Original Price", "1", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Stephen's Party Hat
        if(message.content == `${prefix}Stephen Hat`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Stephen's Party Hat")
                .setDescription("Happy 16th birthday to Stephen, one of the bopimo moderators and staff!")
                .setURL("https://www.bopimo.com/item/3192")
                .setThumbnail("https://storage.bopimo.com/thumbnails/3192.png")
                .addField("Value", "100", true)
                .addField("Copies", "391", true)
                .addField("Original Price", "0", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
         //Sword of Love
         if(message.content == `${prefix}Love Sword`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Sword of Love")
                .setDescription("This item came out of the Lovely Gift of Feelings! https://www.bopimo.com/item/2209")
                .setURL("https://www.bopimo.com/item/2639")
                .setThumbnail("https://storage.bopimo.com/thumbnails/2639.png")
                .addField("Value", "275", true)
                .addField("Copies", "313", true)
                .addField("Original Price", "Gift Item", true)
                .addField("Demand", "Medium", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
        //Groundhogs Cap
        if(message.content == `${prefix}Groundhogs`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Groundhogs Cap")
                .setDescription("Hopefully he doesn't see his shadow!") 
                .setURL("https://www.bopimo.com/item/2295")
                .setThumbnail("https://storage.bopimo.com/thumbnails/2295.png")
                .addField("Value", "125", true)
                .addField("Copies", "177", true)
                .addField("Original Price", "1", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Dark Roman Helmet
        if(message.content == `${prefix}Dark Roman`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Dark Roman Helmet")
                .setDescription("What a nice shade of purple!") 
                .setURL("https://www.bopimo.com/item/2139")
                .setThumbnail("https://storage.bopimo.com/thumbnails/2139.png")
                .addField("Value", "1450", true)
                .addField("Copies", "32", true)
                .addField("Original Price", "30", true)
                .addField("Demand", "High", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Sorry Sign
        if(message.content == `${prefix}Sorry Sign`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Sorry 12/30/2018 Sign")
                .setDescription("This sign was made as a small sorry about the site rollback. More information can be found here: https://www.bopimo.com/forum/t/2084") 
                 .setURL("https://www.bopimo.com/item/1526")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/1526.png")
                 .addField("Value", "150", true)
                 .addField("Copies", "235", true)
                 .addField("Original Price", "0", true)
                 .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Green 2019 New Years Top Hat
          if(message.content == `${prefix}Green Top Hat`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Green 2019 New Years Top Hat")
                .setDescription("Celebrate this New Years in style!") 
                .setURL("https://www.bopimo.com/item/1523")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1523.png")
                .addField("Value", "275", true)
                .addField("Copies", "226", true)
                .addField("Original Price", "5", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Purple 2019 New Years Top Hat
        if(message.content == `${prefix}Purple Top Hat`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Purple 2019 New Years Top Hat")
                .setDescription("Celebrate this New Years in style!") 
                .setURL("https://www.bopimo.com/item/1522")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1522.png")
                .addField("Value", "400", true)
                .addField("Copies", "97", true)
                .addField("Original Price", "5", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Gold 2019 New Years Party Hat
        if(message.content == `${prefix}Gold Party Hat`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Gold 2019 New Years Party Hat")
                .setDescription("Sparkle for New Years!") 
                .setURL("https://www.bopimo.com/item/1519")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1519.png")
                .addField("Value", "400", true)
                .addField("Copies", "91", true)
                .addField("Original Price", "4", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Ghost Sword
        if(message.content == `${prefix}Ghost Sword`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Ghost Sword")
                .setDescription("This item came from the Ghostly Gift of Sound! https://www.bopimo.com/item/381%22") 
                .setURL("https://www.bopimo.com/item/517")
                .setThumbnail("https://storage.bopimo.com/thumbnails/517.png")
                .addField("Value", "3000", true)
                .addField("Copies", "39", true)
                .addField("Original Price", "Gift Item", true)
                .addField("Demand", "High", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
}
        //Silver Crown
        if(message.content == `${prefix}Silver Crown`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Silver Crown")
                .setDescription("So elegant, this item came out of the Silver Gift of Christmas Eve! https://www.bopimo.com/item/1302") 
                .setURL("https://www.bopimo.com/item/1349")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1349.png")
                .addField("Value", "650", true)
                .addField("Copies", "128", true)
                .addField("Original Price", "Gift Item", true)
                .addField("Demand", "Medium", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
        //Orange 2019 New Years Glasses
        if(message.content == `${prefix}Orange Glasses`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Orange 2019 New Years Glasses")
                .setDescription("They don't even fit right!") 
                 .setURL("https://www.bopimo.com/item/1515")
                 .setThumbnail("https://storage.bopimo.com/thumbnails/1515.png")
                 .addField("Value", "275", true)
                 .addField("Copies", "182", true)
                 .addField("Original Price", "0", true)
                 .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
         //Blue Firework
         if(message.content == `${prefix}Blue Firework`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Blue 2019 New Years Firework")
                .setDescription("Light it up into the sky for a colorful explosion!") 
                .setURL("https://www.bopimo.com/item/1518")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1518.png")
                .addField("Value", "400", true)
                .addField("Copies", "81", true)
                .addField("Original Price", "5", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
        //Blue 2019 New Years Face
        if(message.content == `${prefix}Blue Face`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.gold)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Blue 2019 New Years Face")
                .setDescription("I can see sparkles!") 
                .setURL("https://www.bopimo.com/item/1514")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1514.png")
                .addField("Value", "400", true)
                .addField("Copies", "186", true)
                .addField("Original Price", "4", true)
                .addField("Demand", "Low", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
        //Witch Hat
        if(message.content == `${prefix}Witch`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.black)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Witch Hat")
                .setDescription("Now all you need is a broomstick!") 
                .setURL("https://www.bopimo.com/item/136")
                .setThumbnail("https://storage.bopimo.com/thumbnails/136.png")
                .addField("Original Price", "7", true)
                .addField("Copies", "75", true)
                .addField("Date Offsale", "02/18/2019", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
         //Epic Face
         if(message.content == `${prefix}Epic`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.black)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Epic Face")
                .setDescription("Ok now THIS is epic.") 
                .setURL("https://www.bopimo.com/item/1468")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1468.png")
                .addField("Original Price", "Gift Item", true)
                .addField("Copies", "106", true)
                .addField("Date Offsale", "02/24/2019", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
        //Yellow Evil Face
        if(message.content == `${prefix}Yellow Evil`) {
                let sEmbed = new Discord.RichEmbed()
                .setColor(colours.black)
                .setAuthor('Bopi+', 'https://media.discordapp.net/attachments/539933821714563072/592767534655209475/icon.png', "https://www.discord.gg/ut2nhhr")
                .setTitle("Yellow Evil Face")
                .setDescription("He's evil...but yellow!") 
                .setURL("https://www.bopimo.com/item/1466")
                .setThumbnail("https://storage.bopimo.com/thumbnails/1466.png")
                .addField("Original Price", "Gift Item", true)
                .addField("Copies", "105", true)
                .addField("Date Offsale", "02/24/2019", true)
                //bottm part
                .setTimestamp()
                .setFooter("Made by Administrator")
                message.channel.send({embed: sEmbed}); //sending the embed
        }
});

bot.login(process.env.token);
