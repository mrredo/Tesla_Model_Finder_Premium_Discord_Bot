(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const moment = require('moment');
    const {
        DB
    } = require("quickmongo");
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require('discord.js')
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });
    const {
        Player,
        QueueRepeatMode
    } = require("discord-player")
    s4d.player = new Player(s4d.client)
    var arguments2, command, volume, onoff;


    s4d.player.on("trackStart", (queue, track) => {
        let embed = new Discord.MessageEmbed()
        embed.setTitle((['now playing ', track.title, '\n', 'author: ', track.author, '\n', 'url: ', track.url, '\n', 'views: ', track.views, '\n', 'duration: ', track.duration].join('')));
        embed.setImage((track.thumbnail));
        (queue.metadata.channel).send({
            embeds: [embed]
        });


    })

    s4d.player.on("queueEnd", (queue) => {
        (queue.metadata.channel).send({
            content: String('queue finished')
        });

    })

    s4d.player.on("trackAdd", (queue, track) => {
        (queue.metadata.channel).send({
            content: String((['music ', track.title, 'added to queue'].join('')))
        });

    })

    await s4d.client.login('Your bot token').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        arguments2 = (s4dmessage.content).split(' ');
        command = arguments2.splice(0, 1)[0];
        if (command == '!play') {
            if ((s4dmessage.member.voice.channelId) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.guild.me.voice.channelId) != null && (s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            const queue = s4d.player.createQueue((s4dmessage.guild), {
                metadata: {
                    channel: (s4dmessage.channel)
                }
            });
            if (!(queue.connection)) {
                await queue.connect((s4dmessage.member.voice.channel));
            }
            queue.play((await s4d.player.search((arguments2.join(' ')), {
                requestedBy: (s4dmessage.member)
            }).then(x => x.tracks[0])));
        }
        if (command == '!pause') {
            if ((s4dmessage.member.voice.channel) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                s4dmessage.channel.send({
                    content: String('there is no music playing!')
                });
                return
            }
            (s4d.player.getQueue((s4dmessage.guild).id)).setPaused(true)
            s4dmessage.channel.send({
                content: String('paused music')
            });
        }
        if (command == '!resume') {
            if ((s4dmessage.member.voice.channel) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                s4dmessage.channel.send({
                    content: String('there is no music playing!')
                });
                return
            }
            (s4d.player.getQueue((s4dmessage.guild).id)).setPaused(false)
            s4dmessage.channel.send({
                content: String('resumed the music')
            });
        }
        if (command == '!stop') {
            if ((s4dmessage.member.voice.channel) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                s4dmessage.channel.send({
                    content: String('there is no music playing!')
                });
                return
            }
            (s4d.player.getQueue((s4dmessage.guild).id)).destroy()
            s4dmessage.channel.send({
                content: String('stoped music')
            });
        }
        if (command == '!volume') {
            volume = arguments2[0];
            if ((s4dmessage.member.voice.channel) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                s4dmessage.channel.send({
                    content: String('there is no music playing!')
                });
                return
            }
            if ((Number(volume)) < 0) {
                s4dmessage.channel.send({
                    content: String('the volume need to be more then 0!')
                });
                return
            }
            if ((Number(volume)) > 100) {
                s4dmessage.channel.send({
                    content: String('the volume need to be less then 100!')
                });
                return
            }
            (s4d.player.getQueue((s4dmessage.guild).id)).setVolume(volume)
            s4dmessage.channel.send({
                content: String(('the volume is now ' + String(volume)))
            });
        }
        if (command == '!skip') {
            if ((s4dmessage.member.voice.channel) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                s4dmessage.channel.send({
                    content: String('there is no music playing!')
                });
                return
            }
            (s4d.player.getQueue((s4dmessage.guild).id)).skip()
            s4dmessage.channel.send({
                content: String(('skipped music ' + String((s4d.player.getQueue((s4dmessage.guild).id)).current)))
            });
        }
        if (command == '!loop') {
            onoff = arguments2[0];
            if (onoff == 'on') {
                if ((s4dmessage.member.voice.channel) == null) {
                    s4dmessage.channel.send({
                        content: String('you are not in a voice channel!')
                    });
                    return
                }
                if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                    s4dmessage.channel.send({
                        content: String('you are not in my voice channel!')
                    });
                    return
                }
                if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                    s4dmessage.channel.send({
                        content: String('there is no music playing!')
                    });
                    return
                }
                (s4d.player.getQueue((s4dmessage.guild).id)).setRepeatMode(QueueRepeatMode.TRACK)
                s4dmessage.channel.send({
                    content: String('loop on')
                });
            } else if (onoff == 'off') {
                if ((s4dmessage.member.voice.channel) == null) {
                    s4dmessage.channel.send({
                        content: String('you are not in a voice channel!')
                    });
                    return
                }
                if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                    s4dmessage.channel.send({
                        content: String('you are not in my voice channel!')
                    });
                    return
                }
                if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                    s4dmessage.channel.send({
                        content: String('there is no music playing!')
                    });
                    return
                }
                (s4d.player.getQueue((s4dmessage.guild).id)).setRepeatMode(QueueRepeatMode.OFF)
                s4dmessage.channel.send({
                    content: String('loop off')
                });
            } else {
                s4dmessage.channel.send({
                    content: String('you need to send !loop on/off')
                });
            }
        }
        if (command == '!back') {
            if ((s4dmessage.member.voice.channel) == null) {
                s4dmessage.channel.send({
                    content: String('you are not in a voice channel!')
                });
                return
            }
            if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
                s4dmessage.channel.send({
                    content: String('you are not in my voice channel!')
                });
                return
            }
            if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
                s4dmessage.channel.send({
                    content: String('there is no music playing!')
                });
                return
            }
            (s4d.player.getQueue((s4dmessage.guild).id)).back()
            s4dmessage.channel.send({
                content: String('playing previous music')
            });
        }

    });

    return s4d;
})();