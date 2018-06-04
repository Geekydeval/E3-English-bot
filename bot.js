const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('E3 is here, LETS GO!!!');
});

const prefix = "E3!";

//Mensajes del chat

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "hi")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Hi, I'm the official E3 bot",
      fields: [{
        name: "At your disposal",
        value:"I'm the E3 bot, I will make the event easier giving you some simple commands\nPlease, use **E3!help** for more information\n\nThank you and have a nice E3."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "What can I show you? take a look",
      fields: [{
        name: "This is what I can display on the channel:",
        value:"Here you have the commands:\n**E3!EA** - EA Conference\n**E3!microsoft** - Microsoft Conference\n**E3!bethesda** - Bethesda Conference\n**E3!devolver - Devolver Conference**\n**E3!pc** - PCGaming Conference\n**E3!ubisoft** - Ubisoft Conference\n**E3!sony** - Sony Conference\n**E3!nintendo** - Nintendo Conference\n**E3!square** - SE showcase"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "bingo")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Hi, I'm the official E3 bot",
      fields: [{
        name: "here you have a few bingo templates",
        value:"[EA bingo template](https://imgur.com/ifvF6E0)\n[Microsoft bingo template](https://imgur.com/ZzGQctt)\n[Bethesda bingo template](https://imgur.com/zpkZrQY)\n[Ubisoft bingo template](https://imgur.com/zJpxkwo)\n[Sony bingo template](https://imgur.com/oMyIWga)\n[Nintendo bingo template](https://imgur.com/sn43y6C)\n[Square Enix bingo template](https://imgur.com/7HKMfYG)"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

//Mensajes publicos con horarios y enlaces de cada conferencia

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "EA")) {
    message.channel.send({embed:{
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "EA conference ",
      "image": {
      "url": "https://i.imgur.com/ifvF6E0.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/ea)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When can I watch it?",
        value: "**June 9th, 11am PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Battlefield V\nEA Sports\nSims\nEA original indie\nAnthem\n...."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "microsoft")) {
    message.channel.send({embed:{
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Microsoft Briefing",
      "image": {
      "url": "https://i.imgur.com/ZzGQctt.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/xbox)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When can I watch it?",
        value: "**June 10th, 11am PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Forza Horizon 4\nOri and the will of the wisps\nPerfect Dark?\nBandai Namco?\nID@Xbox Indie games\nThird Party games\n... "
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "bethesda")) {
    message.channel.send({embed:{
        color: 16747008,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Bethesda Showcase",
      "image": {
      "url": "https://i.imgur.com/zpkZrQY.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/bethesda)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When can I watch it?",
        value: "**June 10th, 6:30pm PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Prey expansion\nDoom 2?\nStarfiel|new IP?\nFallout76\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "devolver")) {
    message.author.send({embed:{
        color: 16747008,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Devolver Digital Showcase",
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/devolverdigital)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When can I watch it?",
        value: "**June 10th, 8:00pm PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "same as last year but crazier"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "pc")) {
    message.channel.send({embed:{
        color: 10181046,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "PC Gaming Talk",
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/pcgamer)\n[stream YT](https://gaming.youtube.com/e3)"
      },
      {
        name: "When is the conference?",
        value: "**June 11th, 3pm PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Indie devs talking\n more Indie games\nAMD/NVIDIA\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ubisoft")) {
    message.channel.send({embed:{
        color: 1752220,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Ubisoft conference",
      "image": {
      "url": "https://i.imgur.com/zJpxkwo.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/ubisoft)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When is the conference?",
        value: "**June 11th, 1pm PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "The Division 2\nAssassins Creed:Odyssey\nWatch_Dogs 3?\nBG&E2?\nSplinter Cell comeback?\nNew IP?\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "sony")) {
    message.channel.send({embed:{
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Sony Conference",
      "image": {
      "url": "https://i.imgur.com/oMyIWga.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/playstation)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When is the conference?",
        value: "**June 11th, 6pm PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Ghost of Tsusima\nTLOU2\nDeath Stranding\nDMC5?\nShadows Die Twice?\nThird Party games\nPSVR games\nDreams\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "nintendo")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Nintendo Treehouse",
      "image": {
      "url": "https://i.imgur.com/sn43y6C.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/nintendo)\n[Youtube Stream here](https://gaming.youtube.com/e3)"
      },
      {
        name: "When is the conference?",
        value: "**June 12th, 9am PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Metroid Prime 4\nYoshi\nBayonetta 3?\nTW101 Switch port?\nPokemon?\nAnimal Crossing Switch?\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "square")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Square Enix Showcase",
      "image": {
      "url": "https://i.imgur.com/7HKMfYG.png",
      },
      fields: [{
        name: "Where can I watch it?",
        value: "[Twitch Stream here](https://www.twitch.tv/squareenix)\n[Youtube Stream here](https://www.youtube.com/squareenixpresents)"
      },
      {
        name: "When is the conference?",
        value: "**June 11th, 10am PDT** but [click right here to see your local time](https://pbs.twimg.com/media/DenUKCfU8AAsh9q.jpg)"
      },
      {
        name: "What can we expect?",
        value: "Nier Automata Xbox One port?\nShadow of the Tomb Raider\nLeft Alive\nKingdom hearts 3\nKH collections for more platforms?\nNier remaster?\n...."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Mr.E3"
    }
  }})
}
});
