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

    function colourRgb(r, g, b) {
        r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
        g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
        b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
        r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
        g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
        b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
        return '#' + r + g + b;
    }


    await s4d.client.login(process.env.TOKEN).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('interactionCreate', async (interaction) => {
        let member = interaction.guild.members.cache.get(interaction.member.user.id)
        if ((interaction.commandName) == 'teslacommand') {
            if ((interaction.options.getString('interface')) == 'menus') {
                await interaction.reply({
                    content: 'Follow the Instructions to get started:',
                    ephemeral: false,
                    components: []
                });
                (interaction.channel).send({
                    content: String('Use the Select Menu'),
                    components: [(new MessageActionRow()
                        .addComponents(
                            new MessageSelectMenu()
                            .setCustomId('cWuFf-M2V}sj4VG-')
                            .setPlaceholder('Select a Option')
                            .setMaxValues(1)
                            .setMinValues(1)
                            .addOptions({
                                value: '}L6B=uX,Sb$g!85p',
                                label: 'Tesla Model',
                                emoji: '<:letter_s:879733517418897419>',
                                default: false,
                            }, {
                                value: 'A%dWJdU,3.uP$D,,',
                                label: 'Tesla Model',
                                emoji: '<:number_3:879733517506977862>',
                                default: false,
                            }, {
                                value: 'zv8dh8}jm?pjP+F>',
                                label: 'Tesla Model',
                                emoji: '<:letter_x:879733517490221066>',
                                default: false,
                            }, {
                                value: 'Y?yRxan!QyY-#m4n',
                                label: 'Tesla Model',
                                emoji: '<:letter_y:879733517012070411>',
                                default: false,
                            }, {
                                value: '-v-g?)§WD}z+Z!Z}',
                                label: 'Reload Menu(s)',
                                emoji: '<:symbol_reset:881139740185886751>',
                                default: false,
                            }, ))
                    )]
                }).then(m => {
                    let collector = m.createMessageComponentCollector({
                        filter: i => i.user.id === (interaction.member).id,
                        time: 60000
                    });
                    collector.on('collect', async i => {
                        if ((i.customId) == 'cWuFf-M2V}sj4VG-') {
                            if ((i.values[0]) == '}L6B=uX,Sb$g!85p') {
                                await i.update({
                                    embeds: [{
                                    title: '**__Tesla Model S__**',
                                    color: (colourRgb(100, 0, 0)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855825720565801/PSX_20210907_193931.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 3,2s Weight 2.069 kg Price 86.990€ Dimensions 4.970 mm L x 1.964 mm B x 1.445 mm H (Range 652km / 405mi) (Top Speed 250kph / 155mph) ', '\n', '\n', '__Plaid:__', '\n', 'Acceleration 2,1s Weight 2.162 kg Price 126.990€ Dimensions 4.970 mm L x 1.964 mm B x 1.445 mm H (Range 628km / 396mi) (Top Speed 322kph / 200mph)', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White or Beige Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Canceled (Not Available anymore) Trunk Volume: 793 Liters Seats: 5 CW value: 0.208 Cd Peak Charging Rate: DC=250KW / AC= 22KW'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                    }],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('cWuFf-M2V}sj4VG-')
                                            .setPlaceholder('Select a Option')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .addOptions({
                                                value: '}L6B=uX,Sb$g!85p',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_s:879733517418897419>',
                                                default: false,
                                            }, {
                                                value: 'A%dWJdU,3.uP$D,,',
                                                label: 'Tesla Model',
                                                emoji: '<:number_3:879733517506977862>',
                                                default: false,
                                            }, {
                                                value: 'zv8dh8}jm?pjP+F>',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_x:879733517490221066>',
                                                default: false,
                                            }, {
                                                value: 'Y?yRxan!QyY-#m4n',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_y:879733517012070411>',
                                                default: false,
                                            }, {
                                                value: '-v-g?)§WD}z+Z!Z}',
                                                label: 'Reload Menu(s)',
                                                emoji: '<:symbol_reset:881139740185886751>',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {

                                });
                            }
                            if ((i.values[0]) == 'A%dWJdU,3.uP$D,,') {
                                await i.update({
                                    embeds: [{
                                    title: '**__Tesla Model 3__**',
                                    color: (colourRgb(0, 0, 0)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855826093862932/PSX_20210907_193837.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Standard Range Plus:__', '\n', 'Acceleration 5,6s Weight 1.745 kg Price 39.990€ Dimensions 4.694 mm L x 1.849 mm W x 1.443 mm H (Range 448km / 262mi) (Top Speed 225kph / 140mph) ', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 4,4s Weight 1.844 kg Price 49.990€ Dimensions 4.694 mm L x 1.849 mm W x 1.443 mm H (Range 614km / 353mi) (Top Speed 233kph / 145mph) ', '\n', '\n', '__Performance:__', '\n', 'Acceleration 3,2s Weight 1.844 kg Price 54.990€ Dimensions 4.694 mm L x 1.849 mm W x 1.443 mm H (Range 567km / 315mi) (Top Speed 261kph / 162mph) ', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Canceled (Not Available anymore) Trunk Volume: 542 Liters Seats: 5'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                    }],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('cWuFf-M2V}sj4VG-')
                                            .setPlaceholder('Select a Option')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .addOptions({
                                                value: '}L6B=uX,Sb$g!85p',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_s:879733517418897419>',
                                                default: false,
                                            }, {
                                                value: 'A%dWJdU,3.uP$D,,',
                                                label: 'Tesla Model',
                                                emoji: '<:number_3:879733517506977862>',
                                                default: false,
                                            }, {
                                                value: 'zv8dh8}jm?pjP+F>',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_x:879733517490221066>',
                                                default: false,
                                            }, {
                                                value: 'Y?yRxan!QyY-#m4n',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_y:879733517012070411>',
                                                default: false,
                                            }, {
                                                value: '-v-g?)§WD}z+Z!Z}',
                                                label: 'Reload Menu(s)',
                                                emoji: '<:symbol_reset:881139740185886751>',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {

                                });
                            }
                            if ((i.values[0]) == 'zv8dh8}jm?pjP+F>') {
                                await i.update({
                                    embeds: [{
                                    title: '**__Tesla Model X__**',
                                    color: (colourRgb(100, 100, 100)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855826534236200/PSX_20210907_193723.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 3,9s Weight 2.352 kg Price 95.990€ Dimensions 5.052 mm L x 1.999 mm B x 1.684 mm H (Range 580km / 360mi) (Top Speed 250kph / 155mph) ', '\n', '\n', '__Plaid:__', '\n', 'Acceleration 2,6s Weight 2.455 kg Price 116.990€ Dimensions 4.970 mm L x 1.964 mm B x 1.445 mm H (Range 547km / 340mi) (Top Speed 262kph / 163mph)', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White or Beige Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Canceled (Not Available anymore) Seats: 5 or 6 or 7 CW value: 0.24 Cd Peak Charging Rate: DC=250KW / AC= 16,5KW'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                    }],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('cWuFf-M2V}sj4VG-')
                                            .setPlaceholder('Select a Option')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .addOptions({
                                                value: '}L6B=uX,Sb$g!85p',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_s:879733517418897419>',
                                                default: false,
                                            }, {
                                                value: 'A%dWJdU,3.uP$D,,',
                                                label: 'Tesla Model',
                                                emoji: '<:number_3:879733517506977862>',
                                                default: false,
                                            }, {
                                                value: 'zv8dh8}jm?pjP+F>',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_x:879733517490221066>',
                                                default: false,
                                            }, {
                                                value: 'Y?yRxan!QyY-#m4n',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_y:879733517012070411>',
                                                default: false,
                                            }, {
                                                value: '-v-g?)§WD}z+Z!Z}',
                                                label: 'Reload Menu(s)',
                                                emoji: '<:symbol_reset:881139740185886751>',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {

                                });
                            }
                            if ((i.values[0]) == 'Y?yRxan!QyY-#m4n') {
                                await i.update({
                                    embeds: [{
                                    title: '**__Tesla Model Y__**',
                                    color: (colourRgb(0, 0, 100)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855825426944033/PSX_20210907_194026.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 5,1s Weight 2.003 kg Price 58.620€ Dimensions 4.775 mm L x 1.850 mm B x 1.600 mm H (Range 505km / 326mi) (Top Speed 217kph / 135mph) ', '\n', '\n', '__Performance:__', '\n', 'Acceleration 3,7s Weight 2.003 kg Price 65.620€ Dimensions 4.775 mm L x 1.850 mm B x 1.600 mm H (Range 480km / 303mi) (Top Speed 241kph / 155mph) ', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Available for 1.350€ Seats: 5 or (7 coming soon) (there is a Image Link below to see how each configuration looks) Peak Charging Rate: DC=250KW / AC= 11KW'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                    }],
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('cWuFf-M2V}sj4VG-')
                                            .setPlaceholder('Select a Option')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .addOptions({
                                                value: '}L6B=uX,Sb$g!85p',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_s:879733517418897419>',
                                                default: false,
                                            }, {
                                                value: 'A%dWJdU,3.uP$D,,',
                                                label: 'Tesla Model',
                                                emoji: '<:number_3:879733517506977862>',
                                                default: false,
                                            }, {
                                                value: 'zv8dh8}jm?pjP+F>',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_x:879733517490221066>',
                                                default: false,
                                            }, {
                                                value: 'Y?yRxan!QyY-#m4n',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_y:879733517012070411>',
                                                default: false,
                                            }, {
                                                value: '-v-g?)§WD}z+Z!Z}',
                                                label: 'Reload Menu(s)',
                                                emoji: '<:symbol_reset:881139740185886751>',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {

                                });
                            }
                            if ((i.values[0]) == '-v-g?)§WD}z+Z!Z}') {
                                await i.update({
                                    content: String('Use the Select Menu'),
                                    components: [(new MessageActionRow()
                                        .addComponents(
                                            new MessageSelectMenu()
                                            .setCustomId('cWuFf-M2V}sj4VG-')
                                            .setPlaceholder('Select a Option')
                                            .setMaxValues(1)
                                            .setMinValues(1)
                                            .addOptions({
                                                value: '}L6B=uX,Sb$g!85p',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_s:879733517418897419>',
                                                default: false,
                                            }, {
                                                value: 'A%dWJdU,3.uP$D,,',
                                                label: 'Tesla Model',
                                                emoji: '<:number_3:879733517506977862>',
                                                default: false,
                                            }, {
                                                value: 'zv8dh8}jm?pjP+F>',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_x:879733517490221066>',
                                                default: false,
                                            }, {
                                                value: 'Y?yRxan!QyY-#m4n',
                                                label: 'Tesla Model',
                                                emoji: '<:letter_y:879733517012070411>',
                                                default: false,
                                            }, {
                                                value: '-v-g?)§WD}z+Z!Z}',
                                                label: 'Reload Menu(s)',
                                                emoji: '<:symbol_reset:881139740185886751>',
                                                default: false,
                                            }, ))
                                    )]
                                }).then(m => {

                                });
                            }
                        }

                    })

                });
            } else {}
            if ((interaction.options.getString('interface')) == 'buttons') {
                await interaction.reply({
                    content: 'Follow the Instructions to get started:',
                    ephemeral: false,
                    components: []
                });
                (interaction.channel).send({
                    content: String('Use the Button'),
                    components: [(new MessageActionRow()
                        .addComponents(new MessageButton()
                            .setCustomId('Re$~$3$vt_c§)5CN')
                            .setLabel('Tesla Model')
                            .setEmoji('<:letter_s:879733517418897419>')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('=SA2u&Ny{~jAN(9h')
                            .setLabel('Tesla Model')
                            .setEmoji('<:number_3:879733517506977862>')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('S@t5§s?~J8qs%_w@')
                            .setLabel('Tesla Model')
                            .setEmoji('<:letter_x:879733517490221066>')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('E-S,G.V9tm7%FCtr')
                            .setLabel('Tesla Model')
                            .setEmoji('<:letter_y:879733517012070411>')
                            .setStyle(('SECONDARY')),
                            new MessageButton()
                            .setCustomId('&zq,9UARWm)PZ%:_')
                            .setLabel('Reload Button(s)')
                            .setEmoji('<:symbol_reset:881139740185886751>')
                            .setStyle(('SECONDARY')),
                        ))]
                }).then(m => {
                    let collector = m.createMessageComponentCollector({
                        filter: i => i.user.id === (interaction.member).id,
                        time: 60000
                    });
                    collector.on('collect', async i => {
                        if ((i.customId) == 'Re$~$3$vt_c§)5CN') {
                            await i.update({
                                embeds: [{
                                    title: '**__Tesla Model S__**',
                                    color: (colourRgb(100, 0, 0)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855825720565801/PSX_20210907_193931.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 3,2s Weight 2.069 kg Price 86.990€ Dimensions 4.970 mm L x 1.964 mm B x 1.445 mm H (Range 652km / 405mi) (Top Speed 250kph / 155mph) ', '\n', '\n', '__Plaid:__', '\n', 'Acceleration 2,1s Weight 2.162 kg Price 126.990€ Dimensions 4.970 mm L x 1.964 mm B x 1.445 mm H (Range 628km / 396mi) (Top Speed 322kph / 200mph)', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White or Beige Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Canceled (Not Available anymore) Trunk Volume: 793 Liters Seats: 5 CW value: 0.208 Cd Peak Charging Rate: DC=250KW / AC= 22KW'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                }],
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('Re$~$3$vt_c§)5CN')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_s:879733517418897419>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('=SA2u&Ny{~jAN(9h')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:number_3:879733517506977862>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('S@t5§s?~J8qs%_w@')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_x:879733517490221066>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('E-S,G.V9tm7%FCtr')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_y:879733517012070411>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('&zq,9UARWm)PZ%:_')
                                        .setLabel('Reload Button(s)')
                                        .setEmoji('<:symbol_reset:881139740185886751>')
                                        .setStyle(('SECONDARY')),
                                    ))]
                            }).then(m => {

                            });
                        }
                        if ((i.customId) == '=SA2u&Ny{~jAN(9h') {
                            await i.update({
                                embeds: [{
                                    title: '**__Tesla Model 3__**',
                                    color: (colourRgb(0, 0, 0)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855826093862932/PSX_20210907_193837.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Standard Range Plus:__', '\n', 'Acceleration 5,6s Weight 1.745 kg Price 39.990€ Dimensions 4.694 mm L x 1.849 mm W x 1.443 mm H (Range 448km / 262mi) (Top Speed 225kph / 140mph) ', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 4,4s Weight 1.844 kg Price 49.990€ Dimensions 4.694 mm L x 1.849 mm W x 1.443 mm H (Range 614km / 353mi) (Top Speed 233kph / 145mph) ', '\n', '\n', '__Performance:__', '\n', 'Acceleration 3,2s Weight 1.844 kg Price 54.990€ Dimensions 4.694 mm L x 1.849 mm W x 1.443 mm H (Range 567km / 315mi) (Top Speed 261kph / 162mph) ', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Canceled (Not Available anymore) Trunk Volume: 542 Liters Seats: 5'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                }],
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('Re$~$3$vt_c§)5CN')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_s:879733517418897419>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('=SA2u&Ny{~jAN(9h')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:number_3:879733517506977862>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('S@t5§s?~J8qs%_w@')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_x:879733517490221066>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('E-S,G.V9tm7%FCtr')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_y:879733517012070411>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('&zq,9UARWm)PZ%:_')
                                        .setLabel('Reload Button(s)')
                                        .setEmoji('<:symbol_reset:881139740185886751>')
                                        .setStyle(('SECONDARY')),
                                    ))]
                            }).then(m => {

                            });
                        }
                        if ((i.customId) == 'S@t5§s?~J8qs%_w@') {
                            await i.update({
                                embeds: [{
                                    title: '**__Tesla Model X__**',
                                    color: (colourRgb(100, 100, 100)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855826534236200/PSX_20210907_193723.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 3,9s Weight 2.352 kg Price 95.990€ Dimensions 5.052 mm L x 1.999 mm B x 1.684 mm H (Range 580km / 360mi) (Top Speed 250kph / 155mph) ', '\n', '\n', '__Plaid:__', '\n', 'Acceleration 2,6s Weight 2.455 kg Price 116.990€ Dimensions 4.970 mm L x 1.964 mm B x 1.445 mm H (Range 547km / 340mi) (Top Speed 262kph / 163mph)', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White or Beige Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Canceled (Not Available anymore) Seats: 5 or 6 or 7 CW value: 0.24 Cd Peak Charging Rate: DC=250KW / AC= 16,5KW'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                }],
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('Re$~$3$vt_c§)5CN')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_s:879733517418897419>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('=SA2u&Ny{~jAN(9h')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:number_3:879733517506977862>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('S@t5§s?~J8qs%_w@')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_x:879733517490221066>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('E-S,G.V9tm7%FCtr')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_y:879733517012070411>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('&zq,9UARWm)PZ%:_')
                                        .setLabel('Reload Button(s)')
                                        .setEmoji('<:symbol_reset:881139740185886751>')
                                        .setStyle(('SECONDARY')),
                                    ))]
                            }).then(m => {

                            });
                        }
                        if ((i.customId) == 'E-S,G.V9tm7%FCtr') {
                            await i.update({
                                embeds: [{
                                    title: '**__Tesla Model Y__**',
                                    color: (colourRgb(0, 0, 100)),
                                    image: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/884855825426944033/PSX_20210907_194026.jpg'
                                    },
                                    description: (['**Specifications:**', '\n', '\n', '__Long Range:__', '\n', 'Acceleration 5,1s Weight 2.003 kg Price 58.620€ Dimensions 4.775 mm L x 1.850 mm B x 1.600 mm H (Range 505km / 326mi) (Top Speed 217kph / 135mph) ', '\n', '\n', '__Performance:__', '\n', 'Acceleration 3,7s Weight 2.003 kg Price 65.620€ Dimensions 4.775 mm L x 1.850 mm B x 1.600 mm H (Range 480km / 303mi) (Top Speed 241kph / 155mph) ', '\n', '\n', '__General Stuff:__', '\n', 'Outside Color: White,Black,Gray,Blue,Red Inside Color: Black or White Autopilot: Full Self Driving or Enhanced Autopilot or Standard Trailer hitch: Available for 1.350€ Seats: 5 or (7 coming soon) (there is a Image Link below to see how each configuration looks) Peak Charging Rate: DC=250KW / AC= 11KW'].join('')),
                                    footer: {
                                        text: '__**Powered by Tesla Model Finder**__'
                                    },
                                    thumbnail: {
                                        url: 'https://cdn.discordapp.com/attachments/848483779865739344/868411639362375720/left-pointing-magnifying-glass_1f50d.png'
                                    }
                                }],
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('Re$~$3$vt_c§)5CN')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_s:879733517418897419>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('=SA2u&Ny{~jAN(9h')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:number_3:879733517506977862>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('S@t5§s?~J8qs%_w@')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_x:879733517490221066>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('E-S,G.V9tm7%FCtr')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_y:879733517012070411>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('&zq,9UARWm)PZ%:_')
                                        .setLabel('Reload Button(s)')
                                        .setEmoji('<:symbol_reset:881139740185886751>')
                                        .setStyle(('SECONDARY')),
                                    ))]
                            }).then(m => {

                            });
                        }
                        if ((i.customId) == '&zq,9UARWm)PZ%:_') {
                            await i.update({
                                content: String('Use the Button'),
                                components: [(new MessageActionRow()
                                    .addComponents(new MessageButton()
                                        .setCustomId('Re$~$3$vt_c§)5CN')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_s:879733517418897419>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('=SA2u&Ny{~jAN(9h')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:number_3:879733517506977862>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('S@t5§s?~J8qs%_w@')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_x:879733517490221066>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('E-S,G.V9tm7%FCtr')
                                        .setLabel('Tesla Model')
                                        .setEmoji('<:letter_y:879733517012070411>')
                                        .setStyle(('SECONDARY')),
                                        new MessageButton()
                                        .setCustomId('&zq,9UARWm)PZ%:_')
                                        .setLabel('Reload Button(s)')
                                        .setEmoji('<:symbol_reset:881139740185886751>')
                                        .setStyle(('SECONDARY')),
                                    ))]
                            }).then(m => {

                            });
                        }

                    })

                });
            } else {}
        }

    });

    return s4d;
})();